import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Inline the built JS and CSS into index.html. Browsers block module scripts and
// crossorigin stylesheets on file:// URLs, so without this, opening dist/index.html
// directly shows a blank page. Card images stay in dist/cards/ and load by relative path.
function inlineAssets() {
  return {
    name: 'inline-assets',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = Object.values(bundle).find((f) => f.fileName === 'index.html');
      if (!html) return;
      let src = html.source;
      for (const [name, file] of Object.entries(bundle)) {
        const ref = new RegExp(`<script[^>]*src="[^"]*${name.replace(/[.$]/g, '\\$&')}"[^>]*></script>`);
        const css = new RegExp(`<link[^>]*href="[^"]*${name.replace(/[.$]/g, '\\$&')}"[^>]*>`);
        if (file.type === 'chunk' && ref.test(src)) {
          // Escape "</script" inside the code so it cannot end the inline tag early.
          const code = file.code.replace(/<\/script/gi, '<\\/script');
          src = src.replace(ref, () => `<script type="module">${code}</script>`);
          delete bundle[name];
        } else if (file.type === 'asset' && name.endsWith('.css') && css.test(src)) {
          src = src.replace(css, () => `<style>${file.source}</style>`);
          delete bundle[name];
        }
      }
      html.source = src;
    }
  };
}

// base './' makes the build work under any GitHub Pages path (user.github.io/repo-name/)
export default defineConfig({ base: './', plugins: [svelte(), inlineAssets()] });
