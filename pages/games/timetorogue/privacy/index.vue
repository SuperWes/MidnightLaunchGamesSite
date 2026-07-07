<template>
  <div class="content">
    <div class="privacy-policy">
      <h1 class="text-2xl font-bold text-white text-center mt-4 mb-6">Time to Rogue Privacy Policy</h1>

      <div class="policy-content text-white">
        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Last Updated: July 7, 2026</h2>
          <p>
            This Privacy Policy describes how Midnight Launch Games ("we", "us", or "our") handles
            information when you use the Time to Rogue app for Apple Watch. In short:
            <strong>Time to Rogue does not collect any personal data.</strong>
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Information We Collect</h2>
          <p class="mb-3">
            We do not collect, transmit, or store any personal information. Time to Rogue has no
            analytics, no advertising, and no accounts.
          </p>

          <h3 class="text-lg font-semibold mb-2 mt-4">Game Progress Data</h3>
          <p class="mb-3">
            Your run, best floor, and settings are stored locally on your device only. This data never
            leaves your Apple Watch and iPhone, and we cannot see it. Uninstalling the app removes it.
          </p>

          <h3 class="text-lg font-semibold mb-2 mt-4">Notifications</h3>
          <p class="mb-3">
            Time to Rogue can send you a local notification when your focus has fully recovered. These
            notifications are scheduled on your device — there is no server involved and nothing is sent
            to us. You can disable them anytime in your notification settings.
          </p>

          <h3 class="text-lg font-semibold mb-2 mt-4">Leaderboards (Game Center)</h3>
          <p class="mb-3">
            If a leaderboard is offered, ranking is handled through Apple's Game Center and is optional.
            Any data involved is managed by Apple under
            <a href="https://www.apple.com/legal/privacy/" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Apple's Privacy Policy</a>.
            We do not receive personal information from Game Center.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Third-Party Services</h2>
          <p>
            Time to Rogue does not integrate any third-party analytics, advertising, or tracking
            services. The only Apple service it may use is Game Center, for optional leaderboards.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Children's Privacy</h2>
          <p>
            Time to Rogue is suitable for all ages and does not collect personal information from anyone,
            including children.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Data Sharing</h2>
          <p>
            Because we do not collect any personal data, we have nothing to sell, trade, or share.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Your Rights</h2>
          <p class="mb-3">You can:</p>
          <ul class="list-disc list-inside mb-3">
            <li>Delete all local game data by uninstalling the app</li>
            <li>Turn off notifications in your device settings at any time</li>
          </ul>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post any changes on this page
            and update the "Last Updated" date above.
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
            <nuxt-link to="/games/timetorogue/support" class="text-blue-400 hover:text-blue-300 underline">
              Support Page
            </nuxt-link>
          </p>
        </section>

        <div class="text-center mt-8 mb-4 flex gap-3 justify-center">
          <nuxt-link
            to="/games/timetorogue"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >Back to Time to Rogue</nuxt-link>
          <nuxt-link
            to="/games/timetorogue/support"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
          >Get Support</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Time to Rogue Privacy Policy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Privacy Policy for Time to Rogue. We do not collect any personal data — all game data stays on your device.'
        }
      ]
    }
  }
}
</script>

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
