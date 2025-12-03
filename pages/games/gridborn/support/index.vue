<template>
  <div class="content">
    <div class="support-page">
      <h1 class="text-2xl font-bold text-white text-center mt-4 mb-6">Gridborn Support</h1>
      
      <div class="support-content text-white">
        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Need Help?</h2>
          <p>
            Welcome to Gridborn support! We're here to help you with any questions or issues 
            you may have with the game.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Contact Us</h2>
          <p class="mb-3">
            For support requests, bug reports, or general questions, please contact us:
          </p>
          <div class="text-center my-4">
            <p class="mb-3">
              <strong>Email:</strong> 
              <a href="mailto:superwes@gmail.com" class="text-blue-400 hover:text-blue-300 underline">
                superwes@gmail.com
              </a>
            </p>
            <p class="text-sm text-gray-400 mb-4">Or use our contact form:</p>
            <nuxt-link
              to="/contact"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 border border-blue-700 rounded inline-block"
            >
              📧 Contact Form
            </nuxt-link>
          </div>
          <p class="text-sm text-gray-400 text-center mt-4">
            We typically respond within 24-48 hours.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
          
          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">How do I play Gridborn?</h3>
            <p>
              Gridborn is a spatial grid-based deck-builder roguelike. Choose from 6 unique archetypes, then navigate a hex grid map fighting enemies in tactical 3x3 grid combat. Place cards strategically on the grid—positioning matters! Cards attack in 5 directions (forward, diagonals, sides) and can be shielded. Generate elements (Fire, Ice, Lightning, Earth, Nature, Poison) and consume them for bonus damage. The in-game tutorial will guide you through the basics.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">How do I restore my purchases?</h3>
            <p class="mb-2">
              Your in-app purchases are automatically restored when you reinstall the app or 
              use it on a new device. Just make sure you're signed in with the same Apple ID 
              or Google account you used to make the original purchases.
            </p>
            <p class="text-sm text-gray-400">
              If your purchases don't appear after reinstalling, try restarting the app. 
              The app will automatically verify your purchases with the App Store or Play Store.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">My game progress was lost. Can I recover it?</h3>
            <p>
              Gridborn is a roguelike game where each run is unique. Game progress is saved locally on your device during a run. If you've uninstalled the app or cleared app data, your current run and unlocked content cannot be recovered. This is an intentional design choice to maintain the roguelike experience—each run is meant to be a fresh challenge!
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">The game is crashing or not working properly</h3>
            <p class="mb-2">
              If you're experiencing technical issues:
            </p>
            <ul class="list-disc list-inside ml-4 mb-2">
              <li>Make sure you have the latest version of the app installed</li>
              <li>Try restarting your device</li>
              <li>Ensure you have enough free storage space</li>
              <li>If the problem persists, contact us with details about your device and the issue</li>
            </ul>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">How do I disable notifications?</h3>
            <p>
              You can disable notifications in your device settings:
            </p>
            <ul class="list-disc list-inside ml-4">
              <li><strong>iOS:</strong> Settings → Notifications → Gridborn</li>
              <li><strong>Android:</strong> Settings → Apps → Gridborn → Notifications</li>
            </ul>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">What are the different archetypes?</h3>
            <p class="mb-2">
              Gridborn features 6 unique player archetypes, each with distinct playstyles:
            </p>
            <ul class="list-disc list-inside ml-4 mb-2">
              <li><strong>Warrior</strong> - Pure physical combat with frontline pressure</li>
              <li><strong>Caster</strong> - Fire/Ice magic with powerful elemental combos</li>
              <li><strong>Assassin</strong> - Poison/Nature specialist with flanking attacks</li>
              <li><strong>Paladin</strong> - Earth magic with defensive shield walls</li>
              <li><strong>Druid</strong> - Nature magic with zone control and healing</li>
              <li><strong>Stormcaller</strong> - Lightning magic with multi-target strikes</li>
            </ul>
            <p class="text-sm text-gray-400">
              Experiment with different archetypes to find your favorite strategy!
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">Is the game available on other platforms?</h3>
            <p>
              Gridborn is currently in development for iOS and Android. Check back soon for release information!
            </p>
          </div>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Report a Bug</h2>
          <p class="mb-3">
            Found a bug? Please help us fix it by including the following information when you contact us:
          </p>
          <ul class="list-disc list-inside ml-4 mb-3">
            <li>Description of the bug and how to reproduce it</li>
            <li>Your device model and operating system version</li>
            <li>App version (found in Settings)</li>
            <li>Screenshots or videos if applicable</li>
          </ul>
          <p>
            Use the 
            <nuxt-link to="/contact" class="text-blue-400 hover:text-blue-300 underline">
              contact form
            </nuxt-link>
            to submit bug reports.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Feature Requests</h2>
          <p>
            Have an idea for a new feature or improvement? We'd love to hear it! 
            Send your suggestions through our 
            <nuxt-link to="/contact" class="text-blue-400 hover:text-blue-300 underline">
              contact form
            </nuxt-link>.
          </p>
        </section>

        <div class="text-center mt-8 mb-4">
          <nuxt-link
            to="/games/gridborn"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >Back to Gridborn</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin: auto;
  max-width: 800px;
  padding: 20px;
}

.support-page {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 1rem;
}

.support-content p,
.support-content ul {
  line-height: 1.6;
}

.support-content ul {
  margin-left: 1rem;
}

.support-content section {
  margin-bottom: 2rem;
}

.faq-item {
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 3px solid #78d5dd;
  padding: 1rem;
  border-radius: 0.25rem;
}
</style>

