import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Check } from 'lucide-react';

const facts = [
  'Hacked my first computer before I could legally drive',
  'Lived on both sides of complex systems, inside enterprise and outside it',
  "Obsessed with building things, whether it's tech or perfecting my BBQ smoker",
  "I believe in leaving things better, unless you're algae on my boat (sorry, no mercy!)",
];

export function BeyondBioSection() {
  return (
    <section className="bio-section">
      <div className="bio-container">
        <div className="bio-grid">

          {/* ── LEFT: Title + checklist ── */}
          <div className="bio-left">
            <FadeIn>
              <h2 className="bio-heading">
                <span className="bio-accent">Beyond</span> the Bio
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.12} className="bio-list">
              {facts.map((fact, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className="bio-fact"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bio-check-wrap">
                      <Check className="bio-check-icon" />
                    </div>
                    <p className="bio-fact-text">{fact}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* ── RIGHT: Staggered 3-image collage cards ── */}
          <FadeIn direction="right">
            <div className="bio-collage">

              {/* Large bottom-left card */}
              <div className="bio-card bio-card--large">
                <img src="/images/beyond-1.png" alt="" className="bio-card-img" />
              </div>

              {/* Top-right card — elevated/overlapping */}
              <div className="bio-card bio-card--top-right">
                <img src="/images/beyond-2.png" alt="" className="bio-card-img" />
              </div>

              {/* Bottom-right card */}
              <div className="bio-card bio-card--bottom-right">
                <img src="/images/beyond-3.png" alt="" className="bio-card-img" />
              </div>

            </div>
          </FadeIn>

        </div>
      </div>

      <style>{`
        /* ── Section: rich deep red gradient ── */
        .bio-section {
          background: radial-gradient(
            ellipse 130% 90% at 10% 50%,
            #3a0606 0%,
            #250202 30%,
            #160101 60%,
            #080000 100%
          );
          padding: 68px 0 72px;
          overflow: hidden;
        }

        .bio-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* 45/55 split */
        .bio-grid {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 48px;
          align-items: center;
        }

        /* ── LEFT ── */
        .bio-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .bio-heading {
          font-size: clamp(26px, 3vw, 44px);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .bio-accent {
          color: #c0392b;
        }

        .bio-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bio-fact {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .bio-check-wrap {
          width: 22px;
          height: 22px;
          border-radius: 4px;
          background: rgba(192, 57, 43, 0.2);
          border: 1px solid rgba(192, 57, 43, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bio-check-icon {
          width: 12px;
          height: 12px;
          color: #c0392b;
          stroke-width: 3;
        }

        .bio-fact-text {
          font-size: clamp(13px, 1vw, 15px);
          color: #c0a8a8;
          line-height: 1.7;
          margin: 0;
        }

        /* ── RIGHT: stacked card collage ── */
        .bio-collage {
          position: relative;
          width: 100%;
          /* height driven by content — roughly matches screenshot proportions */
          height: 420px;
        }

        /* Each card: #230101 background + padding + rounded */
        .bio-card {
          position: absolute;
          background: #230101;
          border-radius: 14px;
          padding: 10px;
          box-shadow:
            0 8px 32px rgba(0,0,0,0.6),
            0 2px 8px rgba(0,0,0,0.4);
        }

        .bio-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 8px;
        }

        /* Large card: left side, most of the height */
        .bio-card--large {
          left: 0;
          top: 30px;
          width: 58%;
          height: 340px;
          z-index: 2;
        }

        /* Top-right card: overlaps large card, sits higher */
        .bio-card--top-right {
          right: 0;
          top: 0;
          width: 42%;
          height: 200px;
          z-index: 3;
        }

        /* Bottom-right card: below top-right */
        .bio-card--bottom-right {
          right: 0;
          bottom: 0;
          width: 44%;
          height: 190px;
          z-index: 2;
        }

        /* ── Tablet ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bio-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .bio-container { padding: 0 28px; }
          .bio-collage { height: 340px; }
          .bio-card--large { height: 270px; }
          .bio-card--top-right { height: 160px; }
          .bio-card--bottom-right { height: 150px; }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .bio-section { padding: 48px 0; }
          .bio-container { padding: 0 20px; }
          .bio-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .bio-heading { font-size: 1.75rem; }
          .bio-fact-text { font-size: 0.9rem; }
          .bio-collage { height: 300px; }
          .bio-card--large { height: 230px; top: 20px; }
          .bio-card--top-right { height: 140px; width: 44%; }
          .bio-card--bottom-right { height: 130px; width: 44%; }
        }

        /* ── Small mobile ── */
        @media (max-width: 420px) {
          .bio-container { padding: 0 16px; }
          .bio-heading { font-size: 1.5rem; }
          .bio-collage { height: 250px; }
          .bio-card--large { height: 190px; }
          .bio-card--top-right { height: 115px; }
          .bio-card--bottom-right { height: 110px; }
        }
      `}</style>
    </section>
  );
}