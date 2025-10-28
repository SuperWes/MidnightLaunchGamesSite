<template>
  <div class="content">
    <div class="flex flex-col">
      <h1 class="text-xl font-bold text-white text-center mt-4">Gravesweeper</h1>
      <img class="BoxTop" src="~/assets/Gravesweeper-logo.png" />

      <div class="text-center mt-3 max-w-4xl mx-auto px-4">
        <p class="text-white text-lg font-semibold mb-4">
          Navigate through haunted dungeons as a brave skeleton, using Minesweeper-style logic to avoid deadly traps and find your way to freedom!
        </p>
        
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
                <p class="text-sm">Pure skill-based challenge with permanent death! Draft abilities every few floors to build unique combos. No shop, no saves - just you vs the dungeon.</p>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Daily Run</h3>
                <p class="text-sm">Fresh challenge every 24 hours with pre-selected abilities. Compete with friends on the same seed and track your performance in the calendar!</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold mb-2 text-purple-300">✨ Key Features</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>50+ unlockable abilities (Second Chance, Oracle Vision, Invincibility Burst, and more!)</li>
              <li>20+ unlockable costumes (Ghost, Vampire, Witch, Demon...)</li>
              <li>Beautiful Halloween-themed graphics with multiple biomes</li>
              <li>Heat Levels - extra challenging floors with 1.5x traps</li>
              <li>Perfect Play rewards for clearing levels without mistakes</li>
              <li>3 Save Slots + Auto-Save</li>
            </ul>
          </div>
        </div>
        
        <div class="flex flex-col items-center gap-4 mt-6">
          <a
            href="/games/gravesweeper/reapers_run/"
            target="_blank"
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 border border-purple-700 rounded"
          >🎮 Play Web Demo</a>
          
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
          
          <button @click="showComingSoon" class="inline-block cursor-pointer border-0 bg-transparent p-0">
            <img 
              src="~/assets/google-play-badge.png" 
              alt="Coming Soon to Google Play" 
              class="store-badge"
            />
          </button>
        </div>
        
        <!-- Coming Soon Toast -->
        <div v-if="showToast" class="toast">
          🎮 Android version coming soon!
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
</template>

<script>
export default {
  data() {
    return {
      currentScreenshot: 0,
      showToast: false,
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
    showComingSoon() {
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
.content {
  margin: auto;
}

.BoxTop {
  max-width: 400px;
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

/* Toast notification */
.toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(128, 90, 213, 0.95);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  z-index: 1000;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
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

