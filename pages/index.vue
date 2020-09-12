<template>
  <div>
    <Logo />
    <p class="description">Midnight Launch Games is Wes Ehrlichman and Andrew Rauscher.
      This is the site for our games and other ventures.</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<script>
export default {
  head: {
    title: "Midnight Launch Games",
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.header-bg {
  background-image: url("~assets/mlgLogo_dark.png");
  height: 32rem;
}

.description {
  padding-inline: 2em;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  color: #fff;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
