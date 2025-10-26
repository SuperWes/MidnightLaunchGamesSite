<template>
  <div class="content">
    <div class="privacy-policy">
      <h1 class="text-2xl font-bold text-white text-center mt-4 mb-6">Gravesweeper Privacy Policy</h1>
      
      <div class="policy-content text-white">
        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Last Updated: October 24, 2025</h2>
          <p>
            This Privacy Policy describes how Midnight Launch Games ("we", "us", or "our") 
            collects, uses, and shares information when you use the Gravesweeper mobile application.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Information We Collect</h2>
          
          <h3 class="text-lg font-semibold mb-2 mt-4">Analytics Data</h3>
          <p class="mb-3">
            We use Firebase Analytics to collect anonymous usage data to improve the game experience. 
            This may include:
          </p>
          <ul class="list-disc list-inside mb-3">
            <li>Device information (model, operating system version)</li>
            <li>Game session data (levels played, game events)</li>
            <li>App performance metrics</li>
            <li>Approximate location (country/region level only)</li>
          </ul>

          <h3 class="text-lg font-semibold mb-2 mt-4">Game Progress Data</h3>
          <p class="mb-3">
            Game progress and settings are stored locally on your device. This includes:
          </p>
          <ul class="list-disc list-inside mb-3">
            <li>Save game data</li>
            <li>Game settings and preferences</li>
            <li>Purchased items (stored locally and verified with app stores)</li>
          </ul>

          <h3 class="text-lg font-semibold mb-2 mt-4">In-App Purchase Information</h3>
          <p class="mb-3">
            When you make in-app purchases, transaction information is processed by Apple App Store 
            or Google Play Store. We do not collect or store payment information. We only receive 
            confirmation of successful purchases to unlock content in the game.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">How We Use Information</h2>
          <p class="mb-3">We use the collected information to:</p>
          <ul class="list-disc list-inside mb-3">
            <li>Improve game performance and user experience</li>
            <li>Analyze game usage patterns and popular features</li>
            <li>Fix bugs and technical issues</li>
            <li>Manage in-app purchases and unlock purchased content</li>
            <li>Send push notifications (only if you opt-in)</li>
          </ul>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Third-Party Services</h2>
          <p class="mb-3">
            Gravesweeper uses the following third-party services that may collect information:
          </p>
          <ul class="list-disc list-inside mb-3">
            <li>
              <strong>Firebase Analytics:</strong> For anonymous usage analytics
              (<a href="https://firebase.google.com/support/privacy" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>)
            </li>
            <li>
              <strong>Apple App Store / Google Play Store:</strong> For in-app purchases
            </li>
          </ul>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Data Retention</h2>
          <p>
            Analytics data is retained according to Firebase's data retention policies (typically 2-14 months). 
            Local game data remains on your device until you uninstall the app or clear app data.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Children's Privacy</h2>
          <p>
            Gravesweeper is suitable for all ages. We do not knowingly collect personal information 
            from children under 13. The analytics data we collect is anonymous and not tied to any 
            personally identifiable information.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Data Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your information to third parties except as 
            described in this policy. Anonymous analytics data may be shared with Firebase/Google for 
            analytics purposes only.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Your Rights</h2>
          <p class="mb-3">You have the right to:</p>
          <ul class="list-disc list-inside mb-3">
            <li>Delete your local game data by uninstalling the app</li>
            <li>Opt-out of analytics by disabling analytics in your device settings</li>
            <li>Request information about data we may have collected</li>
          </ul>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Contact Us</h2>
          <p class="mb-3">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p>
            <nuxt-link to="/contact" class="text-blue-400 hover:text-blue-300 underline">
              Contact Page
            </nuxt-link>
          </p>
          <p class="mt-3">
            For game support and FAQs, visit our 
            <nuxt-link to="/games/gravesweeper/support" class="text-blue-400 hover:text-blue-300 underline">
              Support Page
            </nuxt-link>
          </p>
        </section>

        <div class="text-center mt-8 mb-4 flex gap-3 justify-center">
          <nuxt-link
            to="/games/gravesweeper"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >Back to Gravesweeper</nuxt-link>
          <nuxt-link
            to="/games/gravesweeper/support"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
          >Get Support</nuxt-link>
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

.privacy-policy {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 1rem;
}

.policy-content p,
.policy-content ul {
  line-height: 1.6;
}

.policy-content ul {
  margin-left: 1rem;
}

.policy-content section {
  margin-bottom: 2rem;
}
</style>

