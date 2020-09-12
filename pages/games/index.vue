<template>
  <div class="content">
    <h1 class="text-xl font-bold text-white text-center mt-4">Games</h1>
    <div class="flex mb-2">
      <div class="md:flex-1 p-4 w-1/2 card m-5">
        <a href="/games/jigsawarmada">
          <h1 class="text-xl font-bold mb-3">Jigsaw Armada</h1>
          <img src="~/assets/JigsawArmada-boxtop.png" />
        </a>
      </div>
      <div class="md:flex-1 p-4 w-1/2 card m-5">
        <h1 class="text-xl font-bold mb-3">Spectrum 12</h1>
        <img class="justify-center w-1/2 m-auto" src="~/assets/Spectrum12-boxtop.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin: auto;
}

.card {
  background-color: #78D5DD;
  border-radius: 0.5rem;
}
</style>