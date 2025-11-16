<template>
  <div class="content">
    <div class="flex flex-col">
      <h1 class="text-xl font-bold text-white text-center mt-4">Bump it Up!</h1>
      <img class="BoxTop" src="~/assets/BumpItUp-boxtop.png" />

      <div class="text-center mt-3">
        <a
          href="BumpItUpInstructions.pdf"
          target="_blank"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >Bump it Up! Instructions</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Bump it Up! - Midnight Launch Games',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Challenge your mind with Bump it Up! A clever puzzle game that tests your strategic thinking and problem-solving skills.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/bumpitup/' },
        { hid: 'og:title', property: 'og:title', content: 'Bump it Up! - Midnight Launch Games' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Challenge your mind with Bump it Up! A clever puzzle game that tests your strategic thinking and problem-solving skills.'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/BumpItUp-boxtop.png' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/bumpitup/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bump it Up! - Midnight Launch Games' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Challenge your mind with Bump it Up! A clever puzzle game that tests your strategic thinking and problem-solving skills.'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/BumpItUp-boxtop.png' }
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