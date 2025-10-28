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
              class="h-12 hover:opacity-80 transition-opacity"
            />
          </a>
          
          <div class="bg-gray-600 text-white font-bold py-2 px-4 border border-gray-700 rounded">
            Coming Soon to Android
          </div>
        </div>

        <!-- Screenshots Gallery -->
        <div class="mt-8 mb-6">
          <h2 class="text-xl font-bold mb-4 text-purple-300 text-center">📸 Screenshots</h2>
          <div class="screenshot-gallery">
            <img src="~/assets/gravesweeper_screenshots/01_gameplay_graveyard.png" alt="Gameplay in Graveyard biome" class="screenshot" />
            <img src="~/assets/gravesweeper_screenshots/02_title_screen.png" alt="Title Screen" class="screenshot" />
            <img src="~/assets/gravesweeper_screenshots/03_gameplay_underworld.png" alt="Gameplay in Underworld biome" class="screenshot" />
            <img src="~/assets/gravesweeper_screenshots/04_ability_selection.png" alt="Ability Selection" class="screenshot" />
            <img src="~/assets/gravesweeper_screenshots/05_daily_run_calendar.png" alt="Daily Run Calendar" class="screenshot" />
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

<style scoped>
.content {
  margin: auto;
}

.BoxTop {
  max-width: 400px;
  margin: 0 auto;
}

.screenshot-gallery {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.screenshot {
  flex: 0 0 auto;
  width: 280px;
  max-width: 90vw;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: center;
  cursor: pointer;
}

.screenshot:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
}

@media (min-width: 768px) {
  .screenshot-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    overflow-x: visible;
  }
  
  .screenshot {
    width: 100%;
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

