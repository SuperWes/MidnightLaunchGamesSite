<template>
  <div>
    <div class="content">
      <div class="flex flex-col">
      <!-- TODO: Add Gridborn logo image to assets folder -->
      <img v-if="false" class="BoxTop" src="~/assets/Gridborn-logo.png" alt="Gridborn" />
      <h1 v-else class="text-4xl font-bold text-white text-center mt-6 mb-4">GRIDBORN</h1>

      <div class="text-center mt-3 max-w-4xl mx-auto px-4">
        <p class="text-white text-lg font-semibold mb-2">
          A Spatial Grid-Based Deck-Builder Roguelike
        </p>
        <p class="text-white text-base mb-4">
          Build your deck with powerful cards featuring directional attacks and shields as you navigate a treacherous hex grid map. Master the spatial combat system where positioning matters—chain element generation with powerful effects, apply devastating status effects, and use strategic card placement to overcome increasingly difficult enemies!
        </p>

        <p class="text-green-400 font-semibold text-lg mb-2">🎁 COMING SOON</p>

        <div class="flex flex-col items-center gap-4 mt-6 mb-6">
          <a
            href="https://apps.apple.com/us/app/gridborn/[APP_ID]"
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
            href="https://play.google.com/store/apps/details?id=com.midnightlaunchgames.gridborn"
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

        <div class="text-white text-left mb-6 space-y-4">
          <div>
            <h2 class="text-xl font-bold mb-2 text-purple-300">🎮 Core Gameplay</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>Tactical 3x3 grid combat where positioning is everything</li>
              <li>Directional attacks and shields—cards attack in 5 directions (forward, diagonals, sides)</li>
              <li>6 Element System: Generate and consume Fire, Ice, Lightning, Earth, Nature, and Poison for bonus damage</li>
              <li>Navigate procedurally generated hex grid maps with multiple paths</li>
              <li>Every run is unique with random encounters, rewards, and strategic choices</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold mb-2 text-purple-300">⚔️ Choose Your Archetype</h2>
            <div class="space-y-2">
              <p class="font-semibold">6 Unique Playstyles:</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>⚔️ <strong>Warrior</strong> - Pure physical combat with frontline pressure</li>
                <li>🔮 <strong>Caster</strong> - Fire/Ice magic with powerful elemental combos</li>
                <li>🗡️ <strong>Assassin</strong> - Poison/Nature specialist with flanking attacks</li>
                <li>🛡️ <strong>Paladin</strong> - Earth magic with defensive shield walls</li>
                <li>🌳 <strong>Druid</strong> - Nature magic with zone control and healing</li>
                <li>⚡ <strong>Stormcaller</strong> - Lightning magic with multi-target strikes</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold mb-2 text-purple-300">✨ Key Features</h2>
            <ul class="list-disc list-inside space-y-1">
              <li>121 Player Cards across 6 archetypes with unique abilities</li>
              <li>63 Enemy Cards with 7 dynamic archetype combinations</li>
              <li>Strategic deck-building with shop and rest sites between battles</li>
              <li>7 Positioning Abilities: Frontline, Backline, Flanking, Zone Control, and more</li>
              <li>Roguelike progression with strike system—three chances before game over</li>
              <li>Boss encounters that test your deck-building skills</li>
              <li>Artifact system for permanent bonuses and unique strategies</li>
            </ul>
          </div>
        </div>


        <!-- Screenshots Carousel - Uncomment when you have screenshots -->
        <!--
        <div class="mt-8 mb-6">
          <h2 class="text-xl font-bold mb-4 text-purple-300 text-center">📸 Screenshots</h2>
          <div class="carousel-container">
            <button @click="prevScreenshot" class="carousel-button carousel-button-left" aria-label="Previous screenshot">
              ‹
            </button>
            <div class="carousel-image-wrapper">
              <img 
                :src="require(`~/assets/gridborn_screenshots/${screenshots[currentScreenshot]}.png`)" 
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
        -->

        <p class="text-green-400 font-semibold text-lg mb-2 text-center">🎁 COMING SOON</p>

        <!-- Bottom Download Links -->
        <div class="flex flex-col items-center gap-4 mt-8 mb-4">
          <!-- Coming Soon - Links will be added when game is released -->
          <!--
          <a
            href="https://apps.apple.com/us/app/gridborn/[APP_ID]"
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
            href="https://play.google.com/store/apps/details?id=com.midnightlaunchgames.gridborn"
            target="_blank"
            class="inline-block"
          >
            <img
              src="~/assets/google-play-badge.png"
              alt="Get it on Google Play"
              class="store-badge"
            />
          </a>
          -->
          <p class="text-white text-center">
            Gridborn is currently in development. Check back soon for release information!
          </p>
        </div>

        <div class="mt-6 text-center flex flex-col gap-2">
          <nuxt-link
            to="/games/gridborn/support"
            class="text-blue-400 hover:text-blue-300 underline"
          >Support & FAQ</nuxt-link>
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
        // Add screenshot filenames here when ready
        // '01_screenshot',
        // '02_screenshot',
        // etc...
      ],
      screenshotAlts: [
        // Add screenshot descriptions here
        // 'Screenshot 1',
        // 'Screenshot 2',
        // etc...
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
      title: 'Gridborn - Spatial Grid Deck-Builder Roguelike',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Build your deck with powerful cards featuring directional attacks and shields. Master the spatial combat system where positioning matters in this strategic deck-builder roguelike. Coming soon to iOS and Android.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/gridborn/' },
        { hid: 'og:title', property: 'og:title', content: 'Gridborn - Spatial Grid Deck-Builder Roguelike' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Build your deck with powerful cards featuring directional attacks and shields as you navigate a treacherous hex grid map. Master the spatial combat system where positioning matters!'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/Gridborn-logo-solid.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '400' },
        { hid: 'og:image:height', property: 'og:image:height', content: '400' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/gridborn/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Gridborn - Spatial Grid Deck-Builder Roguelike' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Build your deck with powerful cards featuring directional attacks and shields as you navigate a treacherous hex grid map. Master the spatial combat system where positioning matters!'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/Gridborn-logo-solid.png' }
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

