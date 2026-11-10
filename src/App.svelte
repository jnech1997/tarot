<script>
  import Card from './lib/Card.svelte';
  import Cosmos from './lib/Cosmos.svelte';
  import { deck, suits } from './lib/cards.js';
  import { lore } from './lib/lore.js';
  import { areas } from './lib/readings.js';
  import { waite } from './lib/waite.js';

  let view = $state('draw');
  let drawn = $state(null);
  let flipped = $state(false);
  let round = $state(0);
  let filter = $state('all');
  let picked = $state(deck[0]);

  function draw() {
    drawn = { card: deck[Math.floor(Math.random() * deck.length)], reversed: Math.random() < 0.3 };
    flipped = false;
    round++;
  }
  draw();

  function pick(c) {
    picked = c;
    // On narrow screens the detail panel sits above the list; it is sticky only in the wide layout (see app.css).
    const detail = document.getElementById('detail');
    if (detail && getComputedStyle(detail).position !== 'sticky') detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  let list = $derived(deck.filter((c) => filter === 'all' || (filter === 'major' ? c.arcana === 'major' : c.suit?.key === filter)));
  const filters = [
    ['all', 'All 78'], ['major', 'Major Arcana'], ...suits.map((s) => [s.key, s.name])
  ];
</script>

<!-- orient: 'up' or 'rev' shows one orientation (draw view); null shows both (index). -->
{#snippet lorebox(c, orient)}
  {@const l = lore(c)}
  {@const lifeAreas = [['Love', 'love'], ['Work and money', 'work'], ['Personal growth', 'growth']]}
  <div class="lore">
    <h3>What the card means{orient === 'rev' ? ': read reversed' : ''}</h3>
    <p>{l.deep}</p>
    {#if orient === 'rev'}
      <p class="rev-note">This card fell reversed. Its energy is blocked, turned inward or overdone. Look for where these themes are stuck or out of balance in your situation.</p>
    {/if}
    <h3>Symbols to look for</h3>
    <ul>{#each l.sym as [s, m]}<li><strong>{s}</strong>: {m}</li>{/each}</ul>

    {#each orient ? [orient] : ['up', 'rev'] as o}
      {@const a = o === 'up' ? areas[c.name] : areas[c.name].rev}
      <h3>In your life{orient ? '' : o === 'up' ? ', upright' : ', reversed'}</h3>
      <dl class="areas">
        {#each lifeAreas as [label, key]}<dt>{label}</dt><dd>{a[key]}</dd>{/each}
      </dl>
    {/each}

    <h3>The traditional reading</h3>
    <p class="note">A. E. Waite's divinatory meanings, from <cite>The Pictorial Key to the Tarot</cite> (1911). Older and more literal than modern readings.</p>
    {#if orient !== 'rev'}<p>{#if !orient}<em>Upright:</em>{' '}{/if}{waite[c.name].up}</p>{/if}
    {#if orient !== 'up'}<p>{#if !orient}<em>Reversed:</em>{' '}{/if}{waite[c.name].rev ?? 'Waite gives no reversed meaning for this card.'}</p>{/if}
  </div>
{/snippet}

<main>
  <header class="topbar">
    <h1><span class="moon" aria-hidden="true">☽</span> Arcana</h1>
    <nav class="seg" aria-label="Sections">
      <button class:on={view === 'draw'} aria-pressed={view === 'draw'} onclick={() => (view = 'draw')}>Draw a card</button>
      <button class:on={view === 'index'} aria-pressed={view === 'index'} onclick={() => (view = 'index')}>Card index</button>
    </nav>
  </header>

  {#if view === 'draw'}
    <!-- The card sits centred in the first screen; prompts and the shuffle button go underneath it. -->
    <section class="table" aria-label="Your draw">
      <Cosmos />
      {#key round}
        <div class="stage">
          <Card card={drawn.card} reversed={drawn.reversed} {flipped} selected={flipped} onflip={() => (flipped = true)} />
        </div>
      {/key}
      {#if !flipped}
        <p class="hint">Hold a question in mind, then tap the card to turn it over.</p>
      {:else}
        <button class="primary" onclick={draw}>Shuffle and draw again</button>
        <a class="cue" href="#reading">Read the meaning ↓</a>
      {/if}
    </section>

    {#if flipped}
      <article class="meaning" id="reading" aria-live="polite">
        <h2>{drawn.card.name}{drawn.reversed ? ' (reversed)' : ''}</h2>
        <p class="kw">{drawn.card.kw.join(', ')}</p>
        <p class="main-text">{drawn.reversed ? drawn.card.rev : drawn.card.up}</p>
        {@render lorebox(drawn.card, drawn.reversed ? 'rev' : 'up')}
      </article>
    {/if}
  {:else}
    <section class="study" aria-label="Card index">
      <article class="detail" id="detail" aria-live="polite">
        {#key picked.id}
          <div class="detail-card" style="--cw: clamp(120px, 40vw, 200px)">
            <Card card={picked} flipped={true} interactive={false} />
          </div>
        {/key}
        <div class="detail-text">
          <h2>{picked.name}</h2>
          <p class="pos">{picked.arcana === 'major' ? `Major Arcana, card ${picked.n}` : `Minor Arcana, suit of ${picked.suit.name} (${picked.suit.element})`}</p>
          <p class="kw">{picked.kw.join(', ')}</p>
          <p class="main-text"><em>Upright:</em> {picked.up}</p>
          <p class="main-text"><em>Reversed:</em> {picked.rev}</p>
          {@render lorebox(picked, null)}
          {#if picked.arcana === 'minor'}
            <p class="alt"><em>The number:</em> {picked.rank.name} stands for {picked.rank.kw.join(', ')}.</p>
            <p class="alt"><em>The suit:</em> {picked.suit.name} covers {picked.suit.domain}.</p>
          {/if}
        </div>
      </article>

      <div class="list">
        <div class="chips filters" role="group" aria-label="Filter cards">
          {#each filters as [key, label]}
            <button class="pill" class:on={filter === key} onclick={() => (filter = key)}>{label}</button>
          {/each}
        </div>
        <div class="tiles">
          {#each list as c (c.id)}
            <button class="chip" class:on={picked.id === c.id} onclick={() => pick(c)} aria-label={c.name}>
              <img src="{import.meta.env.BASE_URL}cards/thumbs/{c.id}.jpg" alt="" loading="lazy" draggable="false" />
              <span>{c.name}</span>
            </button>
          {/each}
        </div>
      </div>
    </section>
  {/if}

  <footer>For reflection and entertainment. The cards show possibilities; you make the choices.</footer>
</main>
