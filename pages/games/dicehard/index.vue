<template>
  <div class="dicehard-page">
    <!-- Hero section -->
    <div class="hero-section">
      <div class="hero-content">
        <img src="/games/dicehard/logo.png" alt="Dice Hard" class="game-logo" />
        <p class="game-subtitle">A Dice-Rolling Roguelike</p>
      </div>
    </div>

    <!-- Main content -->
    <div class="content-section">
      <div class="story-panel">
        <p class="intro-text">
          Roll the dice and embrace the chaos in this fast-paced roguelike adventure. 
          Every roll counts as you battle your way through procedurally generated challenges.
        </p>
        <p class="intro-text">
          Built with Flutter and Flame for smooth gameplay on mobile and web.
        </p>
      </div>

      <div class="play-section">
        <p class="play-now-label">COMING SOON</p>
        <p class="version-label">Available on iOS and Android</p>
      </div>

      <div class="story-panel credits-panel">
        <h2 class="section-title">About</h2>
        <p class="credits-text">
          A dice-rolling roguelike built with <strong>Flutter + Flame</strong>
        </p>
        <p class="credits-text">
          Created by <strong>Midnight Launch Games</strong>
        </p>
      </div>
    </div>

    <footer class="page-footer">
      <p>&copy;{{ new Date().getFullYear() }} Wes Ehrlichman. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'game-standalone',
  head() {
    return {
      title: 'Dice Hard - A Dice-Rolling Roguelike',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Roll the dice and embrace the chaos in this fast-paced roguelike adventure built with Flutter and Flame.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/dicehard/' },
        { hid: 'og:title', property: 'og:title', content: 'Dice Hard - A Dice-Rolling Roguelike' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Roll the dice and embrace the chaos in this fast-paced roguelike adventure.'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/games/dicehard/logo.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '512' },
        { hid: 'og:image:height', property: 'og:image:height', content: '512' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/dicehard/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Dice Hard - A Dice-Rolling Roguelike' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Roll the dice and embrace the chaos in this fast-paced roguelike adventure.'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/games/dicehard/logo.png' },
        // Prevent search engine indexing for unlisted page
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  }
}
</script>

<style scoped>
.dicehard-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Hero Section */
.hero-section {
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.game-logo {
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 24px;
  margin: 0 auto 1.5rem auto;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 100, 100, 0.2);
  border: 3px solid #ff6b6b;
}

.game-subtitle {
  font-size: 1.4rem;
  color: #e0e0e0;
  font-style: italic;
}

/* Content Section */
.content-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
}

/* Story Panel */
.story-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 107, 107, 0.3);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
}

.intro-text {
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.intro-text:last-child {
  margin-bottom: 0;
}

/* Play Section */
.play-section {
  text-align: center;
  margin: 2.5rem 0;
  padding: 2rem;
  background: linear-gradient(to bottom, rgba(255, 107, 107, 0.1), transparent);
  border-radius: 12px;
}

.play-now-label {
  color: #ff6b6b;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  letter-spacing: 0.1em;
}

.version-label {
  color: #a0a0a0;
  font-size: 1.1rem;
  font-style: italic;
}

/* Credits Panel */
.credits-panel {
  text-align: center;
}

.section-title {
  color: #ff6b6b;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.credits-text {
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.credits-text strong {
  color: #ff6b6b;
}

/* Footer */
.page-footer {
  text-align: center;
  padding: 2rem 1rem;
  border-top: 2px solid rgba(255, 107, 107, 0.3);
  color: #666;
  font-size: 0.9rem;
}

.page-footer p {
  margin: 0;
}
</style>
