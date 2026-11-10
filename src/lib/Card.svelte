<script>
  // interactive=false renders a static, already-revealed card (no button semantics).
  let { card, reversed = false, flipped = false, label = '', selected = false, interactive = true, onflip } = $props();
</script>

{#snippet faces()}
    <span class="inner">
      <!-- Back -->
      <span class="face back">
        <svg viewBox="0 0 200 300" aria-hidden="true">
          <rect x="8" y="8" width="184" height="284" rx="10" class="ln" />
          <rect x="16" y="16" width="168" height="268" rx="6" class="ln thin" />
          <g transform="translate(100 150)">
            {#each Array(24) as _, i}
              <line x1="0" y1="-26" x2="0" y2={i % 2 ? -58 : -78} transform="rotate({i * 15})" class="ln thin" />
            {/each}
            <circle r="22" class="ln" /><circle r="14" class="ln thin" />
            <circle r="84" class="ln thin" /><circle r="90" class="ln" />
            <path d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3Z" class="fill" />
          </g>
          {#each [[30, 34], [170, 34], [30, 266], [170, 266]] as [x, y]}
            <path d="M{x} {y - 8} L{x + 3} {y - 3} L{x + 8} {y} L{x + 3} {y + 3} L{x} {y + 8} L{x - 3} {y + 3} L{x - 8} {y} L{x - 3} {y - 3}Z" class="fill" />
          {/each}
        </svg>
      </span>
      <!-- Front: Rider-Waite-Smith scan (Pamela Colman Smith, 1909, public domain) -->
      <span class="face front">
        <img class:rev={reversed} src="{import.meta.env.BASE_URL}cards/{card.id}.jpg" alt="{card.name}{reversed ? ' (reversed)' : ''}" draggable="false" />
        <span class="sheen"></span>
      </span>
    </span>
{/snippet}

<div class="slot">
  {#if label}<span class="label">{label}</span>{/if}
  {#if interactive}
    <button class="card" class:flipped class:selected onclick={onflip}
      aria-label={flipped ? `${card.name}${reversed ? ', reversed' : ''}` : `Reveal ${label ? label.toLowerCase() : 'the card'}`}>
      {@render faces()}
    </button>
  {:else}
    <div class="card" class:flipped class:selected>{@render faces()}</div>
  {/if}
  <span class="orient">{flipped && reversed ? 'Reversed' : flipped ? 'Upright' : ''}</span>
</div>

<style>
  .slot { display: grid; justify-items: center; gap: 0.6rem; animation: deal 0.9s cubic-bezier(.2,.8,.2,1) both; }
  .label { font-family: 'Cinzel Decorative', serif; color: var(--gold); font-size: clamp(0.8rem, 2.2vw, 1rem); letter-spacing: 0.08em; }
  .orient { min-height: 1.2em; font-style: italic; color: var(--bone-dim); font-size: 0.95rem; }
  .card { all: unset; cursor: pointer; display: block; width: var(--cw); aspect-ratio: 3 / 5; perspective: 1200px; border-radius: 14px; }
  .card:focus-visible { outline: 2px solid var(--gold); outline-offset: 6px; }
  .inner { position: relative; display: block; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 1.1s cubic-bezier(.3,.9,.25,1); }
  .flipped .inner { transform: rotateY(180deg); }
  div.card { cursor: default; }
  .card:hover:not(.flipped) .inner { transform: translateY(-6px) rotateZ(-1deg); }
  .selected .face { box-shadow: 0 0 0 2px var(--gold), 0 0 40px rgba(201,162,75,.55); }
  .face { position: absolute; inset: 0; border-radius: 14px; backface-visibility: hidden; -webkit-backface-visibility: hidden; overflow: hidden; box-shadow: 0 14px 40px rgba(0,0,0,.55), 0 0 0 1px rgba(201,162,75,.5); }
  .back { background: radial-gradient(circle at 50% 45%, #3b1630 0%, #1c0f2e 70%); }
  .back svg { width: 100%; height: 100%; display: block; }
  .front { transform: rotateY(180deg); background: radial-gradient(ellipse at 50% 30%, #f3e9cf 0%, #e0cfa3 70%, #c9b283 100%); color: #2a1635; }
  .front img { width: 100%; height: 100%; display: block; object-fit: cover; -webkit-user-drag: none; user-select: none; }
  .front img.rev { transform: rotate(180deg); }
  .ln { fill: none; stroke: var(--gold); stroke-width: 1.4; }
  .thin { stroke-width: 0.7; opacity: .8; }
  .fill { fill: var(--gold); }
  .sheen { position: absolute; inset: 0; background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,.7) 50%, transparent 65%); transform: translateX(-120%); pointer-events: none; }
  .flipped .sheen { animation: sheen 1.4s .7s ease-out 1 both; }
  @keyframes sheen { to { transform: translateX(120%); } }
  @keyframes deal { from { opacity: 0; transform: translateY(-60px) scale(.8) rotate(-8deg); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: reduce) { .slot, .sheen { animation: none !important; } .inner { transition-duration: .01s; } }
</style>
