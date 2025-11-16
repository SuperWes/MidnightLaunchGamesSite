<template>
  <div class="content">
    <div class="flex flex-col">
      <h1 class="text-xl font-bold text-white text-center mt-4">Jigsaw Armada</h1>
      <img class="BoxTop" src="~/assets/JigsawArmada-boxtop.png" />

      <div class="text-center mt-3">
        <a
          href="JigsawArmadaInstructions.pdf"
          target="_blank"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >Jigsaw Armada Instructions</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jigsaw Armada - Midnight Launch Games',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Command your fleet in Jigsaw Armada! A strategic naval puzzle game where tactical thinking meets ship placement challenges.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/jigsawarmada/' },
        { hid: 'og:title', property: 'og:title', content: 'Jigsaw Armada - Midnight Launch Games' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Command your fleet in Jigsaw Armada! A strategic naval puzzle game where tactical thinking meets ship placement challenges.'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/JigsawArmada-boxtop.png' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/jigsawarmada/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Jigsaw Armada - Midnight Launch Games' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Command your fleet in Jigsaw Armada! A strategic naval puzzle game where tactical thinking meets ship placement challenges.'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/JigsawArmada-boxtop.png' }
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