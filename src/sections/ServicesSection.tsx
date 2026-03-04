import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const WHO_I_WORK_WITH = [
  'Executives making high-stakes technology bets',
  'Product leaders navigating feature sprawl and roadmap drift',
  'Enterprise teams implementing AI without clear governance',
  'Organizations about to commit significant capital or reputation',
];

const WHAT_I_DO = [
  'Pressure-test ideas before major investment',
  'Challenge assumptions that hide risk',
  'Clarify governance and decision frameworks',
  'Cut through hype, noise, and internal politics',
  'Align strategy with real-world execution',
];

export function ServicesSection() {
  return (
    <section className="svc-section">

      {/* ══ TOP ZONE: headline + watermark ══ */}
      <div className="svc-top">
        {/* Faint "ideas" watermark — right side */}
        <div className="svc-watermark" aria-hidden="true">
          <span>Ideas</span>
        </div>

        <FadeIn>
          <h2 className="svc-h2">
            I Ruin Bad Ideas Early So You<br />
            Only Invest In What's{' '}
            <span className="svc-accent">Truly Worth Building</span>
          </h2>
        </FadeIn>
      </div>

      {/* Thin divider line */}
      <div className="svc-divider" />

      {/* ══ BOTTOM ZONE: bg image + content overlay ══ */}
      <div className="svc-bottom">
        {/* Background image — full bleed, dark red overlay on top */}
        <div className="svc-bg-img-wrap">
          <img
            src="/images/updated.png"
            alt=""
            className="svc-bg-img"
          />
          {/* Dark maroon overlay — left heavier, right lighter so text is readable */}
          <div className="svc-bg-overlay" />
        </div>

        {/* Content floats right */}
        <div className="svc-bottom-inner">
          <div className="svc-content-col">

            {/* Who I Work With */}
            <motion.div
              className="svc-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <h3 className="svc-block-title">Who I Work With</h3>
              <ul className="svc-list">
                {WHO_I_WORK_WITH.map((item) => (
                  <li key={item} className="svc-list-item">
                    <span className="svc-bullet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What I Do */}
            <motion.div
              className="svc-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
            >
              <h3 className="svc-block-title">What I Do</h3>
              <ul className="svc-list">
                {WHAT_I_DO.map((item) => (
                  <li key={item} className="svc-list-item">
                    <span className="svc-bullet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`

        /* ══════════════════════════════════════════════════════════════════
           SECTION SHELL
        ══════════════════════════════════════════════════════════════════ */
        .svc-section {
          position: relative;
          overflow: hidden;
          background: #0b0101;
        }

        /* ══════════════════════════════════════════════════════════════════
           TOP ZONE — dark bg, centered headline, faint watermark
        ══════════════════════════════════════════════════════════════════ */
        .svc-top {
  position: relative;
  overflow: hidden;

  background:
  radial-gradient(
    ellipse 55% 65% at 14% 52%,
    rgba(66, 14, 14, 0.15) 0%,
    rgba(45, 8, 8, 0.25) 44%,
    transparent 70%
  ),
  radial-gradient(
    ellipse 88% 92% at 52% 50%,
    #1d0303 0%,
    #190202 26%,
    #150202 100%
  );


  padding: 52px 24px 44px;
  text-align: center;
}

        /* Faint "ideas" watermark — Figma: large, very low opacity, right-aligned */
        .svc-watermark {
          position: absolute;
          top: 50%;
          right: 26px;
          transform: translateY(-50%);
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        .svc-watermark span {
          display: block;
          font-size: clamp(72px, 10vw, 172px);
          font-weight: 900;
          color: white;
          opacity: 0.03;
          line-height: 1;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .svc-h2 {
          position: relative;
          z-index: 1;
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
        }

        .svc-accent {
          color: #d84a35;
        }

        /* ══════════════════════════════════════════════════════════════════
           DIVIDER — thin teal/blue line between zones
           Figma: very thin ~1px, slightly blue-teal tint
        ══════════════════════════════════════════════════════════════════ */
        .svc-divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(60, 100, 160, 0.55) 20%,
            rgba(80, 130, 200, 0.7)  50%,
            rgba(60, 100, 160, 0.55) 80%,
            transparent 100%
          );
        }

        /* ══════════════════════════════════════════════════════════════════
           BOTTOM ZONE — bg image + dark overlay + right-side content
        ══════════════════════════════════════════════════════════════════ */
        .svc-bottom {
          position: relative;
          min-height: 420px;
        }

        /* Background image — full bleed */
        .svc-bg-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .svc-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        /*
          Dark overlay:
          Figma — left half is darker (image partially visible, deep maroon tint),
          right half slightly lighter so text reads clearly.
          Overall: very dark crimson wash over everything.
        */
        .svc-bg-overlay {
  position: absolute;
  inset: 0;
  background:
    /* Softer left gradient */
    linear-gradient(
      to right,
      rgba(65, 12, 12, 0.55) 0%,
      rgba(18, 3, 3, 0.45) 30%,
      rgba(14, 2, 2, 0.35) 60%,
      rgba(14, 2, 2, 0.25) 100%
    ),

    /* Lighter global crimson wash */
    rgba(60, 8, 8, 0.30);
}

        /* Inner content wrapper — max-width + padding */
        .svc-bottom-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: flex-end;   /* content floats RIGHT like Figma */
        }

        /* Content column — sits on right ~52% */
        .svc-content-col {
          width: 52%;
          padding: 44px 0 52px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        /* ══════════════════════════════════════════════════════════════════
           CONTENT BLOCKS
        ══════════════════════════════════════════════════════════════════ */
        .svc-block-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 14px 0;
          letter-spacing: -0.01em;
        }

        .svc-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .svc-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #ddc8c8;
          font-size: 0.82rem;
          line-height: 1.55;
        }

        /* Red square bullet — Figma: small filled red square ~5×5px */
        .svc-bullet {
          display: inline-block;
          width: 5px;
          height: 5px;
          min-width: 5px;
          background: #c0392b;
          border-radius: 1px;
          margin-top: 5px;   /* vertically align with first line of text */
          flex-shrink: 0;
        }


        /* ══════════════════════════════════════════════════════════════════
           TABLET: 768–1023px
        ══════════════════════════════════════════════════════════════════ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .svc-top      { padding: 44px 20px 36px; }
          .svc-h2       { font-size: clamp(18px, 2.8vw, 26px); }
          .svc-bottom   { min-height: 380px; }
          .svc-content-col { width: 60%; padding: 36px 0 44px; gap: 28px; }
        }

        /* ══════════════════════════════════════════════════════════════════
           MOBILE: <768px — content full width, stacked
        ══════════════════════════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .svc-top      { padding: 36px 20px 28px; }
          .svc-h2       { font-size: clamp(17px, 5vw, 24px); }
          .svc-watermark { display: none; }
          .svc-bottom   { min-height: auto; }
          .svc-bottom-inner { justify-content: center; }
          .svc-content-col {
            width: 100%;
            padding: 32px 0 40px;
            gap: 28px;
          }
          .svc-block-title { font-size: 0.95rem; }
          .svc-list-item   { font-size: 0.82rem; }
        }

        @media (max-width: 420px) {
          .svc-top    { padding: 28px 16px 22px; }
          .svc-bottom-inner { padding: 0 16px; }
          .svc-content-col  { padding: 26px 0 32px; gap: 24px; }
        }

      `}</style>
    </section>
  );
}


