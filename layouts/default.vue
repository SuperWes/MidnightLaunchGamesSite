<template>
  <div>
    <header>
      <nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-3">
          <div class="md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center">
              <div class>
                <img
                  class="h-12 object-contain block mx-4 mt-2 md:mt-0"
                  src="~assets/mlg-badge.png"
                />
              </div>
              <div class="text-xl font-semibold text-gray-700">
                <a
                  href="#"
                  class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
                >Midnight Launch Games</a>
              </div>

              <!-- Mobile menu button -->
              <div class="flex md:hidden">
                <button
                  type="button"
                  class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="hidden -mx-4 md:flex md:items-center">
              <a
                href="#"
                class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >About</a>
              <a
                href="#"
                class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >Games</a>
              <a
                href="#"
                class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >Contact</a>
              <a
                href="#"
                class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >Twitter</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #2d3666;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
