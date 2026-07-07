<template>
  <div class="ttr-page">
    <div class="ttr-scanlines" aria-hidden="true"></div>

    <div class="ttr-inner">
      <!-- Hero -->
      <header class="ttr-hero">
        <div class="hero-glow" aria-hidden="true"></div>
        <img class="hero-logo" src="~/assets/TimeToRogue-logo.png" alt="Time to Rogue - A Roguelike Across Your Day" />

        <p class="hero-tagline">A Roguelike That Plays Out Across Your Day</p>
        <p class="hero-sub">
          A dungeon crawler built for Apple Watch, where the resource isn't mana or gold — it's
          <span class="hl">real-world time</span>. Every action spends focus and narrows your view;
          focus returns over hours. The maze holds still while you recover, but rest too long and it
          starts to hunt — even while the app is closed.
        </p>

        <!-- Time-as-resource motif: a focus meter that slowly refills -->
        <div class="focus-readout" aria-hidden="true">
          <span class="mono-label">FOCUS</span>
          <div class="focus-bar"><div class="focus-fill"></div></div>
          <span class="mono-label muted">recovering…</span>
        </div>

        <span class="coming-soon-badge">⌚ Apple Watch · watchOS · Coming Soon</span>
      </header>

      <!-- Core Gameplay -->
      <section class="panel">
        <div class="kicker">// CORE_GAMEPLAY</div>
        <ul class="feature-list">
          <li>Tap to move, fight, and descend through a neon dungeon on your wrist</li>
          <li>Every action spends focus — and your view narrows as it drains</li>
          <li>Focus recovers over <span class="hl">real-world time</span>, so knowing when to walk away is the skill</li>
          <li>Find the stairs down and dive deeper — the floors grow larger and more dangerous</li>
          <li>Every run is different, and death is permanent. Your one <span class="hl">time-reverse</span> can undo a fatal move — if you've still got it when it counts</li>
        </ul>
      </section>

      <!-- What Makes It Different -->
      <section class="panel">
        <div class="kicker">// WHAT_MAKES_IT_DIFFERENT</div>
        <div class="tile-grid">
          <div class="tile">
            <h3>Time is the resource</h3>
            <p>Play in glances across your day, not one long session. Focus recovers over hours — rest is a move, not a menu.</p>
          </div>
          <div class="tile">
            <h3>The maze moves while you're away</h3>
            <p>You're safe while you recover — up to about 10 hours if you left exhausted. But once you're fully rested, the maze starts taking its turns, even while the app is closed, and it can reach you before you return.</p>
          </div>
          <div class="tile">
            <h3>Push your luck</h3>
            <p>Act on empty focus and you'll fight half-blind and take damage. Rest too long and the danger rises. Read the moment.</p>
          </div>
          <div class="tile">
            <h3>One rewind a day</h3>
            <p>A daily <span class="hl">time-reverse</span> lets you undo a single fatal move. Bank it, or spend it to save a deep run.</p>
          </div>
        </div>
      </section>

      <!-- Built for Apple Watch -->
      <section class="panel">
        <div class="kicker">// BUILT_FOR_APPLE_WATCH</div>
        <ul class="feature-list">
          <li>A watch complication shows your focus recovering at a glance</li>
          <li>A nudge when you're rested and ready to dive again</li>
          <li>Deepest-floor leaderboard with fresh monthly runs</li>
          <li>Designed to be checked in seconds, anywhere</li>
        </ul>
      </section>

      <!-- Screenshots Carousel, framed in an Apple Watch -->
      <section class="panel screenshots">
        <div class="kicker center">// SCREENSHOTS</div>
        <div class="carousel-container">
          <button @click="prevScreenshot" class="carousel-button carousel-button-left" aria-label="Previous screenshot">
            ‹
          </button>

          <div class="watch">
            <div class="watch-crown" aria-hidden="true"></div>
            <div class="watch-sidebutton" aria-hidden="true"></div>
            <div class="watch-screen">
              <img
                :src="require(`~/assets/timetorogue_screenshots/${screenshots[currentScreenshot]}.png`)"
                :alt="screenshotAlts[currentScreenshot]"
                class="watch-image"
              />
            </div>
          </div>

          <button @click="nextScreenshot" class="carousel-button carousel-button-right" aria-label="Next screenshot">
            ›
          </button>
        </div>
        <p class="screenshot-caption">{{ screenshotAlts[currentScreenshot] }}</p>
        <div class="carousel-dots">
          <button
            v-for="(screenshot, index) in screenshots"
            :key="index"
            @click="currentScreenshot = index"
            :class="['carousel-dot', { active: currentScreenshot === index }]"
            :aria-label="`Go to screenshot ${index + 1}`"
          ></button>
        </div>
      </section>

      <div class="closing">
        <p class="coming-soon-line">⌚ Coming soon to Apple Watch</p>
        <div class="closing-links">
          <nuxt-link to="/games/timetorogue/support" class="ttr-link">Support &amp; FAQ</nuxt-link>
          <nuxt-link to="/games/timetorogue/privacy" class="ttr-link">Privacy Policy</nuxt-link>
        </div>
      </div>
    </div>

    <footer class="ttr-footer">
      <p>&copy;{{ new Date().getFullYear() }} Wes Ehrlichman. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentScreenshot: 0,
      screenshots: [
        '01_gameplay',
        '02_close_call',
        '03_death',
        '04_complication',
        '05_time_reverse',
        '06_title'
      ],
      screenshotAlts: [
        'Descending a neon dungeon on your wrist',
        'Low focus, cornered — push your luck',
        'The maze took its turns while you were away',
        'A complication that shows your focus recovering',
        'Spend a time-reverse to undo a fatal move',
        'Title screen — how deep can you get?'
      ]
    }
  },
  methods: {
    nextScreenshot() {
      this.currentScreenshot = (this.currentScreenshot + 1) % this.screenshots.length
    },
    prevScreenshot() {
      this.currentScreenshot = this.currentScreenshot === 0
        ? this.screenshots.length - 1
        : this.currentScreenshot - 1
    },
  },
  head() {
    return {
      title: 'Time to Rogue - A Roguelike Across Your Day',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "A roguelike for Apple Watch where the resource is real-world time. Every action spends focus; focus recovers over hours. The dungeon keeps moving while the app is closed. How deep can you get?"
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/timetorogue/' },
        { hid: 'og:title', property: 'og:title', content: 'Time to Rogue - A Roguelike Across Your Day' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "A roguelike for Apple Watch where the resource is real-world time. The dungeon keeps moving while the app is closed — reach the deepest floor before it finds you."
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/TimeToRogue-logo.png' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/timetorogue/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Time to Rogue - A Roguelike Across Your Day' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "A roguelike for Apple Watch where the resource is real-world time. Reach the deepest floor before the dungeon finds you."
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/TimeToRogue-logo.png' }
      ]
    }
  }
}
</script>

<style scoped>
/* ── Palette ─────────────────────────────────────────────
   The game lives on pure black with neon-cyan pixels and a
   yellow "action / time" accent (START button, stopwatch). */
.ttr-page {
  position: relative;
  min-height: 100%;
  /* Full-bleed dark canvas — break out of the site's blue-purple bg */
  background:
    radial-gradient(1200px 600px at 50% -100px, rgba(56, 189, 248, 0.10), transparent 70%),
    linear-gradient(180deg, #05070d 0%, #090d18 55%, #05070d 100%);
  color: #dbe4f0;
  overflow: hidden;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Subtle CRT scanline overlay */
.ttr-scanlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.025) 0px,
    rgba(255, 255, 255, 0.025) 1px,
    transparent 1px,
    transparent 3px
  );
  opacity: 0.5;
}

.ttr-inner {
  position: relative;
  z-index: 2;
  max-width: 780px;
  margin: 0 auto;
  padding: 0 1.25rem 1rem;
}

.mono-label,
.kicker {
  font-family: "SF Mono", "Fira Code", "JetBrains Mono", "Courier New", monospace;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hl {
  color: #fde047;
  font-weight: 600;
}

/* ── Hero ────────────────────────────────────────────── */
.ttr-hero {
  position: relative;
  text-align: center;
  /* Generous top padding so the logo never butts against the header */
  padding: 3.5rem 0 2.5rem;
}

.hero-glow {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: min(560px, 90%);
  height: 300px;
  background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.28), transparent 65%);
  filter: blur(12px);
  pointer-events: none;
  z-index: -1;
}

.hero-logo {
  display: block;
  max-width: 420px;
  width: 82%;
  margin: 0 auto 1.5rem;
  filter: drop-shadow(0 0 22px rgba(56, 189, 248, 0.35));
}

.hero-tagline {
  color: #7dd3fc;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.hero-sub {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.65;
  max-width: 620px;
  margin: 0 auto 1.5rem;
}

/* Focus meter — literally shows "focus recovers over time" */
.focus-readout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  max-width: 420px;
  margin: 0 auto 1.75rem;
  font-size: 0.7rem;
}

.focus-readout .mono-label {
  color: #38bdf8;
}

.focus-readout .muted {
  color: #64748b;
}

.focus-bar {
  flex: 1;
  height: 8px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  overflow: hidden;
}

.focus-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #0ea5e9, #7dd3fc);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
  animation: focus-recover 6s ease-in-out infinite;
}

@keyframes focus-recover {
  0%   { width: 18%; }
  70%  { width: 100%; }
  85%  { width: 100%; }
  100% { width: 18%; }
}

@media (prefers-reduced-motion: reduce) {
  .focus-fill { animation: none; width: 78%; }
}

/* Coming-soon pill — echoes the in-game yellow START glow */
.coming-soon-badge {
  display: inline-block;
  background: linear-gradient(135deg, #facc15 0%, #fde047 100%);
  color: #1a1400;
  font-weight: 800;
  letter-spacing: 0.03em;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  box-shadow: 0 0 22px rgba(250, 204, 21, 0.45);
}

/* ── Panels ──────────────────────────────────────────── */
.panel {
  background: rgba(56, 189, 248, 0.035);
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 12px;
  padding: 1.5rem 1.5rem 1.75rem;
  margin-bottom: 1.25rem;
  text-align: left;
}

.kicker {
  color: #38bdf8;
  font-size: 0.72rem;
  margin-bottom: 1rem;
}

.kicker.center {
  text-align: center;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  position: relative;
  padding-left: 1.4rem;
  margin-bottom: 0.7rem;
  color: #dbe4f0;
  line-height: 1.5;
}

.feature-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #38bdf8;
}

.tile-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9rem;
}

.tile {
  background: rgba(5, 7, 13, 0.55);
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 10px;
  padding: 1rem 1.1rem;
}

.tile h3 {
  color: #7dd3fc;
  font-size: 1.02rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.tile p {
  color: #b6c2d4;
  font-size: 0.88rem;
  line-height: 1.5;
}

/* ── Screenshots in an Apple Watch ───────────────────── */
.screenshots {
  text-align: center;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0 0.25rem;
}

/* Apple Watch case */
.watch {
  position: relative;
  padding: 18px 14px;
  background: linear-gradient(145deg, #2a2f3a 0%, #10131b 55%, #05070d 100%);
  border-radius: 42px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 10px 30px rgba(0, 0, 0, 0.7),
    inset 0 1px 2px rgba(255, 255, 255, 0.08);
}

.watch-screen {
  width: 220px;
  max-width: 60vw;
  border-radius: 28px;
  overflow: hidden;
  background: #000;
  box-shadow: inset 0 0 0 2px #000;
}

.watch-image {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s ease;
}

/* Digital crown + side button on the right edge */
.watch-crown {
  position: absolute;
  right: -5px;
  top: 38%;
  width: 8px;
  height: 34px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3a4150, #1a1e27);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}

.watch-sidebutton {
  position: absolute;
  right: -3px;
  top: 58%;
  width: 5px;
  height: 46px;
  border-radius: 3px;
  background: linear-gradient(90deg, #2b313c, #14171f);
}

.screenshot-caption {
  color: #94a3b8;
  font-size: 0.85rem;
  margin-top: 0.9rem;
}

.carousel-button {
  background: rgba(56, 189, 248, 0.12);
  color: #7dd3fc;
  border: 1px solid rgba(56, 189, 248, 0.4);
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.carousel-button:hover {
  background: rgba(56, 189, 248, 0.28);
}

.carousel-button:active {
  transform: scale(0.94);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.22);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-dot.active {
  background: #38bdf8;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
  transform: scale(1.2);
}

.carousel-dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* ── Closing ─────────────────────────────────────────── */
.closing {
  text-align: center;
  padding: 0.5rem 0 1.5rem;
}

.coming-soon-line {
  color: #7dd3fc;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
}

.closing-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
}

.ttr-link {
  color: #38bdf8;
  text-decoration: none;
  border-bottom: 1px solid rgba(56, 189, 248, 0.4);
  transition: color 0.2s ease;
}

.ttr-link:hover {
  color: #7dd3fc;
}

.ttr-footer {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #64748b;
  font-size: 0.8rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(56, 189, 248, 0.15);
}

@media (max-width: 640px) {
  .tile-grid {
    grid-template-columns: 1fr;
  }

  .ttr-hero {
    padding-top: 2.5rem;
  }

  .carousel-button {
    width: 34px;
    height: 34px;
    min-width: 34px;
    font-size: 20px;
  }
}
</style>
