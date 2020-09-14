<template>
  <div class="-mx-4 md:flex md:items-center">
    <a href="/" class="linkOption mx-4 mt-2 md:mt-0">About</a>
    <a href="/games" class="linkOption mx-4 mt-2 md:mt-0">Games</a>
    <a href="/contact" class="linkOption mx-4 mt-2 md:mt-0">Contact</a>
    <a
      href="http://www.twitter.com/MidnightLGs"
      class="linkOption mx-4 mt-2 md:mt-0"
      target="_blank"
    >Twitter</a>
  </div>
</template>

<style scoped>
.linkOption {
  @apply block;
  @apply text-sm;
  @apply text-gray-700;
  @apply capitalize;
}

.linkOption:hover {
  @apply text-blue-600;
}
</style>