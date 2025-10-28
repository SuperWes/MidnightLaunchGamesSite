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
      meta: [
        { 'http-equiv': 'refresh', content: '0; url=/games/gravesweeper/' }
      ]
    }
  }
}
</script>

