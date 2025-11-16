<template>
  <div class='content'>
    <h1 class="pageTitle mt-4">Contact</h1>
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeLD46wukfuUSvChVXO34tKCNMjljqNB5nhleFStzZv6GWVww/viewform?embedded=true" width="640" height="709" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>

</template>

<script>
export default {
  head() {
    return {
      title: 'Contact - Midnight Launch Games',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with Midnight Launch Games! Contact Wes and Andrew about our indie games, collaborations, or feedback. We love hearing from players!'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/contact/' },
        { hid: 'og:title', property: 'og:title', content: 'Contact - Midnight Launch Games' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Get in touch with Midnight Launch Games! Contact Wes and Andrew about our indie games, collaborations, or feedback. We love hearing from players!'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/contact/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Contact - Midnight Launch Games' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Get in touch with Midnight Launch Games! Contact Wes and Andrew about our indie games, collaborations, or feedback. We love hearing from players!'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  margin: auto;
}

h1.pageTitle {
  @apply text-xl;
  @apply font-bold;
  @apply text-white;
  @apply text-center;
}

</style>