<template>
  <div class="content">
    <div class="flex flex-col">
      <h1 class="text-xl font-bold text-white text-center mt-4">Gravesweeper</h1>
      <img class="BoxTop" src="~/assets/Gravesweeper-logo.png" />

      <div class="text-center mt-3">
        <p class="text-white mb-4">
          A Halloween-themed Minesweeper game! Control a skeleton character through a 
          procedurally generated dungeon, avoiding traps and finding the stairs to escape.
        </p>
        
        <div class="flex flex-col items-center gap-3 mt-4">
          <a
            href="/games/gravesweeper/reapers_run/"
            target="_blank"
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 border border-purple-700 rounded"
          >🎮 Play Web Demo</a>
          
          <div class="bg-gray-600 text-white font-bold py-2 px-4 border border-gray-700 rounded">
            Coming Soon to iOS
          </div>
          
          <div class="bg-gray-600 text-white font-bold py-2 px-4 border border-gray-700 rounded">
            Coming Soon to Android
          </div>
        </div>

        <div class="mt-6 text-center">
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
</style>

