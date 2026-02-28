import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background:
          'radial-gradient(ellipse 55% 70% at 20% 50%, #321414 0%, #1e0a0a 40%, #110303 70%, #0a0101 100%)',
        padding: '48px 20px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="about-card"
        >
          {/* ── Left: Image — full figure head-to-feet ── */}
          <motion.div
            className="about-img-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <img
              src="/images/businessman-silhouette.png"
              alt="Business leader on stage"
              className="about-img"
            />
            <div className="about-img-fade" />
          </motion.div>

          {/* ── Right: Content ── */}
          <div className="about-content">
            <FadeIn delay={0.1}>
              <h2 className="about-h2">
                Smart People Make{' '}
                <br className="about-h2-break" />
                <span style={{ color: '#d84a35' }}>Expensive</span>{' '}Mistakes.
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
                not say out loud. Because reality always collects its bill.
              </p>
            </FadeIn>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* =============================================
           CARD
        ============================================= */
        .about-card {
          display: grid;
          grid-template-columns: 40% 1fr;
          align-items: stretch;
          background: linear-gradient(150deg, #271010 0%, #1c0707 50%, #180505 100%);
          border: 1px solid #2e1010;
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── Image column ── */
        .about-img-col {
          position: relative;
          overflow: hidden;
          min-height: 480px;
          /* Match card bg so contain letterbox areas are invisible */
          background: #1a0606;
        }

        .about-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          /* contain = no stretch, full figure visible head-to-feet */
          object-fit: contain;
          /* bottom = feet anchored to bottom of column */
          object-position: center bottom;
          /* Column bg shows through the contain letterbox area */
          background: transparent;
        }

        .about-img-fade {
          position: absolute;
          inset: 0;
          /* Fade right edge + subtle bottom fade */
          background:
            linear-gradient(to right, transparent 60%, #1c0707 100%),
            linear-gradient(to top, #1c0707 0%, transparent 8%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── Content column ── */
        .about-content {
          padding: 44px 48px 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-h2 {
          font-size: clamp(26px, 2.6vw, 36px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 26px 0;
        }

        .about-h2-break { display: block; }

        .about-para {
          color: #c0a8a8;
          font-size: 0.92rem;
          line-height: 1.8;
          margin: 0 0 20px 0;
        }

        .about-para--last { margin-bottom: 0; }

        /* =============================================
           TABLET: 768px – 1023px
        ============================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-card {
            grid-template-columns: 42% 1fr;
          }

          .about-img-col {
            min-height: 400px;
          }

          .about-content {
            padding: 36px 32px 36px 30px;
          }

          .about-h2 {
            font-size: clamp(22px, 3vw, 28px);
            margin-bottom: 20px;
          }

          .about-h2-break { display: none; }

          .about-para {
            font-size: 0.875rem;
            line-height: 1.75;
            margin-bottom: 16px;
          }
        }

        /* =============================================
           MOBILE: < 768px — single column
        ============================================= */
        @media (max-width: 767px) {
          .about-card {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }

          .about-img-col {
            min-height: 0;
            height: 300px;
          }

          .about-img-fade {
            background: linear-gradient(to bottom, transparent 70%, #1c0707 100%);
          }

          .about-content {
            padding: 28px 22px 32px;
          }

          .about-h2 {
            font-size: clamp(22px, 6vw, 28px);
            margin-bottom: 18px;
          }

          .about-h2-break { display: none; }

          .about-para {
            font-size: 0.875rem;
            line-height: 1.72;
            margin-bottom: 14px;
          }
        }

        /* =============================================
           SMALL MOBILE: < 420px
        ============================================= */
        @media (max-width: 420px) {
          .about-img-col {
            height: 250px;
          }

          .about-content {
            padding: 22px 16px 26px;
          }

          .about-para {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}