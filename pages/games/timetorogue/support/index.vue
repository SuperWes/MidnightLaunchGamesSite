<template>
  <div class="content">
    <div class="support-page">
      <h1 class="text-2xl font-bold text-white text-center mt-4 mb-6">Time to Rogue Support</h1>

      <div class="support-content text-white">
        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Need Help?</h2>
          <p>
            Welcome to Time to Rogue support! Time to Rogue is an Apple Watch roguelike where the
            resource is real-world time. If something feels off — or you just want to understand the
            mechanics — this page should help.
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
            <h3 class="text-lg font-semibold mb-2">Why am I dying so quickly? Is it broken?</h3>
            <p>
              It's working as designed. Time to Rogue is a game of patience, not fast tapping. Every
              action spends <strong>focus</strong>, and focus recovers over real-world <strong>time</strong>
              (hours, not seconds). Acting on empty focus is dangerous. The skill is knowing when to make a
              move and when to walk away and come back later. Early deaths are part of learning the rhythm.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">Why is my view zoomed in so tightly?</h3>
            <p>
              Your view <em>is</em> your focus. As focus drains, the camera closes in and you can see less
              of the dungeon. Rest and let real time pass — focus recovers and the view widens back out.
              A full focus meter means a full view.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">Does the dungeon really move while the app is closed?</h3>
            <p>
              Yes. The dungeon takes its turns in real time even when the app isn't open. If you leave
              yourself exposed and don't come back, an enemy can reach you while you're away. Check in
              before you're cornered — that tension is the point.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">What is the time-reverse, and how do I use it?</h3>
            <p>
              You earn one free time-reverse each day you play (up to a small cap). If a move would end
              your run, the death screen gives you the option to spend a reverse and undo it. If you'd
              rather keep the charge, just choose <strong>End Run</strong> instead — it's always your call.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">How do I add the watch complication?</h3>
            <p>
              Press and hold your watch face, tap <strong>Edit</strong>, swipe to the complications screen,
              tap a complication slot, and choose <strong>Time to Rogue</strong>. It shows your focus
              recovering at a glance so you know when you're ready to dive again.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">I'm not getting the "focus restored" reminder</h3>
            <p>
              Time to Rogue sends a local notification when your focus is fully recovered. Make sure
              notifications are enabled for the app:
            </p>
            <ul class="list-disc list-inside ml-4">
              <li>On your iPhone: <strong>Watch app → Notifications → Time to Rogue</strong></li>
              <li>Or on the watch: <strong>Settings → Notifications</strong></li>
            </ul>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">Is my run lost if I close the app?</h3>
            <p>
              No. Your run is saved on your device and continues in real time. Closing the app doesn't
              end your run — but remember the dungeon keeps taking its turns while you're gone.
            </p>
          </div>

          <div class="faq-item mb-4">
            <h3 class="text-lg font-semibold mb-2">What devices does it run on?</h3>
            <p>
              Time to Rogue is built exclusively for Apple Watch (watchOS). It's designed to be played
              in short glances across your day, right on your wrist.
            </p>
          </div>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Report a Bug</h2>
          <p class="mb-3">
            Found a bug? Please help us fix it by including the following when you contact us:
          </p>
          <ul class="list-disc list-inside ml-4 mb-3">
            <li>Description of the bug and how to reproduce it</li>
            <li>Your Apple Watch model and watchOS version</li>
            <li>App version</li>
            <li>Screenshots if applicable</li>
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
          <h2 class="text-xl font-semibold mb-3">Privacy &amp; Terms</h2>
          <p>
            <nuxt-link to="/games/timetorogue/privacy" class="text-blue-400 hover:text-blue-300 underline">
              View our Privacy Policy
            </nuxt-link>
          </p>
        </section>

        <div class="text-center mt-8 mb-4">
          <nuxt-link
            to="/games/timetorogue"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >Back to Time to Rogue</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Time to Rogue Support',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Support and FAQ for Time to Rogue, the Apple Watch roguelike where the resource is real-world time.'
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
  border-left: 3px solid #0ea5e9;
  padding: 1rem;
  border-radius: 0.25rem;
}
</style>
