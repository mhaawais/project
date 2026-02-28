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
      {/* ── Full-bleed background image + overlay ── */}
      <div className="results-bg" aria-hidden="true">
        <img src="/images/updated-2.png" alt="" className="results-bg-img" />
        <div className="results-bg-overlay" />
        <div className="results-bg-vignette" />
      </div>

      {/* ── Content grid: lists left, image right ── */}
      <div className="results-inner">
        {/* LEFT: stacked lists */}
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

        {/* RIGHT: image panel — same height as text column, NOT stretched */}
        <FadeIn direction="right">
          <div className="results-side">
            <div className="results-side-img-wrap">
              <img src="/images/updated-3.png" alt="Enterprise meeting" className="results-side-img" />
              <div className="results-side-img-fade" />
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        /* =============================================
           SECTION
        ============================================= */
        .results-section {
          position: relative;
          overflow: hidden;
        }

        /* ── Full-bleed background ── */
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
          transform: scale(1.02);
        }

        /* ✅ MUCH MORE visible bg image (less dark overlay) */
        .results-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(18, 4, 4, 0.40) 0%,
            rgba(20, 5, 5, 0.44) 45%,
            rgba(14, 3, 3, 0.48) 100%
          );
        }

        /* Light vignette for readability (still keeps bg visible) */
        .results-bg-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 95% 75% at 70% 50%,
            rgba(0,0,0,0.00) 0%,
            rgba(0,0,0,0.08) 55%,
            rgba(0,0,0,0.18) 100%
          );
          pointer-events: none;
        }

        /* ── Inner grid ── */
        .results-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 56px;
          display: grid;
          grid-template-columns: 1fr 40%;
          gap: 56px;
          align-items: stretch; /* ✅ makes both columns equal height */
        }

        /* ── Lists ── */
        .results-lists {
          display: flex;
          flex-direction: column;
          gap: 36px;
          justify-content: center;
        }

        .results-list-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .results-list-title {
          font-size: clamp(16px, 1.4vw, 20px);
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
          gap: 10px;
        }

        .results-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #f0dede; /* slightly brighter since bg is more visible */
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .results-bullet {
          width: 6px;
          height: 6px;
          background: #d84a35;
          border-radius: 1px;
          flex-shrink: 0;
          margin-top: 5px;
        }

        /* =============================================
           RIGHT IMAGE PANEL
           - same height as text column (grid stretch)
           - image fully visible (no crop)
           - no squeezing/stretching
        ============================================= */
        .results-side {
          height: 100%;
          display: flex;
        }

        .results-side-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.10);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 18px 50px rgba(0,0,0,0.30);
          padding: 14px; /* ✅ breathing room so it doesn't touch edges */
        }

        .results-side-img {
          width: 100%;
          height: 100%;
          display: block;

          /* ✅ FULLY VISIBLE, never cropped */
          object-fit: contain;
          object-position: center;
        }

        /* Left-edge fade blending into bg */
        .results-side-img-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(18,4,4,0.22) 0%, transparent 38%);
          pointer-events: none;
        }

        /* =============================================
           TABLET: 768px – 1023px
        ============================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .results-inner {
            grid-template-columns: 1fr 42%;
            gap: 36px;
            padding: 48px 20px;
          }

          .results-side-img-wrap {
            padding: 12px;
          }
        }

        /* =============================================
           MOBILE: < 768px — stack vertically
        ============================================= */
        @media (max-width: 767px) {
          .results-inner {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 40px 20px 44px;
          }

          /* keep bg visible but safe readability */
          .results-bg-overlay {
            background: rgba(16, 4, 4, 0.55);
          }

          /* image below lists, fixed height, still fully visible */
          .results-side-img-wrap {
            height: 260px;
            padding: 10px;
          }

          .results-side-img {
            width: 100%;
            height: 100%;
          }

          .results-list-title {
            font-size: clamp(16px, 4.5vw, 20px);
          }

          .results-list-item {
            font-size: 0.85rem;
          }

          .results-lists {
            gap: 28px;
          }
        }

        /* =============================================
           SMALL MOBILE: < 420px
        ============================================= */
        @media (max-width: 420px) {
          .results-inner {
            padding: 32px 16px 36px;
          }

          .results-side-img-wrap {
            height: 220px;
          }

          .results-list-item {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}