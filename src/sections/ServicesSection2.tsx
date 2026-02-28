import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const whatClientsGain = [
  'Clearer, defensible decisions',
  'Avoidance of expensive missteps',
  'Governance before growth',
  'Strategy that survives contact with reality',
];

const enterpriseResults = [
  '3 million dollars in enterprise revenue year one',
  '8 million dollars in enterprise revenue year two',
  '1.2 million dollar annual recurring revenue win in complex IoT monitoring',
  'High proof-of-value win rates on enterprise-scale initiatives',
  'Production-grade integrations deployed in live environments',
  'AI and observability initiatives guided under real-world constraints',
];

export function ServicesSection2() {
  return (
    <section id="results" className="results-section">
      {/* ══ Full-bleed background image ══ */}
      <div className="results-bg" aria-hidden="true">
        <img src="/images/updated-2.png" alt="" className="results-bg-img" />
        <div className="results-bg-overlay" />
      </div>

      {/* ══ Content grid ══ */}
      <div className="results-inner">
        {/* LEFT: stacked lists — top aligned */}
        <StaggerContainer staggerDelay={0.1} className="results-lists">
          <StaggerItem>
            <div className="results-list-block">
              <h3 className="results-list-title">What Clients Gain</h3>
              <ul className="results-list">
                {whatClientsGain.map((item, i) => (
                  <li key={i} className="results-list-item">
                    <span className="results-bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="results-list-block">
              <h3 className="results-list-title">Enterprise Results</h3>
              <ul className="results-list">
                {enterpriseResults.map((item, i) => (
                  <li key={i} className="results-list-item">
                    <span className="results-bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* RIGHT: image — top aligned to start opposite the lists */}
        <FadeIn direction="right">
          <div className="results-side">
            <img
              src="/images/updated-3.png"
              alt="Enterprise meeting"
              className="results-side-img"
            />
            <div className="results-side-fade" />
          </div>
        </FadeIn>
      </div>

      <style>{`
        /* ══════════════════════════════════════════════════════════════════
           SECTION
        ══════════════════════════════════════════════════════════════════ */
        .results-section {
          position: relative;
          overflow: hidden;
        }

        /* ══════════════════════════════════════════════════════════════════
           BACKGROUND IMAGE
        ══════════════════════════════════════════════════════════════════ */
        .results-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .results-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        .results-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to right,
              rgba(12, 2, 2, 0.40) 0%,
              rgba(14, 3, 3, 0.30) 45%,
              rgba(10, 2, 2, 0.20) 100%
            );
        }

        /* ══════════════════════════════════════════════════════════════════
           INNER GRID — reduced vertical padding to decrease section height
        ══════════════════════════════════════════════════════════════════ */
        .results-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;

          /* ↓ reduced from 52px/52px */
          padding: 36px 32px 36px 48px;

          display: grid;
          grid-template-columns: 1fr 42%;
          gap: 48px;

          /* top aligned like figma */
          align-items: start;
        }

        /* ══════════════════════════════════════════════════════════════════
           LEFT LISTS — slightly tighter spacing to reduce total height
        ══════════════════════════════════════════════════════════════════ */
        .results-lists {
          display: flex;
          flex-direction: column;
          gap: 26px; /* ↓ reduced from 34px */
        }

        .results-list-block {
          display: flex;
          flex-direction: column;
          gap: 10px; /* ↓ reduced from 12px */
        }

        .results-list-title {
          font-size: clamp(15px, 1.35vw, 19px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .results-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px; /* ↓ reduced from 9px */
        }

        .results-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #eedcdc;
          font-size: 0.8rem;
          line-height: 1.50; /* slightly tighter */
        }

        .results-bullet {
          display: inline-block;
          width: 5px;
          height: 5px;
          min-width: 5px;
          background: #c0392b;
          border-radius: 1px;
          margin-top: 5px;
          flex-shrink: 0;
        }

        /* ══════════════════════════════════════════════════════════════════
           RIGHT IMAGE — same width, but capped height so section is shorter
           and image starts opposite the top of content.
        ══════════════════════════════════════════════════════════════════ */
        .results-side {
          position: relative;
          width: 100%;
          align-self: start; /* ensure top aligned with lists */
        }

        .results-side-img {
  display: block;
  width: 100%;
  height: auto;           /* keep natural aspect ratio */
  max-height: 360px;      /* keeps section shorter */
  object-fit: contain;    /* prevent zoom / crop */
  object-position: center center;
  border-radius: 6px;
}

        .results-side-fade {
          position: absolute;
          inset: 0;
          border-radius: 6px;
          background:
            linear-gradient(to right,  rgba(12,2,2,0.26) 0%, transparent 28%),
            linear-gradient(to top,    rgba(12,2,2,0.22) 0%, transparent 22%),
            linear-gradient(to left,   rgba(12,2,2,0.12) 0%, transparent 20%);
          pointer-events: none;
        }

        /* ══════════════════════════════════════════════════════════════════
           TABLET
        ══════════════════════════════════════════════════════════════════ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .results-inner {
            grid-template-columns: 1fr 44%;
            gap: 32px;

            /* ↓ reduce further */
            padding: 32px 24px;
          }

          .results-side-img {
            max-height: 320px;
          }

          .results-list-title { font-size: clamp(14px, 2vw, 18px); }
          .results-list-item  { font-size: 0.8rem; }
        }

        /* ══════════════════════════════════════════════════════════════════
           MOBILE — stack, keep height compact
        ══════════════════════════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .results-inner {
            grid-template-columns: 1fr;
            gap: 22px;

            /* ↓ reduced from 36/20/40 */
            padding: 28px 20px 30px;
          }

          .results-bg-overlay {
            background: rgba(12, 2, 2, 0.44);
          }

          .results-side-img {
            max-height: none;     /* allow natural on mobile */
            border-radius: 10px;
          }

          .results-list-title { font-size: clamp(15px, 4.5vw, 19px); }
          .results-list-item  { font-size: 0.82rem; }
          .results-lists      { gap: 22px; }
        }

        /* ══════════════════════════════════════════════════════════════════
           SMALL MOBILE
        ══════════════════════════════════════════════════════════════════ */
        @media (max-width: 420px) {
          .results-inner { padding: 24px 16px 26px; }
          .results-list-item { font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
}