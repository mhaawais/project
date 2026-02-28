import { motion, type Variants } from "framer-motion";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";

// Cubic bezier must be typed as a fixed-length tuple for framer-motion
const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

export function HeroSection() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <>
      {/* ── Responsive styles injected once ── */}
      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: radial-gradient(
            ellipse 75% 85% at 72% 35%,
            #5C0B0B 0%,
            #350707 30%,
            #1A0404 58%,
            #270303 100%
          );
        }

        /* ── Portrait container ── */
        .hero-portrait-wrap {
          position: absolute;
          top: 0;
          right: 0;
          width: 52%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        /* ── Watermark ── */
        .hero-watermark {
          position: absolute;
          top: 50%;
          right: -10px;
          transform: translateY(-40%);
          z-index: 2;
          pointer-events: none;
          user-select: none;
        }
        .hero-watermark span {
          display: block;
          font-size: clamp(70px, 11vw, 160px);
          font-weight: 900;
          color: white;
          opacity: 0.07;
          line-height: 1;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        /* ── Content wrapper ── */
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

        /* ── Left column ── */
        .hero-left {
          width: 100%;
          max-width: 48%;
          padding-top: 80px;
          padding-bottom: 60px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-h1 {
          font-size: clamp(28px, 2.8vw, 42px);
          font-weight: 800;
          color: white;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .hero-trust {
          color: #B89999;
          font-size: 0.9rem;
          line-height: 1.65;
          max-width: 440px;
          margin: 0;
        }

        /* ── < LG: Single column (up to 1023px) ── */
@media (max-width: 1023px) {
  /* Section becomes a flex column */
  .hero-section {
    min-height: auto;
    display: flex;
    flex-direction: column;
    background: radial-gradient(
      ellipse 120% 50% at 50% 70%,
      #5C0B0B 0%,
      #350707 35%,
      #1A0404 65%,
      #0C0101 100%
    );
  }

  /* Content goes FIRST */
  .hero-content-wrap {
    order: 1;
    min-height: auto;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
  }

  .hero-left {
    max-width: 100%;
    padding: 110px 20px 32px;
    gap: 16px;
  }

  /* Portrait goes SECOND — full width */
  .hero-portrait-wrap {
    order: 2;
    position: relative !important;
    width: 100% !important;
    height: min(70vh, 520px);
    top: auto !important;
    right: auto !important;
    opacity: 1 !important;
    flex-shrink: 0;
  }

  /* Ensure portrait is fully visible (no crop) */
  .hero-portrait-wrap img {
    object-fit: contain !important;
    object-position: center top !important;
    mask-image: none !important;
    -webkit-mask-image: none !important;
  }

  /* Hide watermark on <lg */
  .hero-watermark {
    display: none;
  }

  .hero-h1 {
    font-size: clamp(26px, 5vw, 38px);
  }

  .hero-trust {
    max-width: 100%;
    font-size: 0.9rem;
  }
}

        /* ── MOBILE: < 640px ── */
        @media (max-width: 639px) {
          /* Section becomes a flex column so we can reorder children */
          .hero-section {
            min-height: auto;
            display: flex;
            flex-direction: column;
            background: radial-gradient(
              ellipse 120% 50% at 50% 70%,
              #5C0B0B 0%,
              #350707 35%,
              #1A0404 65%,
              #0C0101 100%
            );
          }

          /* Content goes FIRST (order 1) */
          .hero-content-wrap {
            order: 1;
            min-height: auto;
            flex-direction: column;
            align-items: stretch;
            padding: 0;
          }

          .hero-left {
            max-width: 100%;
            padding: 100px 20px 32px;
            gap: 16px;
          }

          /* Portrait goes SECOND (order 2) — below content */
          .hero-portrait-wrap {
            order: 2;
            position: relative !important;
            width: 100% !important;
            height: 280px;
            top: auto !important;
            right: auto !important;
            opacity: 1 !important;
            flex-shrink: 0;
          }

          /* Hide watermark on mobile */
          .hero-watermark {
            display: none;
          }

          .hero-h1 {
            font-size: clamp(26px, 7vw, 34px);
          }

          .hero-trust {
            max-width: 100%;
            font-size: 0.90rem;
          }
        }

        /* ── Small tablet: 640–767px ── */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero-left {
            max-width: 70%;
          }
          .hero-portrait-wrap {
            width: 55%;
            opacity: 0.55;
          }
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
          {/* Red glow on face */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 60% at 55% 25%, rgba(180,25,10,0.55) 0%, transparent 60%)",
              zIndex: 0,
            }}
          />
          <img
            src="/images/hero-bg.png"
            alt="Robert Vandervoort - Strategic Advisor"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              zIndex: 1,
              maskImage:
                "linear-gradient(to bottom, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* ── Watermark ── */}
        <div className="hero-watermark">
          <span>Vandervoort</span>
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
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#932a1c",
                  borderRadius: "1px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "#E8D5D5",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                Strategic Advisor
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 className="hero-h1" variants={fadeUp}>
              Who Leaders Call When the Stakes Are High and Getting It Wrong{" "}
              <mark
                style={{
                  background: "#932a1c",
                  color: "white",
                  padding: "1px 6px 3px",
                  borderRadius: "3px",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                Costs Millions
              </mark>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              style={{
                color: "#E8D5D5",
                fontSize: "1rem",
                lineHeight: 1.8,
                margin: 2,
              }}
            >
              I pressure-test ideas before you waste people, capital, or
              credibility.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
            >
              <PrimaryButton href="#contact">Book Me to Speak</PrimaryButton>
              <SecondaryButton href="#services">
                Get No-BS Consulting
              </SecondaryButton>
            </motion.div>

            {/* Trust line */}
            <motion.p className="hero-trust" variants={fadeUp}>
              Trusted inside Fortune 100 and global enterprise environments for
              high-stakes AI, product, and governance decisions.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "140px",
            background: "linear-gradient(to top, #0C0101, transparent)",
            zIndex: 4,
            pointerEvents: "none",
          }}
        />
      </section>
    </>
  );
}
