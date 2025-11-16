<template>
  <div class="content">
    <h1 class="pageTitle mt-4">Games</h1>
    <div class="md:flex mb-2">
      <div class="md:flex-1 md:w-1/2 card">
        <nuxt-link to="/games/gravesweeper">
          <h1 class="gameTitle mb-3">Gravesweeper</h1>
          <img src="~/assets/Gravesweeper-logo.png" />
        </nuxt-link>
      </div>
      <div class="md:flex-1 md:w-1/2 card">
        <nuxt-link to="/games/jigsawarmada">
          <h1 class="gameTitle mb-3">Jigsaw Armada</h1>
          <img src="~/assets/JigsawArmada-boxtop.png" />
        </nuxt-link>
      </div>
    </div>
    <div class="md:flex mb-2">
      <div class="md:flex-1 md:w-1/2 card">
        <nuxt-link to="/games/bumpitup">
          <h1 class="gameTitle mb-3">Bump it Up!</h1>
          <img src="~/assets/BumpItUp-boxtop.png" />
        </nuxt-link>
      </div>
      <div class="md:flex-1 md:w-1/2 card">
        <h1 class="gameTitle mb-3">Spectrum 12</h1>
        <img class="justify-center w-1/2 m-auto" src="~/assets/Spectrum12-boxtop.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Games - Midnight Launch Games',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore our collection of indie puzzle and adventure games including Gravesweeper, Jigsaw Armada, and Bump it Up! Free to download on mobile platforms.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/' },
        { hid: 'og:title', property: 'og:title', content: 'Games - Midnight Launch Games' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Discover unique indie games: Gravesweeper (Halloween dungeon crawler), Jigsaw Armada (naval strategy), and Bump it Up! (physics puzzle game).'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Games - Midnight Launch Games' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Discover unique indie games: Gravesweeper (Halloween dungeon crawler), Jigsaw Armada (naval strategy), and Bump it Up! (physics puzzle game).'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' }
      ]
    }
  }
}
</script>

<style scoped>
h1.pageTitle {
  @apply text-xl;
  @apply font-bold;
  @apply text-white;
  @apply text-center;
}

h1.gameTitle {
  @apply text-xl;
  @apply font-bold;
}

.content {
  margin: auto;
}

.card {
  @apply p-4;
  @apply m-5;
  background-color: #78d5dd;
  border-radius: 0.5rem;
}
</style>