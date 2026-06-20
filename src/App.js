const services = [
  {
    title: 'Montessori learning',
    text: 'Activities that promote curiosity, independence, and confidence through hands-on discovery.',
  },
  {
    title: 'Indoor play',
    text: 'Educational toys, puzzles, creative blocks, and fun group games in a calm guided space.',
  },
  {
    title: 'Outdoor play zone',
    text: 'Swings, slides, sandpit play, and active movement for physical growth and fun.',
  },
  {
    title: 'English language development',
    text: 'Guided sessions that help children express themselves confidently in English.',
  },
  {
    title: 'Nutritious meals',
    text: 'Healthy, balanced, child-friendly meals prepared with care every day.',
  },
  {
    title: 'Rest and napping time',
    text: 'Quiet, cozy moments for children to relax, recharge, and feel secure.',
  },
  {
    title: 'Motherly touch',
    text: 'Warmth, comfort, and emotional support so every child feels at home.',
  },
]

const reasons = [
  'Safe and clean environment',
  'Professional and caring teachers',
  'Montessori-based learning approach',
  'Focus on holistic child development',
]

const dayFlow = [
  { time: 'Morning', title: 'Warm welcome', text: 'Children settle in gently with familiar faces and calm routines.' },
  { time: 'Midday', title: 'Learn and play', text: 'Guided Montessori activities, language development, and creative play.' },
  { time: 'Afternoon', title: 'Rest and recharge', text: 'Quiet naps, nutritious meals, and peaceful moments before pickup.' },
]

const impactAreas = [
  'Education',
  'Health',
  'Protection',
  'Sustainable entrepreneurship',
]

export default {
  setup() {
    return { services, reasons, dayFlow, impactAreas }
  },
  template: `
    <div class="site-shell">
      <header class="topbar">
        <a class="brand" href="#home" aria-label="Bright Beginning home">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-text">
            <strong>Bright Beginning</strong>
            <small>Day Care and Montessori Centre</small>
          </span>
        </a>

        <nav class="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#organization">Organization</a>
          <a href="#routine">Daily care</a>
          <a href="#contact">Visit us</a>
        </nav>
      </header>

      <main id="home">
        <section class="hero section-panel">
          <div class="hero-copy reveal">
            <p class="eyebrow">Welcome to our loving daycare and Montessori centre</p>
            <h1>Where every child learns, plays and feels at home.</h1>
            <p class="lede">
              Bright Beginning gives children a warm, safe, and nurturing environment designed to support growth, creativity, confidence, and happiness.
            </p>

            <div class="hero-actions">
              <a class="button button-primary" href="#contact">Schedule a visit</a>
              <a class="button button-secondary" href="#programs">Explore programs</a>
            </div>
          </div>

          <div class="hero-stage reveal reveal-delay" aria-label="Bright Beginning care highlights">
            <div class="sun-mark" aria-hidden="true"></div>
            <div class="care-card care-card-main">
              <span>Motherly touch</span>
              <strong>Warmth, comfort and emotional support, just like home.</strong>
            </div>
            <div class="care-card care-card-floating">
              <span>English language</span>
              <strong>Guided sessions that help children express themselves confidently.</strong>
            </div>
            <div class="child-scene" aria-hidden="true">
              <span class="child child-one"></span>
              <span class="child child-two"></span>
              <span class="toy toy-one"></span>
              <span class="toy toy-two"></span>
              <span class="toy toy-three"></span>
            </div>
          </div>
        </section>

        <section class="trust-strip" aria-label="Bright Beginning highlights">
          <article>
            <strong>Montessori-inspired</strong>
            <span>learning activities</span>
          </article>
          <article>
            <strong>Safe routines</strong>
            <span>meals, rest and play</span>
          </article>
          <article>
            <strong>Family focused</strong>
            <span>care with confidence</span>
          </article>
        </section>

        <section id="about" class="story-section">
          <div class="section-heading reveal">
            <p class="eyebrow">About Bright Beginning</p>
            <h2>A peaceful place for early learning, care, and confidence.</h2>
          </div>
          <div class="story-copy reveal reveal-delay">
            <p>
              At our Daycare and Montessori Centre, we provide a warm, safe, and nurturing environment designed to support your child's growth, creativity, and happiness under the gentle care of experienced caregivers.
            </p>
            <p>
              The organization is dedicated to advancing the well-being of children and families through education, protection, health, and sustainable development.
            </p>
          </div>
        </section>

        <section id="organization" class="organization-section section-panel">
          <div class="section-heading section-heading-wide reveal">
            <p class="eyebrow">Bright Beginning Organization</p>
            <h2>Bright beginning for the future.</h2>
          </div>

          <div class="organization-copy reveal reveal-delay">
            <p>
              Bright Beginning Organization is a registered non-governmental and non-profit institution founded by Ms. Anna Michael Kimambo.
            </p>
            <p>
              The organization is dedicated to advancing the well-being of women, girls, children, and people with special needs through programs in education, health, protection, and sustainable entrepreneurship.
            </p>
            <div class="impact-grid" aria-label="Organization focus areas">
              <span v-for="item in impactAreas" :key="item">{{ item }}</span>
            </div>
          </div>
        </section>

        <section id="programs" class="program-section section-panel">
          <div class="section-heading section-heading-wide reveal">
            <p class="eyebrow">Our services include</p>
            <h2>Learning, play, rest, and care designed around the whole child.</h2>
          </div>

          <div class="program-grid">
            <article v-for="item in services" :key="item.title" class="program-card reveal">
              <span class="card-icon" aria-hidden="true"></span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </section>

        <section id="routine" class="routine-section">
          <div class="section-heading reveal">
            <p class="eyebrow">Daily care rhythm</p>
            <h2>A simple day that feels secure, joyful, and familiar.</h2>
          </div>

          <div class="timeline">
            <article v-for="item in dayFlow" :key="item.time" class="timeline-item reveal">
              <span>{{ item.time }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </section>

        <section class="why-section section-panel">
          <div class="why-copy reveal">
            <p class="eyebrow">Why choose us</p>
            <h2>Parents can relax knowing every child is seen, supported, and cared for.</h2>
          </div>

          <div class="reason-list">
            <article v-for="item in reasons" :key="item" class="reason-item reveal">
              <span aria-hidden="true"></span>
              <p>{{ item }}</p>
            </article>
          </div>
        </section>

        <section id="contact" class="contact-section">
          <div class="contact-card reveal">
            <p class="eyebrow">Visit us today</p>
            <h2>Give your child a place where they can learn, play, and grow happily every single day.</h2>
            <p class="contact-note">
              Follow Bright Beginning Day Care on Facebook, Instagram, TikTok, and WhatsApp for updates, activities, and parent communication.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="mailto:hello@brightbeginning.org">Book a visit</a>
              <a class="button button-secondary" href="tel:+255000000000">Call the centre</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  `,
}
