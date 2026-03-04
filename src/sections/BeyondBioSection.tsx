import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const facts = [
  "Hacked my first computer before I could legally drive",
  "Lived on both sides of complex systems, inside enterprise and outside it",
  "Obsessed with building things, whether it's tech or perfecting my BBQ smoker",
  "I believe in leaving things better, unless you're algae on my boat (sorry, no mercy!)",
];

// Figma: small red rounded-square box with white checkmark inside
function CheckMark({ size = 30 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: "4px",
        background: "#3A1212", // dark maroon background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width={size * 0.75}
        height={size * 0.75}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 12L10 16L18 8"
          stroke="#C0392B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
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
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.18 }}
                  >
                    <CheckMark />
                    <p className="bio-fact-text">{fact}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* ── RIGHT: 3-image staggered collage ── */}
          <FadeIn direction="right">
            <div className="bio-collage">
              {/*
                FIGMA LAYOUT (carefully measured):
                ─────────────────────────────────────────────────
                Collage total: ~100% wide, ~320px tall

                [img1 — large, left+top, ~58% wide, ~72% tall]
                  sits at: left=0, top=0
                  shows: tech/office/server room scene

                [img2 — portrait, right side, ~44% wide, ~62% tall]
                  sits at: right=0, top=0
                  has a BLUE/TEAL 2px border
                  overlaps img1 on the left edge

                [img3 — boat, small, bottom-right, ~44% wide, ~36% tall]
                  sits at: right=0, bottom=0
                  overlaps img2 slightly at top
                  z-index above img1, below img2
                ─────────────────────────────────────────────────
              */}

             {/* Single collage image */}
<div className="bio-card bio-card--single">
  <img
    src="/images/photo-collage-5.png"
    alt="Photo collage"
    className="bio-card-img"
  />
</div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`

        /* ══════════════════════════════════════════════════════════
           SECTION BG
           Figma: strong deep maroon/crimson on left, fades to near-black
        ══════════════════════════════════════════════════════════ */
        .bio-section {
          background:
            linear-gradient(to bottom, #220404 0, transparent 110px),
            radial-gradient(
              ellipse 80% 110% at 5% 45%,
              #3d0808 0%,
              #280404 28%,
              #250707 55%,
              #220404 100%
            );
          padding: 60px 0 66px;
          overflow: hidden;
        }

        .bio-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* ══════════════════════════════════════════════════════════
           GRID — 45% left / 55% right
        ══════════════════════════════════════════════════════════ */
        .bio-grid {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 36px;
          align-items: center;
        }

        /* ══════════════════════════════════════════════════════════
           LEFT
        ══════════════════════════════════════════════════════════ */
        .bio-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .bio-heading {
          font-size: clamp(24px, 2.8vw, 40px);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .bio-accent { color: #c0392b; }

        .bio-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .bio-fact {
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }

        .bio-fact-text {
          font-size: clamp(12px, 0.92vw, 13.5px);
          color: #c0a8a8;
          line-height: 1.68;
          margin: 0;
        }

        /* ══════════════════════════════════════════════════════════
           COLLAGE
           Height: 320px desktop
           All cards use absolute positioning
        ══════════════════════════════════════════════════════════ */
      /* ===============================
   COLLAGE (images) — UPDATED CSS
   Fixes:
   ✅ images clearer (very light overlay)
   ✅ img-2 (portrait) fully visible + always on top
   ✅ correct staggering + different sizes + overlaps
================================ */

.bio-collage {
  position: relative;
  width: 100%;
  height: 360px;
}

/* Base card */
.bio-card {
  position: absolute;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
}

/* Image */
.bio-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

/* VERY LIGHT overlay only (keeps images crisp) */
.bio-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.06); /* make 0.04 for even clearer */
}

/* ─────────────────────────────
   beyond-3 (BOAT) → LEFT
───────────────────────────── */
.bio-card--boat {
  left: 0;
  top: 70px;
  width: 48%;
  height: 62%;
  z-index: 1;
}

/* ─────────────────────────────
   beyond-2 (PORTRAIT) → TOP-CENTER (always visible)
───────────────────────────── */
.bio-card--portrait {
  left: 38%;
  top: 0;
  width: 42%;
  height: 48%;
  z-index: 5; /* highest layer */
}

/* Slightly less overlay on portrait (even clearer) */
.bio-card--portrait::after {
  background: rgba(0, 0, 0, 0.03);
}

/* ─────────────────────────────
   beyond-1 (LARGE) → BOTTOM-RIGHT
───────────────────────────── */
.bio-card--large {
  right: 0;
  bottom: 0;
  width: 55%;
  height: 60%;
  z-index: 2;
}

/* ===============================
   RESPONSIVE
================================ */

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .bio-collage { height: 320px; }

  .bio-card--boat      { top: 62px; width: 50%; height: 62%; }
  .bio-card--portrait  { left: 40%; width: 44%; height: 46%; }
  .bio-card--large     { width: 56%; height: 58%; }
}

/* Mobile */
@media (max-width: 767px) {
  .bio-collage { height: 280px; }

  .bio-card--boat      { top: 58px; width: 56%; height: 62%; }
  .bio-card--portrait  { left: 44%; width: 52%; height: 44%; }
  .bio-card--large     { width: 66%; height: 56%; }
}

/* Small Mobile */
@media (max-width: 420px) {
  .bio-collage { height: 240px; }

  .bio-card--boat      { top: 52px; }
  .bio-card--portrait  { left: 42%; width: 54%; }
  .bio-card--large     { width: 68%; }
}



        /* ══════════════════════════════════════════════════════════
           TABLET: 768–1023px
        ══════════════════════════════════════════════════════════ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bio-section    { padding: 48px 0 54px; }
          .bio-container  { padding: 0 28px; }
          .bio-grid       { grid-template-columns: 1fr 1fr; gap: 24px; }
          .bio-collage    { height: 280px; }
          .bio-heading    { font-size: clamp(20px, 3vw, 32px); }
          .bio-fact-text  { font-size: 0.84rem; }
        }

        /* ══════════════════════════════════════════════════════════
           MOBILE: <768px
        ══════════════════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .bio-section    { padding: 40px 0 46px; }
          .bio-container  { padding: 0 18px; }
          .bio-grid       { grid-template-columns: 1fr; gap: 30px; }
          .bio-heading    { font-size: clamp(22px, 6vw, 30px); }
          .bio-fact-text  { font-size: 0.875rem; }
          .bio-list       { gap: 14px; }
          .bio-collage    { height: 260px; }
        }

        /* ══════════════════════════════════════════════════════════
           SMALL MOBILE: <420px
        ══════════════════════════════════════════════════════════ */
        @media (max-width: 420px) {
          .bio-container  { padding: 0 14px; }
          .bio-collage    { height: 220px; }
          .bio-heading    { font-size: 1.35rem; }
          .bio-fact-text  { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}
