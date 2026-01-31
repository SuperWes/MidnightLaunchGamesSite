<template>
  <div>
    <div class="content">
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold text-white text-center mt-8 mb-4">Web of Deceit</h1>
        <p class="text-purple-300 text-center text-lg mb-2">A Masquerade Mystery</p>
        <p class="text-gray-400 text-center text-sm mb-6">Global Game Jam 2026</p>

        <div class="text-center mt-3 max-w-4xl mx-auto px-4">
          <p class="text-white text-base mb-6">
            Navigate a treacherous masquerade ball where nothing is as it seems. Uncover secrets, 
            forge alliances, and survive a web of intrigue in this interactive mystery experience.
          </p>

          <div class="flex flex-col items-center gap-4 mt-6 mb-6">
            <a
              href="/games/webofdeceit/play/"
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 border border-purple-700 rounded-lg text-lg"
            >🎭 Play Now</a>
          </div>

          <div class="text-white text-left mb-6 space-y-4">
            <div>
              <h2 class="text-xl font-bold mb-2 text-purple-300">🎭 About the Game</h2>
              <ul class="list-disc list-inside space-y-1">
                <li>Interactive fiction experience built with Flutter</li>
                <li>Branching narrative with multiple endings</li>
                <li>Atmospheric visuals and immersive storytelling</li>
                <li>Created for Global Game Jam 2026</li>
              </ul>
            </div>
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
  head() {
    return {
      title: 'Web of Deceit - A Masquerade Mystery',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Navigate a treacherous masquerade ball where nothing is as it seems. An interactive mystery experience created for Global Game Jam 2026.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/webofdeceit/' },
        { hid: 'og:title', property: 'og:title', content: 'Web of Deceit - A Masquerade Mystery' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Navigate a treacherous masquerade ball where nothing is as it seems. An interactive mystery experience created for Global Game Jam 2026.'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/webofdeceit/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Web of Deceit - A Masquerade Mystery' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Navigate a treacherous masquerade ball where nothing is as it seems. An interactive mystery experience created for Global Game Jam 2026.'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' },
        // Prevent search engine indexing for unlisted page
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  margin: auto;
}
</style>
