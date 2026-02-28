import { motion, type Variants } from "framer-motion";

// ─── Buttons ───────────────────────────────────────────────────────────────
function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "9px 18px", background: "#932a1c", color: "white",
        fontSize: "0.8rem", fontWeight: 600, borderRadius: "4px",
        border: "1.5px solid #932a1c", textDecoration: "none",
        letterSpacing: "0.01em", whiteSpace: "nowrap", cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#7a2216"; el.style.borderColor = "#7a2216"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#932a1c"; el.style.borderColor = "#932a1c"; }}
    >
      {children} <span style={{ fontSize: "0.75rem" }}>→</span>
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "9px 18px", background: "transparent", color: "white",
        fontSize: "0.8rem", fontWeight: 600, borderRadius: "4px",
        border: "1.5px solid rgba(255,255,255,0.35)", textDecoration: "none",
        letterSpacing: "0.01em", whiteSpace: "nowrap", cursor: "pointer",
        transition: "border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.65)"; el.style.background = "rgba(255,255,255,0.06)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.35)"; el.style.background = "transparent"; }}
    >
      {children} <span style={{ fontSize: "0.75rem" }}>→</span>
    </a>
  );
}

// ───────────────────────────────────────────────────────────────────────────
const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

export function HeroSection() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <>
      <style>{`

        /* ══════════════════════════════════════════════════════════════════
           SECTION
           Figma background — THREE layered zones:
             Zone A (upper-right):  bright crimson #7a1212  → face glow area
             Zone B (lower-left):   warm dark red  #5a0d0d  → behind text content
             Zone C (everywhere else): near-black  #0b0101
           Achieved with two radial-gradient layers stacked.
        ══════════════════════════════════════════════════════════════════ */
        .hero-section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background:
            /* Zone B — warm red glow behind/below text block (lower-left) */
            radial-gradient(
              ellipse 52% 50% at 16% 78%,
              rgba(105, 14, 14, 0.2) 40%,
              rgba(56, 5, 5, 0.5)  42%,
              transparent 68%
            ),
            /* Zone A — main portrait/face glow (upper-right) */
            radial-gradient(
              ellipse 62% 68% at 84% 20%,
              #7a1212  0%,
              #4a0a0a  30%,
              #1c0404  56%,
              #0b0101  100%
            );
        }

        /* ══════════════════════════════════════════════════════════════════
           PORTRAIT  — 42% width, head+shoulders only
        ══════════════════════════════════════════════════════════════════ */
        .hero-portrait-wrap {
          position: absolute;
          top: 0;
          right: 0;
          width: 42%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        /* ══════════════════════════════════════════════════════════════════
           WATERMARK A — "Vandervoort"
           Right-aligned, vertically centered-ish, faint white
        ══════════════════════════════════════════════════════════════════ */
        .hero-wm-vandervoort {
          position: absolute;
          top: 50%;
          right: -10px;
          transform: translateY(-55%);
          z-index: 2;
          pointer-events: none;
          user-select: none;
        }
        .hero-wm-vandervoort span {
          display: block;
          font-size: clamp(52px, 8.5vw, 122px);
          font-weight: 900;
          color: white;
          opacity: 0.05;
          line-height: 1;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        /* ══════════════════════════════════════════════════════════════════
           WATERMARK B — "Robert"
           SEPARATE div. Positioned:
             • Below "Vandervoort" (top offset = Vandervoort top + its height)
             • Shifted LEFT relative to Vandervoort — starts near portrait's
               left edge so it peeks out behind/beside the image
             • Smaller font
             • Same near-invisible opacity
        ══════════════════════════════════════════════════════════════════ */
        .hero-wm-robert {
          position: absolute;
          /* Place it below Vandervoort: 50% + half-of-vandervoort-height */
          top: calc(50% + clamp(40px, 6.5vw, 94px));
          /* Shift left so "Robert" starts from ~58% from right = left of portrait */
          right: 30%;
          z-index: 2;
          pointer-events: none;
          user-select: none;
        }
        .hero-wm-robert span {
          display: block;
          font-size: clamp(38px, 6vw, 86px);
          font-weight: 900;
          color: white;
          opacity: 0.05;
          line-height: 1;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        /* ══════════════════════════════════════════════════════════════════
           CONTENT WRAPPER
        ══════════════════════════════════════════════════════════════════ */
        .hero-content-wrap {
          position: relative;
          z-index: 3;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* ══════════════════════════════════════════════════════════════════
           LEFT COLUMN
        ══════════════════════════════════════════════════════════════════ */
        .hero-left {
          width: 100%;
          max-width: 44%;
          padding-top: 80px;
          padding-bottom: 60px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .hero-h1 {
          font-size: clamp(22px, 2.1vw, 32px);
          font-weight: 800;
          color: white;
          line-height: 1.28;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .hero-subline {
          color: #E8D5D5;
          font-size: 0.82rem;
          line-height: 1.75;
          margin: 0;
        }

        .hero-trust {
          color: #A08888;
          font-size: 0.78rem;
          line-height: 1.65;
          max-width: 380px;
          margin: 0;
        }

        /* ══════════════════════════════════════════════════════════════════
           RESPONSIVE — < LG (≤1023px)
        ══════════════════════════════════════════════════════════════════ */
        @media (max-width: 1023px) {
          .hero-section {
            min-height: auto;
            display: flex;
            flex-direction: column;
            background: radial-gradient(
              ellipse 120% 50% at 50% 70%,
              #5C0B0B 0%, #350707 35%, #1A0404 65%, #0C0101 100%
            );
          }
          .hero-content-wrap {
            order: 1; min-height: auto;
            flex-direction: column; align-items: stretch; padding: 0;
          }
          .hero-left { max-width: 100%; padding: 110px 20px 32px; gap: 14px; }
          .hero-portrait-wrap {
            order: 2; position: relative !important;
            width: 100% !important; height: min(70vh, 520px);
            top: auto !important; right: auto !important; flex-shrink: 0;
          }
          .hero-portrait-wrap img {
            object-fit: contain !important; object-position: center top !important;
            mask-image: none !important; -webkit-mask-image: none !important;
          }
          .hero-wm-vandervoort, .hero-wm-robert { display: none; }
          .hero-h1 { font-size: clamp(22px, 4.5vw, 32px); }
          .hero-trust { max-width: 100%; }
        }

        /* ══════════════════════════════════════════════════════════════════
           RESPONSIVE — Mobile (≤639px)
        ══════════════════════════════════════════════════════════════════ */
        @media (max-width: 639px) {
          .hero-section {
            min-height: auto; display: flex; flex-direction: column;
            background: radial-gradient(
              ellipse 120% 50% at 50% 70%,
              #5C0B0B 0%, #350707 35%, #1A0404 65%, #0C0101 100%
            );
          }
          .hero-content-wrap {
            order: 1; min-height: auto;
            flex-direction: column; align-items: stretch; padding: 0;
          }
          .hero-left { max-width: 100%; padding: 100px 20px 32px; gap: 14px; }
          .hero-portrait-wrap {
            order: 2; position: relative !important;
            width: 100% !important; height: 280px;
            top: auto !important; right: auto !important; flex-shrink: 0;
          }
          .hero-wm-vandervoort, .hero-wm-robert { display: none; }
          .hero-h1 { font-size: clamp(22px, 6.5vw, 30px); }
          .hero-trust { max-width: 100%; font-size: 0.78rem; }
        }

        /* ══════════════════════════════════════════════════════════════════
           RESPONSIVE — Small tablet (640–767px)
        ══════════════════════════════════════════════════════════════════ */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero-left { max-width: 70%; }
          .hero-portrait-wrap { width: 55%; opacity: 0.55; }
        }

      `}</style>

      <section className="hero-section">

        {/* ── Portrait ── */}
        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {/* Warm red face glow overlay */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            background: "radial-gradient(ellipse 70% 52% at 50% 18%, rgba(155,20,8,0.55) 0%, transparent 58%)",
          }} />
          <img
            src="/images/hero-bg.png"
            alt="Robert Vandervoort - Strategic Advisor"
            style={{
              position: "absolute", top: 0, right: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              zIndex: 1,
              /* Fades figure out by ~78%, rest pure dark */
              maskImage: "linear-gradient(to bottom, black 32%, rgba(0,0,0,0.4) 58%, transparent 78%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 32%, rgba(0,0,0,0.4) 58%, transparent 78%)",
            }}
          />
        </motion.div>

        {/* ── Watermark A: "Vandervoort" — right, vertically centered ── */}
        <div className="hero-wm-vandervoort">
          <span>Vandervoort</span>
        </div>

        {/* ── Watermark B: "Robert" — SEPARATE div, below & left of Vandervoort ── */}
        <div className="hero-wm-robert">
          <span>Robert</span>
        </div>

        {/* ── Main content ── */}
        <div className="hero-content-wrap">
          <motion.div
            className="hero-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {/* Tag */}
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <span style={{ width: "7px", height: "7px", background: "#932a1c", borderRadius: "1px", flexShrink: 0 }} />
              <span style={{ color: "#E8D5D5", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.01em" }}>
                Strategic Advisor
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 className="hero-h1" variants={fadeUp}>
              Who Leaders Call When the Stakes Are High and Getting It Wrong{" "}
              <mark style={{
                background: "#932a1c", color: "white",
                padding: "1px 5px 3px", borderRadius: "3px",
                WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone",
              }}>
                Costs Millions
              </mark>
            </motion.h1>

            {/* Subheadline */}
            <motion.p className="hero-subline" variants={fadeUp}>
              I pressure-test ideas before you waste people, capital, or credibility.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <PrimaryButton href="#contact">Book Me to Speak</PrimaryButton>
              <SecondaryButton href="#services">Get No-BS Consulting</SecondaryButton>
            </motion.div>

            {/* Trust line */}
            <motion.p className="hero-trust" variants={fadeUp}>
              Trusted inside Fortune 100 and global enterprise environments for
              high-stakes AI, product, and governance decisions.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "140px",
          background: "linear-gradient(to top, #0b0101, transparent)",
          zIndex: 4, pointerEvents: "none",
        }} />

      </section>
    </>
  );
}