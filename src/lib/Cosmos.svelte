<script>
  // Animated orrery drawn behind the card: starfield, central glow, tilted orbits with planets,
  // a slowly turning zodiac ring and the occasional shooting star. Canvas 2D, no dependencies.
  import { onMount } from 'svelte';

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const GOLD = '201,162,75';
    const ZODIAC = '♈♉♊♋♌♍♎♏♐♑♒♓'.split('').map((g) => g + '︎');
    const TILT = -0.2; // radians; tilts the orbital plane
    const FLAT = 0.36; // ellipse height / width, fakes a 3D plane seen at an angle

    // Planets: orbit radius (fraction of base), size (px), period (s), colours, extras.
    const planets = [
      { r: 0.42, size: 5, period: 18, a: Math.random() * 6.3, c: ['#f6e7b0', '#b08a2e'] },
      { r: 0.6, size: 9, period: 30, a: Math.random() * 6.3, c: ['#9fe3dc', '#2f6f6a'], moon: true },
      { r: 0.8, size: 7, period: 44, a: Math.random() * 6.3, c: ['#f2a07b', '#6b1d2e'] },
      { r: 1.02, size: 13, period: 70, a: Math.random() * 6.3, c: ['#e6c36a', '#7a5a1c'], ring: true },
      { r: 1.25, size: 8, period: 105, a: Math.random() * 6.3, c: ['#c3b5f0', '#3d2159'] }
    ];

    let w = 0, h = 0, cx = 0, cy = 0, base = 0, stars = [], shooting = null, zodiacA = 0;

    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Centre on the card; size orbits so the inner ones peek out around it.
      const card = canvas.parentElement.querySelector('.stage');
      const cr = card?.getBoundingClientRect();
      cx = cr ? cr.left + cr.width / 2 - rect.left : w / 2;
      cy = cr ? cr.top + cr.height / 2 - rect.top : h / 2;
      base = Math.max(cr ? cr.height * 0.62 : 200, Math.min(w, h) * 0.42);
      stars = Array.from({ length: Math.round((w * h) / 2600) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        s: Math.random() ** 3 * 1.6 + 0.3, t: Math.random() * 6.3, sp: 0.5 + Math.random() * 1.5
      }));
    }

    // Position on the tilted ellipse; depth > 0 means the near side of the plane.
    function orbit(r, a) {
      const x = Math.cos(a) * r, y = Math.sin(a) * r * FLAT;
      return { x: cx + x * Math.cos(TILT) - y * Math.sin(TILT), y: cy + x * Math.sin(TILT) + y * Math.cos(TILT), depth: Math.sin(a) };
    }

    function glow(x, y, r, color, alpha) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${color},${alpha})`); g.addColorStop(1, `rgba(${color},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    }

    function planet(p, t) {
      const o = orbit(p.r * base, p.a);
      const k = 0.75 + 0.25 * o.depth; // nearer = bigger and brighter
      const s = p.size * k;
      ctx.globalAlpha = 0.55 + 0.45 * k;
      glow(o.x, o.y, s * 5, GOLD, 0.35);
      if (p.ring) { // back half of the ring
        ctx.strokeStyle = `rgba(${GOLD},.7)`; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.ellipse(o.x, o.y, s * 2.2, s * 0.6, -0.35, Math.PI, 2 * Math.PI); ctx.stroke();
      }
      const g = ctx.createRadialGradient(o.x - s * 0.35, o.y - s * 0.35, s * 0.1, o.x, o.y, s);
      g.addColorStop(0, p.c[0]); g.addColorStop(1, p.c[1]);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(o.x, o.y, s, 0, 7); ctx.fill();
      if (p.ring) { // front half
        ctx.beginPath(); ctx.ellipse(o.x, o.y, s * 2.2, s * 0.6, -0.35, 0, Math.PI); ctx.stroke();
      }
      if (p.moon) {
        const ma = t * 1.6;
        const mx = o.x + Math.cos(ma) * s * 2.6, my = o.y + Math.sin(ma) * s * 1.1;
        ctx.fillStyle = '#efe6d2'; ctx.beginPath(); ctx.arc(mx, my, 1.6 * k, 0, 7); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function frame(t, dt) {
      ctx.clearRect(0, 0, w, h);

      // Starfield
      for (const s of stars) {
        const a = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.sp + s.t));
        ctx.fillStyle = `rgba(239,230,210,${a * 0.8})`;
        ctx.fillRect(s.x, s.y, s.s, s.s);
      }

      // Central glow behind the card, slowly breathing
      const pulse = 1 + 0.06 * Math.sin(t * 0.8);
      glow(cx, cy, base * 1.05 * pulse, '107,61,140', 0.5);
      glow(cx, cy, base * 0.6 * pulse, GOLD, 0.24);

      // Zodiac ring
      zodiacA += dt * 0.02;
      const zr = base * 1.5;
      ctx.strokeStyle = `rgba(${GOLD},.3)`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, zr - 16, 0, 7); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx, cy, zr + 16, 0, 7); ctx.stroke();
      ctx.fillStyle = `rgba(${GOLD},.7)`;
      ctx.font = `${Math.max(14, base * 0.07)}px serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ZODIAC.forEach((g, i) => {
        const a = zodiacA + (i / 12) * Math.PI * 2;
        ctx.save(); ctx.translate(cx + Math.cos(a) * zr, cy + Math.sin(a) * zr); ctx.rotate(a + Math.PI / 2);
        ctx.fillText(g, 0, 0); ctx.restore();
      });
      for (let i = 0; i < 72; i++) { // tick marks between the rings
        const a = -zodiacA * 0.5 + (i / 72) * Math.PI * 2, r1 = zr - 16, r2 = r1 - (i % 6 ? 4 : 9);
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
        ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2); ctx.stroke();
      }

      // Orbits
      for (const p of planets) {
        ctx.strokeStyle = `rgba(${GOLD},.26)`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.ellipse(cx, cy, p.r * base, p.r * base * FLAT, TILT, 0, 7); ctx.stroke();
        // Glowing trail behind the planet, fading out along the orbit
        ctx.lineWidth = 2; ctx.lineCap = 'round';
        for (let i = 0; i < 24; i++) {
          const a0 = p.a - (i + 1) * 0.04, a1 = p.a - i * 0.04;
          ctx.strokeStyle = `rgba(${GOLD},${0.55 * (1 - i / 24)})`;
          ctx.beginPath(); ctx.ellipse(cx, cy, p.r * base, p.r * base * FLAT, TILT, a0, a1); ctx.stroke();
        }
      }
      for (const p of planets) p.a += (dt / p.period) * Math.PI * 2;
      // Far planets first so near ones overlap them
      [...planets].sort((a, b) => Math.sin(a.a) - Math.sin(b.a)).forEach((p) => planet(p, t));

      // Shooting star, now and then
      if (!shooting && Math.random() < dt * 0.12) {
        shooting = { x: Math.random() * w, y: Math.random() * h * 0.4, vx: -(250 + Math.random() * 200), vy: 120 + Math.random() * 80, life: 1 };
      }
      if (shooting) {
        const s = shooting;
        s.x += s.vx * dt; s.y += s.vy * dt; s.life -= dt * 1.1;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 0.25, s.y - s.vy * 0.25);
        g.addColorStop(0, `rgba(255,245,220,${Math.max(s.life, 0)})`); g.addColorStop(1, 'rgba(255,245,220,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 0.25, s.y - s.vy * 0.25); ctx.stroke();
        if (s.life <= 0) shooting = null;
      }
    }

    let raf = 0, last = 0, t = 0, visible = true;
    function loop(now) {
      const dt = Math.min((now - (last || now)) / 1000, 0.05);
      last = now; t += dt;
      frame(t, dt);
      raf = requestAnimationFrame(loop);
    }
    function start() { if (!raf && !reduce && visible) { last = 0; raf = requestAnimationFrame(loop); } }
    function stop() { cancelAnimationFrame(raf); raf = 0; }

    const ro = new ResizeObserver(() => { resize(); if (reduce || !raf) frame(t, 0); });
    ro.observe(canvas);
    // Pause when the draw area scrolls out of view
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); });
    io.observe(canvas);

    resize(); frame(0, 0); start();
    return () => { stop(); ro.disconnect(); io.disconnect(); };
  });
</script>

<canvas bind:this={canvas} class="cosmos" aria-hidden="true"></canvas>

<style>
  /* Full-bleed behind the draw area; fades out at the bottom into the page */
  .cosmos {
    position: absolute; top: 0; bottom: 0; left: 50%; width: 100vw; height: 100%;
    transform: translateX(-50%); z-index: 0; pointer-events: none;
    mask-image: linear-gradient(to bottom, #000 75%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, #000 75%, transparent);
  }
</style>
