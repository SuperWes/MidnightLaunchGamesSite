<template>
  <div class="content">
    <h1 class="pageTitle mt-4">Games</h1>
    <div class="md:flex mb-2">
      <div class="md:flex-1 md:w-1/2 card">
        <a href="/games/gravesweeper">
          <h1 class="gameTitle mb-3">Gravesweeper</h1>
          <img src="~/assets/Gravesweeper-logo.png" />
        </a>
      </div>
      <div class="md:flex-1 md:w-1/2 card">
        <a href="/games/jigsawarmada">
          <h1 class="gameTitle mb-3">Jigsaw Armada</h1>
          <img src="~/assets/JigsawArmada-boxtop.png" />
        </a>
      </div>
    </div>
    <div class="md:flex mb-2">
      <div class="md:flex-1 md:w-1/2 card">
        <a href="/games/bumpitup">
          <h1 class="gameTitle mb-3">Bump it Up!</h1>
          <img src="~/assets/BumpItUp-boxtop.png" />
        </a>
      </div>
      <div class="md:flex-1 md:w-1/2 card">
        <h1 class="gameTitle mb-3">Spectrum 12</h1>
        <img class="justify-center w-1/2 m-auto" src="~/assets/Spectrum12-boxtop.png" />
      </div>
    </div>
  </div>
</template>

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