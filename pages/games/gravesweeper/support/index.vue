<template>
  <div class="content">
    <div class="support-page">
      <h1 class="text-2xl font-bold text-white text-center mt-4 mb-6">Gravesweeper Support</h1>
      
      <div class="support-content text-white">
        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Need Help?</h2>
          <p>
            Welcome to Gravesweeper support! We're here to help you with any questions or issues 
            you may have with the game.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Contact Us</h2>
          <p class="mb-3">
            For support requests, bug reports, or general questions, please contact us through our contact form:
          </p>
          <div class="text-center my-4">
            <nuxt-link
              to="/contact"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 border border-blue-700 rounded inline-block"
            >
              📧 Contact Support
            </nuxt-link>
          </div>
          <p class="text-sm text-gray-400 text-center">
            We typically respond within 24-48 hours.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
          
          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">How do I play Gravesweeper?</h3>
            <p>
              Gravesweeper is a Halloween-themed Minesweeper game. Tap cells to reveal numbers 
              indicating nearby traps. Use logic to avoid traps and find the stairs to advance! 
              The in-game tutorial will guide you through the basics.
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
              Game progress is saved locally on your device. If you've uninstalled the app or 
              cleared app data, your progress cannot be recovered. We recommend using the multiple 
              save slots feature to backup your progress regularly.
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
              <li><strong>iOS:</strong> Settings → Notifications → Gravesweeper</li>
              <li><strong>Android:</strong> Settings → Apps → Gravesweeper → Notifications</li>
            </ul>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">Is the game available on other platforms?</h3>
            <p>
              Gravesweeper is currently available on iOS and Android. You can also try the web demo 
              on our website!
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

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Privacy & Terms</h2>
          <p>
            <nuxt-link to="/games/gravesweeper/privacy" class="text-blue-400 hover:text-blue-300 underline">
              View our Privacy Policy
            </nuxt-link>
          </p>
        </section>

        <div class="text-center mt-8 mb-4">
          <nuxt-link
            to="/games/gravesweeper"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >Back to Gravesweeper</nuxt-link>
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

