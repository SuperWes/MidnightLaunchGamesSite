<template>
  <div>
    <div class="content">
      <div class="flex flex-col">
      <img class="BoxTop" src="~/assets/Gravesweeper-logo.png" alt="Gravesweeper - Halloween Puzzle Dungeon" />

      <div class="text-center mt-3 max-w-4xl mx-auto px-4">
        <p class="text-white text-lg font-semibold mb-2">
          Halloween Puzzle Dungeon
        </p>
        <p class="text-white text-base mb-4">
          Minesweeper meets a haunted dungeon adventure. Read the clues, dodge traps, collect candy, and build your way through dangerous floors. Play the free Campaign and Daily Run, or unlock Reaper's Run for a fresh roguelike challenge.
        </p>

        <p class="text-green-400 font-semibold text-lg mb-2">Free on iPhone and Android. Optional one-time purchases.</p>

        <div class="flex flex-col items-center gap-4 mt-6 mb-6">
          <a
            href="https://apps.apple.com/us/app/gravesweeper/id6754204296"
            target="_blank"
            class="inline-block"
          >
            <img
              src="~/assets/app-store-badge.svg"
              alt="Download on the App Store"
              class="store-badge"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.midnightlaunchgames.gravesweeper"
            target="_blank"
            class="inline-block"
          >
            <img
              src="~/assets/google-play-badge.png"
              alt="Get it on Google Play"
              class="store-badge"
            />
          </a>

        </div>

        <p class="text-white text-sm mt-6">Buy the desktop edition or try the web demo:</p>
        <div class="flex flex-col items-center gap-4 mt-3 mb-6">
          <a
            href="https://superwes.itch.io/gravesweeper"
            target="_blank"
            class="itch-button"
          >🖥️ Windows / Mac on itch.io</a>

          <a
            href="/games/gravesweeper/reapers_run/"
            target="_blank"
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 border border-purple-700 rounded"
          >🎮 Play Web Demo</a>
        </div>

        <section class="text-white text-left border-t border-b border-gray-700 py-6 mb-6" aria-labelledby="game-center-heading">
          <p class="text-green-400 text-sm font-semibold mb-2">New on iPhone and iPad in 1.0.9</p>
          <h2 id="game-center-heading" class="text-xl font-bold mb-3 text-purple-300">Game Center achievements and leaderboards</h2>
          <p class="mb-3">
            Earn 23 achievements for reaching new floors, collecting candy, and completing costume challenges. Previously unlocked costumes count when you sign in, too.
          </p>
          <p class="mb-3">
            Climb the leaderboards for campaign progress, Reaper's Run, and lifetime candy collection. Set a new personal best and see how your records compare with other players.
          </p>
          <p class="text-sm text-gray-400">Game Center is optional. Version 1.0.9 also includes stability improvements and requires iOS or iPadOS 15.6 or later.</p>
        </section>

        <div class="text-white text-left mb-6 space-y-4">
          <div>
            <h2 class="text-xl font-bold mb-2 text-purple-300">🎮 Core Gameplay</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Classic Minesweeper mechanics in a dungeon adventure format</li>
              <li>Swipe or tap to move your skeleton character</li>
              <li>Numbers reveal nearby trap counts - use logic to find safe paths</li>
              <li>Find the stairs to escape each level</li>
              <li>Progressive difficulty - levels get larger and more dangerous</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold mb-2 text-purple-300">🎯 Three Game Modes</h2>
            <div class="space-y-2">
              <div>
                <h3 class="font-semibold text-lg">Campaign Mode</h3>
                <p class="text-sm">Start at level 1 and climb as high as you can! Unlock 50+ permanent abilities in the shop, collect candies to purchase game-changing upgrades, and unlock spooky costumes as you progress.</p>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Reaper's Run (Roguelike Mode)</h3>
                <p class="text-sm">Draft abilities as you climb and discover combinations that help you survive. Every run is a new attempt, and death ends the run. Unlock this mode with a one-time purchase on mobile.</p>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Daily Run</h3>
                <p class="text-sm">Unlocks at level 10. Play a new challenge each day with a shared dungeon seed and preselected abilities. Track your results in the calendar and share your score with friends. Today's run is free; the optional Rewind Pass lets you revisit past Daily Runs and retry them.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold mb-2 text-purple-300">✨ Key Features</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Earn 23 Game Center achievements for costume milestones on iOS in version 1.0.9</li>
              <li>Climb Game Center leaderboards for campaign progress, Reaper's Run, and lifetime candy on iOS in version 1.0.9</li>
              <li>50+ unlockable abilities (Second Chance, Oracle Vision, Invincibility Burst, and more!)</li>
              <li>Collect 23 unlockable costumes through progress and special challenges</li>
              <li>Beautiful Halloween-themed graphics with multiple biomes</li>
              <li>Heat Levels - extra challenging floors with 1.5x traps</li>
              <li>Perfect Play rewards for clearing levels without mistakes</li>
              <li>Three local save slots with auto-save</li>
            </ul>
          </div>
        </div>


        <!-- Screenshots Carousel -->
        <div class="mt-8 mb-6">
          <h2 class="text-xl font-bold mb-4 text-purple-300 text-center">📸 Screenshots</h2>
          <div class="carousel-container">
            <button @click="prevScreenshot" class="carousel-button carousel-button-left" aria-label="Previous screenshot">
              ‹
            </button>
            <div class="carousel-image-wrapper">
              <img 
                :src="require(`~/assets/gravesweeper_screenshots/${screenshots[currentScreenshot]}.png`)" 
                :alt="screenshotAlts[currentScreenshot]" 
                class="carousel-image" 
              />
            </div>
            <button @click="nextScreenshot" class="carousel-button carousel-button-right" aria-label="Next screenshot">
              ›
            </button>
          </div>
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

        <p class="text-green-400 font-semibold text-lg mb-2 text-center">Free on iPhone and Android. Optional one-time purchases.</p>

        <!-- Bottom Download Links -->
        <div class="flex flex-col items-center gap-4 mt-8 mb-4">
          <a
            href="https://apps.apple.com/us/app/gravesweeper/id6754204296"
            target="_blank"
            class="inline-block"
          >
            <img
              src="~/assets/app-store-badge.svg"
              alt="Download on the App Store"
              class="store-badge"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.midnightlaunchgames.gravesweeper"
            target="_blank"
            class="inline-block"
          >
            <img
              src="~/assets/google-play-badge.png"
              alt="Get it on Google Play"
              class="store-badge"
            />
          </a>

        </div>

        <p class="text-white text-sm mt-6">Buy the desktop edition or try the web demo:</p>
        <div class="flex flex-col items-center gap-4 mt-3 mb-4">
          <a
            href="https://superwes.itch.io/gravesweeper"
            target="_blank"
            class="itch-button"
          >🖥️ Windows / Mac on itch.io</a>

          <a
            href="/games/gravesweeper/reapers_run/"
            target="_blank"
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 border border-purple-700 rounded"
          >🎮 Play Web Demo</a>
        </div>

        <div class="mt-6 text-center flex flex-col gap-2">
          <nuxt-link
            to="/games/gravesweeper/support"
            class="text-blue-400 hover:text-blue-300 underline"
          >Support & FAQ</nuxt-link>
          <nuxt-link
            to="/games/gravesweeper/privacy"
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
        '01_gameplay_graveyard',
        '02_title_screen',
        '03_gameplay_underworld',
        '04_ability_selection',
        '05_daily_run_calendar'
      ],
      screenshotAlts: [
        'Gameplay in Graveyard biome',
        'Title Screen',
        'Gameplay in Underworld biome',
        'Ability Selection',
        'Daily Run Calendar'
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
      title: 'Gravesweeper - Halloween Puzzle Dungeon',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Minesweeper meets a haunted dungeon. Play Campaign and Daily Run free on mobile, unlock abilities and costumes, and try Reaper's Run with a one-time purchase."
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/gravesweeper/' },
        { hid: 'og:title', property: 'og:title', content: 'Gravesweeper - Halloween Puzzle Dungeon' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Minesweeper meets a haunted dungeon. Play Campaign and Daily Run free on mobile, unlock abilities and costumes, and try Reaper's Run with a one-time purchase."
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/Gravesweeper-logo-solid.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '400' },
        { hid: 'og:image:height', property: 'og:image:height', content: '400' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/gravesweeper/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Gravesweeper - Halloween Puzzle Dungeon' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Minesweeper meets a haunted dungeon. Play Campaign and Daily Run free on mobile, unlock abilities and costumes, and try Reaper's Run with a one-time purchase."
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/Gravesweeper-logo-solid.png' }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  margin: auto;
}

.BoxTop {
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
}

/* Store badges */
.store-badge {
  height: 3rem;
  width: auto;
  transition: opacity 0.3s ease;
}

.store-badge:hover {
  opacity: 0.8;
}

/* itch.io Button */
.itch-button {
  display: inline-block;
  background: linear-gradient(135deg, #fa5c5c 0%, #d14141 100%);
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(250, 92, 92, 0.3);
}

.itch-button:hover {
  background: linear-gradient(135deg, #ff6b6b 0%, #e54545 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(250, 92, 92, 0.4);
}

/* Carousel Styles */
.carousel-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image-wrapper {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
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
  background: rgba(128, 90, 213, 0.8);
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
  background: rgba(128, 90, 213, 1);
}

.carousel-button:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-button-left {
  left: 1.5rem;
}

.carousel-button-right {
  right: 1.5rem;
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
  background: rgba(168, 85, 247, 0.9);
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
  
  .carousel-button-left {
    left: 0.75rem;
  }
  
  .carousel-button-right {
    right: 0.75rem;
  }
}


/* Scrollbar styling for webkit browsers */
.screenshot-gallery::-webkit-scrollbar {
  height: 8px;
}

.screenshot-gallery::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.screenshot-gallery::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.6);
  border-radius: 4px;
}

.screenshot-gallery::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.8);
}
</style>
