import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-outer">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="about-card"
        >
          {/* ── Left: Image column ── */}
          <motion.div
            className="about-img-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {/* Inset frame — same vertical padding as text column, small gap on right to breathe */}
            <div className="about-img-frame">
              <img
                src="/images/businessman-silhouette.png"
                alt="Business leader on stage"
                className="about-img"
              />
            </div>
          </motion.div>

          {/* ── Right: Content column ── */}
          <div className="about-content">
            <FadeIn delay={0.1}>
              <h2 className="about-h2">
                Smart People Make<br />
                <span className="about-accent">Expensive</span>{' '}Mistakes.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="about-para">
                Because no one slows things down early enough to ask the uncomfortable questions.
                For over 15 years, I've worked behind the scenes inside Fortune 100 and large-scale
                enterprise environments. I've stood at the intersection of technology, systems,
                and business outcomes. I've watched capable teams burn time, money, and credibility
                because governance was unclear, incentives were misaligned, or no one wanted to
                challenge momentum.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="about-para">
                My path to this work was not predictable. I was hacking computers as a teenager and
                consulting before I fully understood what that meant. I tested as having a
                genius-level IQ, which sounds impressive until you live with it. Add ADHD and legal
                blindness, and you learn quickly that raw intelligence does not protect you from
                consequences.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="about-para about-para--last">
                Today, leaders bring me in when major decisions are drifting and getting them wrong
                could cost millions. I ask the questions most people are already thinking but will
                not say out loud. Because reality always collects the bill.
              </p>
            </FadeIn>
          </div>
        </motion.div>
      </div>

      <style>{`

        /* ══════════════════════════════════════════════════════════
           SECTION / PAGE BACKGROUND
           Deep maroon radial — matches the Figma outer bg exactly
        ══════════════════════════════════════════════════════════ */
        .about-section {
          position: relative;
          padding: 60px 40px;
          background:
            linear-gradient(to bottom, #1b0404 0, transparent 120px, transparent calc(100% - 120px), #180202 100%),
            radial-gradient(
              ellipse 70% 80% at 20% 50%,
              rgba(140, 28, 20, 0.75) 0%,
              rgba(100, 14, 10, 0.45) 40%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 100% 100% at 50% 50%,
              #2a0808 0%,
              #1a0404 50%,
              #0d0101 100%
            );
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .about-outer {
          position: relative;
          z-index: 2;
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
        }

        /* ══════════════════════════════════════════════════════════
           CARD
           Matches Figma: rounded rect, dark warm bg, thin border
        ══════════════════════════════════════════════════════════ */
        .about-card {
          display: grid;
          grid-template-columns: 43% 1fr;
          align-items: stretch;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(100, 35, 25, 0.5);
          background:
            radial-gradient(
              ellipse 80% 60% at 10% 20%,
              rgba(130, 30, 18, 0.20) 0%,
              transparent 55%
            ),
            linear-gradient(
              155deg,
              #281010 0%,
              #1e0b0b 35%,
              #160707 70%,
              #100404 100%
            );
          box-shadow:
            0 0 0 1px rgba(110, 25, 15, 0.10),
            0 20px 60px rgba(0, 0, 0, 0.65),
            0 4px 16px rgba(0, 0, 0, 0.4);
        }

        /* ══════════════════════════════════════════════════════════
           IMAGE COLUMN
           Outer col: same padding as .about-content so top/bottom
           space is visually identical on both sides of the card.
        ══════════════════════════════════════════════════════════ */
        .about-img-col {
          /* Mirror text column padding: 44px top/bottom, 20px left, 20px right gap toward divider */
          padding: 44px 20px 44px 44px;
          display: flex;
          align-items: stretch;
        }

        /* Inset frame: rounds the image, clips it, fills remaining height */
        .about-img-frame {
          position: relative;
          flex: 1;
          border-radius: 10px;
          overflow: hidden;
          /* Slightly darker bg shows through contain letterbox if any */
          background: #0c0202;
          min-height: 320px;
        }

        .about-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
          border-radius: 10px;
        }

        /* ══════════════════════════════════════════════════════════
           CONTENT COLUMN
        ══════════════════════════════════════════════════════════ */
        .about-content {
          padding: 44px 44px 44px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ══════════════════════════════════════════════════════════
           TYPOGRAPHY — matches Figma weights/sizes precisely
        ══════════════════════════════════════════════════════════ */
        .about-h2 {
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 22px 0;
        }

        .about-accent {
          color: #d84535;
        }

        .about-para {
          color: #b09090;
          font-size: 0.875rem;
          line-height: 1.72;
          margin: 0 0 16px 0;
        }

        .about-para--last {
          margin-bottom: 0;
        }

        /* ══════════════════════════════════════════════════════════
           LARGE DESKTOP ≥ 1280px
        ══════════════════════════════════════════════════════════ */
        @media (min-width: 1280px) {
          .about-outer   { max-width: 920px; }
          .about-card    { grid-template-columns: 42% 1fr; }
          /* Both sides share same 50px top/bottom padding */
          .about-img-col { padding: 50px 22px 50px 50px; }
          .about-content { padding: 50px 50px 50px 36px; }
          .about-h2      { font-size: 34px; }
        }

        /* ══════════════════════════════════════════════════════════
           TABLET LANDSCAPE 1024–1279px
        ══════════════════════════════════════════════════════════ */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .about-outer   { max-width: 860px; }
          .about-section { padding: 50px 32px; }
          .about-card    { grid-template-columns: 43% 1fr; }
          .about-img-col { padding: 38px 18px 38px 38px; }
          .about-content { padding: 38px 38px 38px 32px; }
        }

        /* ══════════════════════════════════════════════════════════
           TABLET PORTRAIT 768–1023px
        ══════════════════════════════════════════════════════════ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-section { padding: 40px 24px; }
          .about-outer   { max-width: 720px; }
          .about-card    { grid-template-columns: 44% 1fr; }
          .about-img-col { padding: 28px 16px 28px 28px; }
          .about-img-frame { min-height: 280px; border-radius: 8px; }
          .about-img     { border-radius: 8px; }
          .about-content { padding: 28px 24px 28px 20px; }
          .about-h2      { font-size: clamp(20px, 3vw, 28px); margin-bottom: 16px; }
          .about-para    { font-size: 0.83rem; line-height: 1.68; margin-bottom: 13px; }
        }

        /* ══════════════════════════════════════════════════════════
           MOBILE < 768px — single column, image on top
        ══════════════════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .about-section { padding: 28px 16px; min-height: unset; }
          .about-card    { grid-template-columns: 1fr; border-radius: 12px; }
          .about-img-col { padding: 16px 16px 0 16px; }
          .about-img-frame { min-height: 260px; border-radius: 8px; }
          .about-img     { object-fit: contain; object-position: center top; border-radius: 8px; }
          .about-content { padding: 20px 20px 28px; }
          .about-h2      { font-size: clamp(20px, 5.5vw, 26px); margin-bottom: 14px; }
          .about-para    { font-size: 0.84rem; line-height: 1.68; margin-bottom: 13px; }
        }

        /* ══════════════════════════════════════════════════════════
           SMALL MOBILE < 480px
        ══════════════════════════════════════════════════════════ */
        @media (max-width: 480px) {
          .about-section { padding: 20px 12px; }
          .about-img-col { padding: 12px 12px 0 12px; }
          .about-img-frame { min-height: 220px; border-radius: 6px; }
          .about-img     { object-fit: contain; border-radius: 6px; }
          .about-content { padding: 16px 16px 24px; }
          .about-h2      { font-size: clamp(18px, 5.5vw, 22px); }
          .about-para    { font-size: 0.82rem; }
        }

        /* ══════════════════════════════════════════════════════════
           VERY SMALL < 360px
        ══════════════════════════════════════════════════════════ */
        @media (max-width: 360px) {
          .about-img-frame { min-height: 190px; }
          .about-content   { padding: 14px 14px 20px; }
          .about-h2        { font-size: 18px; }
          .about-para      { font-size: 0.8rem; }
        }

      `}</style>
    </section>
  );
}