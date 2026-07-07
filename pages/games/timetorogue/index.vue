<template>
  <div>
    <div class="content">
      <div class="flex flex-col">
        <img class="BoxTop" src="~/assets/TimeToRogue-logo.png" alt="Time to Rogue - A Roguelike Across Your Day" />

        <div class="text-center mt-3 max-w-4xl mx-auto px-4">
          <p class="text-white text-lg font-semibold mb-2">
            A Roguelike That Plays Out Across Your Day
          </p>
          <p class="text-white text-base mb-4">
            A dungeon crawler built for Apple Watch, where the resource isn't mana or gold — it's real-world time. Every action spends focus and narrows your view; focus returns over hours. The maze holds still while you recover, but rest too long and it starts to hunt — even while the app is closed.
          </p>

          <p class="ttr-accent font-semibold text-lg mb-2">⌚ Coming soon to Apple Watch</p>

          <div class="flex flex-col items-center gap-4 mt-6 mb-6">
            <!-- Swap in the live badge once the App Store listing is public:
            <a
              href="https://apps.apple.com/us/app/time-to-rogue/idXXXXXXXXXX"
              target="_blank"
              class="inline-block"
            >
              <img src="~/assets/app-store-badge.svg" alt="Download on the App Store" class="store-badge" />
            </a>
            -->
            <span class="coming-soon-badge">Apple Watch · watchOS · Coming Soon</span>
          </div>

          <div class="text-white text-left mb-6 space-y-4">
            <div>
              <h2 class="text-xl font-bold mb-2 ttr-accent">🎮 Core Gameplay</h2>
              <ul class="list-disc list-inside space-y-1">
                <li>Tap to move, fight, and descend through a neon dungeon on your wrist</li>
                <li>Every action spends focus — and your view narrows as it drains</li>
                <li>Focus recovers over real-world time, so knowing when to walk away is the skill</li>
                <li>Find the stairs down and dive deeper — the floors grow larger and more dangerous</li>
                <li>Every run is different, and every death is permanent</li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-bold mb-2 ttr-accent">⏳ What Makes It Different</h2>
              <div class="space-y-2">
                <div>
                  <h3 class="font-semibold text-lg">Time is the resource</h3>
                  <p class="text-sm">Play in glances across your day, not one long session. Focus recovers over hours — rest is a move, not a menu.</p>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">The maze moves while you're away</h3>
                  <p class="text-sm">You're safe while you recover — up to about 10 hours if you left exhausted. But once you're fully rested, the maze starts taking its turns, even while the app is closed, and it can reach you before you return.</p>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Push your luck</h3>
                  <p class="text-sm">Act on empty focus and you'll fight half-blind and take damage. Rest too long and the danger rises. Read the moment.</p>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">One rewind a day</h3>
                  <p class="text-sm">A daily time-reverse lets you undo a single fatal move. Bank it, or spend it to save a deep run.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-xl font-bold mb-2 ttr-accent">⌚ Built for Apple Watch</h2>
              <ul class="list-disc list-inside space-y-1">
                <li>A watch complication shows your focus recovering at a glance</li>
                <li>A nudge when you're rested and ready to dive again</li>
                <li>Deepest-floor leaderboard with fresh monthly runs</li>
                <li>Designed to be checked in seconds, anywhere</li>
              </ul>
            </div>
          </div>

          <!-- Screenshots Carousel -->
          <div class="mt-8 mb-6">
            <h2 class="text-xl font-bold mb-4 ttr-accent text-center">📸 Screenshots</h2>
            <div class="carousel-container">
              <button @click="prevScreenshot" class="carousel-button carousel-button-left" aria-label="Previous screenshot">
                ‹
              </button>
              <div class="carousel-image-wrapper">
                <img
                  :src="require(`~/assets/timetorogue_screenshots/${screenshots[currentScreenshot]}.png`)"
                  :alt="screenshotAlts[currentScreenshot]"
                  class="carousel-image"
                />
              </div>
              <button @click="nextScreenshot" class="carousel-button carousel-button-right" aria-label="Next screenshot">
                ›
              </button>
            </div>
            <p class="text-gray-400 text-sm text-center mt-3">{{ screenshotAlts[currentScreenshot] }}</p>
            <div class="carousel-dots">
              <button
                v-for="(screenshot, index) in screenshots"
                :key="index"
                @click="currentScreenshot = index"
                :class="['carousel-dot', { active: currentScreenshot === index }]"
                :aria-label="`Go to screenshot ${index + 1}`"
              ></button>
            </div>
          </div>

          <p class="ttr-accent font-semibold text-lg mb-4 text-center">⌚ Coming soon to Apple Watch</p>

          <div class="mt-6 text-center flex flex-col gap-2">
            <nuxt-link
              to="/games/timetorogue/support"
              class="text-blue-400 hover:text-blue-300 underline"
            >Support &amp; FAQ</nuxt-link>
            <nuxt-link
              to="/games/timetorogue/privacy"
              class="text-blue-400 hover:text-blue-300 underline"
            >Privacy Policy</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <footer class="text-center text-gray-400 text-sm py-6 border-t border-gray-700">
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
.content {
  margin: auto;
}

/* The game's neon focus cyan (Tailwind in this project predates `sky-*`). */
.ttr-accent {
  color: #38bdf8;
}

.BoxTop {
  max-width: 400px;
  margin: 0 auto;
}

/* Coming-soon pill (stands in for the store badge until launch) */
.coming-soon-badge {
  display: inline-block;
  background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
  color: white;
  font-weight: bold;
  letter-spacing: 0.03em;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(14, 165, 233, 0.35);
}

/* Store badges (used once launched) */
.store-badge {
  height: 3rem;
  width: auto;
  transition: opacity 0.3s ease;
}

.store-badge:hover {
  opacity: 0.8;
}

/* Carousel Styles — sized for the watch aspect ratio (~422x514) */
.carousel-container {
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image-wrapper {
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(14, 165, 233, 0.35);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
  background: #000;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s ease;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(14, 165, 233, 0.85);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.carousel-button:hover {
  background: rgba(14, 165, 233, 1);
}

.carousel-button:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-button-left {
  left: 0.25rem;
}

.carousel-button-right {
  right: 0.25rem;
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
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-dot.active {
  background: rgba(14, 165, 233, 0.9);
  transform: scale(1.2);
}

.carousel-dot:hover {
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 767px) {
  .carousel-container {
    padding: 0 0.5rem;
  }

  .carousel-button {
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
}
</style>
