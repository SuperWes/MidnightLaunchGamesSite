<template>
  <div class="masquerade-page">
    <!-- Hero section with background -->
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="game-title">Web of Deceit</h1>
        <p class="game-subtitle">A Masquerade Mystery</p>
        <p class="game-jam-badge">Global Game Jam 2026</p>
      </div>
    </div>

    <!-- Main content -->
    <div class="content-section">
      <div class="story-panel">
        <p class="intro-text">
          You are a journalist who has infiltrated the most exclusive masquerade ball of the season, 
          hosted by the powerful Senator Peacock. Behind the glittering masks and champagne toasts 
          lies a web of secrets, corruption, and danger.
        </p>
        <p class="intro-text">
          Navigate treacherous conversations, gather evidence with your hidden camera, 
          and uncover the truth before time runs out—or your cover is blown.
        </p>
      </div>

      <div class="play-section">
        <p class="play-now-label">PLAY NOW</p>
        <p class="version-label">Choose Your Experience</p>
        <div class="play-buttons">
          <a
            href="/games/webofdeceit/play/"
            class="play-button"
          >
            <span class="play-icon">🎭</span>
            <span class="button-action">Play</span>
            <span class="button-title">Flutter App</span>
            <span class="version-desc">Enhanced visuals & UI</span>
          </a>
          <a
            href="/games/webofdeceit/twine.html"
            class="play-button twine-button"
          >
            <span class="play-icon">📜</span>
            <span class="button-action">Play</span>
            <span class="button-title">Classic Twine</span>
            <span class="version-desc">Original text adventure</span>
          </a>
        </div>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📸</div>
          <h3>Gather Evidence</h3>
          <p>Use your hidden camera to photograph secrets, but be careful—film is limited and flash draws attention.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎭</div>
          <h3>Wear Your Mask</h3>
          <p>Navigate conversations carefully. Push too hard and suspicion rises. Play it safe and miss crucial intel.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⏰</div>
          <h3>Race Against Time</h3>
          <p>The ball ends at midnight. Every choice costs precious minutes. Will you have enough time to expose the truth?</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🗺️</div>
          <h3>Explore the Estate</h3>
          <p>From the grand ballroom to hidden offices, every room holds potential clues—and danger.</p>
        </div>
      </div>

      <div class="story-panel credits-panel">
        <h2 class="section-title">About</h2>
        <p class="credits-text">
          Created for <strong>Global Game Jam 2026</strong>
        </p>
        <p class="credits-text">
          An interactive mystery built with Flutter, featuring branching narratives 
          and multiple endings based on your choices.
        </p>
      </div>
    </div>

    <footer class="masquerade-footer">
      <p>&copy;{{ new Date().getFullYear() }} Wes Ehrlichman. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Web of Deceit - A Masquerade Mystery',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Navigate a treacherous masquerade ball where nothing is as it seems. An interactive mystery experience created for Global Game Jam 2026.'
        },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://midnightlaunchgames.com/games/webofdeceit/' },
        { hid: 'og:title', property: 'og:title', content: 'Web of Deceit - A Masquerade Mystery' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Navigate a treacherous masquerade ball where nothing is as it seems. An interactive mystery experience created for Global Game Jam 2026.'
        },
        { hid: 'og:image', property: 'og:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' },
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://midnightlaunchgames.com/games/webofdeceit/' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Web of Deceit - A Masquerade Mystery' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Navigate a treacherous masquerade ball where nothing is as it seems. An interactive mystery experience created for Global Game Jam 2026.'
        },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://midnightlaunchgames.com/mlgLogo_dark.png' },
        // Prevent search engine indexing for unlisted page
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  }
}
</script>

<style scoped>
/* Color palette matching the app */
:root {
  --gold: #D4AF37;
  --gold-dark: #B8962E;
  --background: #1A1410;
  --panel: #2A2419;
  --border: #8B7355;
  --text-cream: #E0D5C7;
  --text-muted: #9A8B7A;
}

.masquerade-page {
  min-height: 100vh;
  background-color: #1A1410;
  font-family: Georgia, 'Times New Roman', serif;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 50vh;
  min-height: 350px;
  background-image: url('/games/webofdeceit/play/assets/assets/environments/ballroom.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 20, 16, 0.4) 0%,
    rgba(26, 20, 16, 0.6) 50%,
    rgba(26, 20, 16, 1) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
}

.game-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #D4AF37;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.game-subtitle {
  font-size: 1.5rem;
  color: #E0D5C7;
  font-style: italic;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 1rem;
}

.game-jam-badge {
  display: inline-block;
  background: rgba(42, 36, 25, 0.9);
  border: 2px solid #8B7355;
  color: #D4AF37;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Content Section */
.content-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Story Panel */
.story-panel {
  background: rgba(42, 36, 25, 0.8);
  border: 2px solid #8B7355;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
}

.intro-text {
  color: #E0D5C7;
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
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(to bottom, rgba(212, 175, 55, 0.1), transparent);
  border-radius: 12px;
}

.play-now-label {
  color: #D4AF37;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  letter-spacing: 0.1em;
}

.version-label {
  color: #E0D5C7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.play-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.play-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #3A3429 0%, #2A2419 100%);
  color: #D4AF37;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1.75rem 2.5rem;
  border: 4px solid #D4AF37;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: Georgia, 'Times New Roman', serif;
  min-width: 220px;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(212, 175, 55, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.play-button:hover {
  background: linear-gradient(135deg, #4A4439 0%, #3A3429 100%);
  border-color: #F0D060;
  transform: translateY(-4px);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(212, 175, 55, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.play-button:active {
  transform: translateY(-2px);
}

.play-icon {
  font-size: 2.5rem;
  margin-bottom: 0.25rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.button-action {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #E0D5C7;
  font-weight: normal;
}

.button-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #D4AF37;
}

.version-desc {
  font-size: 0.85rem;
  color: #E0D5C7;
  font-weight: normal;
  font-style: italic;
  margin-top: 0.25rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .game-title {
    font-size: 2.5rem;
  }
  
  .game-subtitle {
    font-size: 1.2rem;
  }
}

.feature-card {
  background: rgba(42, 36, 25, 0.6);
  border: 2px solid #8B7355;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #D4AF37;
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.feature-card h3 {
  color: #D4AF37;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #E0D5C7;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Credits Panel */
.credits-panel {
  text-align: center;
}

.section-title {
  color: #D4AF37;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.credits-text {
  color: #E0D5C7;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.credits-text strong {
  color: #D4AF37;
}

/* Footer */
.masquerade-footer {
  text-align: center;
  padding: 2rem 1rem;
  border-top: 2px solid #8B7355;
  color: #9A8B7A;
  font-size: 0.9rem;
}

.masquerade-footer p {
  margin: 0;
}
</style>
