<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center text-white">
      <p class="text-xl mb-4">Redirecting to Gravesweeper...</p>
      <p class="text-sm text-gray-400">If you are not redirected automatically, <nuxt-link to="/games/gravesweeper" class="text-blue-400 underline">click here</nuxt-link>.</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Redirect immediately on client-side
    this.$router.replace('/games/gravesweeper')
  },
  head() {
    return {
      title: 'Gravesweeper - Halloween Puzzle Dungeon',
      meta: [
        { 'http-equiv': 'refresh', content: '0; url=/games/gravesweeper/' },
        {
          hid: 'description',
          name: 'description',
          content: 'Navigate through haunted dungeons as a brave skeleton, using Minesweeper-style logic to avoid deadly traps and find your way to freedom! Free to download on iOS and Android.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/gravesweeper/' },
        { hid: 'og:title', property: 'og:title', content: 'Gravesweeper - Halloween Puzzle Dungeon' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Navigate through haunted dungeons as a brave skeleton, using Minesweeper-style logic to avoid deadly traps and find your way to freedom!'
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
          content: 'Navigate through haunted dungeons as a brave skeleton, using Minesweeper-style logic to avoid deadly traps and find your way to freedom!'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/Gravesweeper-logo-solid.png' }
      ]
    }
  }
}
</script>

