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
        
        <div class="flex flex-col items-center gap-3">
          <a
            href="https://apps.apple.com/app/gravesweeper"
            target="_blank"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >Download on iOS</a>
          
          <a
            href="https://play.google.com/store/apps/details?id=com.midnightlaunchgames.gravesweeper"
            target="_blank"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
          >Download on Android</a>
        </div>

        <div class="mt-6 text-center">
          <nuxt-link
            to="/gravesweeper/privacy"
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

