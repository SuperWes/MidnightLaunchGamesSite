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
              <a href="mailto:superwes@gmail.com" class="ttr-link">
                superwes@gmail.com
              </a>
            </p>
            <p class="text-sm text-gray-400 mb-4">Or use our contact form:</p>
            <nuxt-link
              to="/contact"
              class="ttr-btn"
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
            <p class="mb-2">
              Eventually, yes — but not right away. The maze holds still while you recover your focus,
              so closing the app for a bit is safe. Only once you're fully rested does it begin taking
              turns in real time, and from then on an enemy can reach you even while the app is closed.
            </p>
            <p class="text-sm text-gray-400">
              Concretely: the maze stays still until your focus is full — <strong>up to about 10 hours</strong>
              if you left exhausted, or as little as a couple of hours if you left rested. So resting is safe;
              lingering fully-rested is what gets dangerous. Check in before you're cornered.
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
              in short glances throughout your day, right on your wrist.
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
            <nuxt-link to="/contact" class="ttr-link">
              contact form
            </nuxt-link>
            to submit bug reports.
          </p>
        </section>

        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Privacy &amp; Terms</h2>
          <p>
            <nuxt-link to="/games/timetorogue/privacy" class="ttr-link">
              View our Privacy Policy
            </nuxt-link>
          </p>
        </section>

        <div class="text-center mt-8 mb-4">
          <nuxt-link
            to="/games/timetorogue"
            class="ttr-btn"
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
/* Dark Time to Rogue canvas, breaking out of the site's blue-purple bg */
.content {
  margin: 0;
  min-height: 100%;
  padding: 2.5rem 1rem 1rem;
  background:
    radial-gradient(1000px 500px at 50% -80px, rgba(56, 189, 248, 0.10), transparent 70%),
    linear-gradient(180deg, #05070d 0%, #090d18 55%, #05070d 100%);
  color: #dbe4f0;
}

.support-page {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(56, 189, 248, 0.035);
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 12px;
  padding: 2rem;
}

.support-page h1 {
  color: #7dd3fc;
}

.support-content {
  color: #dbe4f0;
}

.support-content h2 {
  color: #38bdf8;
}

.support-content h3 {
  color: #cbd5e1;
}

.support-content strong {
  color: #fde047;
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
  background: rgba(5, 7, 13, 0.55);
  border-left: 3px solid #38bdf8;
  padding: 1rem;
  border-radius: 0.25rem;
}

.ttr-link {
  color: #38bdf8;
  text-decoration: none;
  border-bottom: 1px solid rgba(56, 189, 248, 0.4);
  transition: color 0.2s ease;
}

.ttr-link:hover {
  color: #7dd3fc;
}

.ttr-btn {
  display: inline-block;
  background: linear-gradient(135deg, #facc15 0%, #fde047 100%);
  color: #1a1400;
  font-weight: 800;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 0 18px rgba(250, 204, 21, 0.35);
  transition: box-shadow 0.2s ease, transform 0.1s ease;
}

.ttr-btn:hover {
  box-shadow: 0 0 26px rgba(250, 204, 21, 0.55);
}

.ttr-btn:active {
  transform: translateY(1px);
}
</style>
