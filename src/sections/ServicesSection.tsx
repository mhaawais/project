import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const whoIWorkWith = [
  'Executives making high-stakes technology bets',
  'Product leaders navigating feature sprawl and roadmap drift',
  'Enterprise teams implementing AI without clear governance',
  'Organizations about to commit significant capital or reputation',
];

const whatIDo = [
  'Pressure-test ideas before major investment',
  'Challenge assumptions that hide risk',
  'Clarify governance and decision frameworks',
  'Cut through hype, noise, and internal politics',
  'Align strategy with real-world execution',
];

export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      {/* ── "Ideas" watermark — top right, only in headline area ── */}
      <div className="services-watermark" aria-hidden="true">
        <span>Ideas</span>
      </div>

      <div className="services-inner">
        {/* Headline — centered, solid dark bg, NO background image here */}
        <FadeIn>
          <div className="services-headline-wrap">
            <h2 className="services-h2">
              I Ruin Bad Ideas Early So You<br />
              Only Invest In What&apos;s{' '}
              <span style={{ color: '#d84a35' }}>Truly Worth Building</span>
            </h2>
          </div>
        </FadeIn>
      </div>

      {/* ── Below the line: bg image starts here (FULL WIDTH) ── */}
      <div className="services-body-wrap">
        {/* Background image + overlay ONLY in this block */}
        <div className="services-bg" aria-hidden="true">
          <img src="/images/updated.png" alt="" className="services-bg-img" />
          <div className="services-bg-overlay" />
          {/* extra soft vignette for readability while keeping image visible */}
          <div className="services-bg-vignette" />
        </div>

        {/* Lists grid */}
        <div className="services-body">
          {/* Left spacer — image visible here */}
          <div className="services-left-spacer" />

          {/* Right: stacked lists */}
          <StaggerContainer staggerDelay={0.1} className="services-lists">
            <StaggerItem>
              <div className="services-list-block">
                <h3 className="services-list-title">Who I Work With</h3>
                <ul className="services-list">
                  {whoIWorkWith.map((item, i) => (
                    <li key={i} className="services-list-item">
                      <span className="services-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="services-list-block">
                <h3 className="services-list-title">What I Do</h3>
                <ul className="services-list">
                  {whatIDo.map((item, i) => (
                    <li key={i} className="services-list-item">
                      <span className="services-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* ── Bottom accent line ── */}
      <div className="services-bottom-line" />

      <style>{`
        /* =============================================
           SECTION — solid dark bg (headline area)
        ============================================= */
        .services-section {
          position: relative;
          overflow: hidden;
          background: #0e0202;
        }

        /* ── "Ideas" watermark — top right of headline area ── */
        .services-watermark {
          position: absolute;
          top: 0;
          right: -10px;
          z-index: 3;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .services-watermark span {
          display: block;
          font-size: clamp(80px, 14vw, 200px);
          font-weight: 900;
          color: white;
          opacity: 0.06;
          letter-spacing: -0.02em;
          line-height: 0.85;
        }

        /* ── Headline inner (constrained) ── */
        .services-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 0;
        }

        .services-headline-wrap {
          text-align: center;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .services-h2 {
          font-size: clamp(24px, 3vw, 42px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* =============================================
           BODY WRAP — FULL WIDTH background
        ============================================= */
        .services-body-wrap {
          position: relative;
          width: 100vw;                 /* ✅ full viewport width */
          left: 50%;
          right: 50%;
          margin-left: -50vw;           /* ✅ escape max-width containers */
          margin-right: -50vw;
          overflow: hidden;
        }

        .services-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .services-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform: scale(1.03);       /* tiny scale to avoid edge gaps */
        }

        /* ✅ Increased visibility (less dark) */
        .services-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(30, 6, 6, 0.42) 0%,
            rgba(25, 5, 5, 0.50) 45%,
            rgba(18, 4, 4, 0.62) 100%
          );
        }

        /* Keeps edges readable without killing image */
        .services-bg-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 90% 70% at 70% 50%,
            rgba(0,0,0,0.0) 0%,
            rgba(0,0,0,0.10) 55%,
            rgba(0,0,0,0.25) 100%
          );
          pointer-events: none;
        }

        /* =============================================
           BODY CONTENT — constrained to max width
        ============================================= */
        .services-body {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px 64px;

          display: grid;
          grid-template-columns: 44% 1fr;
          gap: 0;
          align-items: start;
        }

        .services-left-spacer {
          /* intentionally empty: background shows through */
        }

        .services-lists {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .services-list-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .services-list-title {
          font-size: clamp(16px, 1.4vw, 20px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .services-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .services-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #e2caca;               /* slightly brighter for new overlay */
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .services-bullet {
          width: 6px;
          height: 6px;
          background: #d84a35;
          border-radius: 1px;
          flex-shrink: 0;
          margin-top: 5px;
        }

        /* ── Bottom accent line ── */
        .services-bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent 0%,
            #1a3a6e 30%,
            #2a5ab0 50%,
            #1a3a6e 70%,
            transparent 100%
          );
          z-index: 3;
        }

        /* =============================================
           TABLET: 768px – 1023px
        ============================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-body {
            grid-template-columns: 36% 1fr;
            padding: 36px 20px 56px;
          }

          .services-inner {
            padding: 48px 20px 0;
          }

          .services-h2 {
            font-size: clamp(22px, 3.5vw, 32px);
          }
        }

        /* =============================================
           MOBILE: < 768px
        ============================================= */
        @media (max-width: 767px) {
          .services-bg-overlay {
            background: rgba(20, 4, 4, 0.62); /* ✅ still visible, readable */
          }

          .services-body {
            grid-template-columns: 1fr;
            padding: 28px 20px 48px;
          }

          .services-left-spacer {
            display: none;
          }

          .services-inner {
            padding: 40px 20px 0;
          }

          .services-headline-wrap {
            padding-bottom: 32px;
          }

          .services-h2 {
            font-size: clamp(20px, 5.5vw, 28px);
          }

          .services-lists {
            gap: 28px;
          }

          .services-list-item {
            font-size: 0.85rem;
          }

          .services-watermark span {
            font-size: clamp(60px, 20vw, 120px);
          }
        }

        /* =============================================
           SMALL MOBILE: < 420px
        ============================================= */
        @media (max-width: 420px) {
          .services-inner {
            padding: 32px 16px 0;
          }

          .services-body {
            padding: 24px 16px 40px;
          }

          .services-list-item {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}