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
            {/*
              Figma: image is NOT flush to card edge.
              It sits INSET inside the column — like a picture-in-frame.
              The surrounding area is very dark (card bg shows through).
            */}
            <div className="about-img-frame">
              <img
                src="/images/businessman-silhouette.png"
                alt="Business leader on stage"
                className="about-img"
              />
              {/* Right + bottom edge fade to bleed into content area */}
              <div className="about-img-fade" />
            </div>
          </motion.div>

          {/* ── Right: Content column ── */}
          <div className="about-content">
            <FadeIn delay={0.1}>
              <h2 className="about-h2">
                Smart People Make{' '}
                <br />
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

        /* ══════════════════════════════════════════════════════════════════
           SECTION BG
           Figma: dark maroon outer zone, warm reddish glow on the left
           where the image sits, deep near-black elsewhere
        ══════════════════════════════════════════════════════════════════ */
        .about-section {
          position: relative;
          padding: 48px 24px;
          background:
            radial-gradient(
              ellipse 55% 65% at 14% 52%,
              rgba(110, 22, 22, 0.60) 0%,
              rgba(45,  8,  8, 0.38) 44%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 88% 92% at 52% 50%,
              #1a0606 0%,
              #0f0202 54%,
              #090101 100%
            );
        }

        .about-outer {
          max-width: 980px;
          margin: 0 auto;
        }

        /* ══════════════════════════════════════════════════════════════════
           CARD
           Figma: warm maroon card bg — noticeably warmer/more reddish than
           the section outer bg. Thin border, subtle box-shadow.
           Grid: image ~38%, content rest.
        ══════════════════════════════════════════════════════════════════ */
        .about-card {
          display: grid;
          grid-template-columns: 38% 1fr;
          align-items: stretch;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(90, 28, 28, 0.55);
          /* Figma card bg — warm dark maroon, multi-tone */
          background:
            radial-gradient(
              ellipse 65% 55% at 20% 20%,
              rgba(140, 38, 22, 0.22) 0%,
              transparent 60%
            ),
            linear-gradient(
              148deg,
              #2c1010 0%,
              #200c0c 40%,
              #180808 75%,
              #120404 100%
            );
          box-shadow:
            0 0 0 1px rgba(120, 30, 20, 0.12),
            0 12px 48px rgba(0, 0, 0, 0.58);
        }

        /* ══════════════════════════════════════════════════════════════════
           IMAGE COLUMN
           Figma: column bg is same card bg (no separate tint).
           The image sits INSET — padded on all sides so there's breathing
           room between the image and the card border/edges.
        ══════════════════════════════════════════════════════════════════ */
        .about-img-col {
          position: relative;
          overflow: hidden;
          /* Column bg = slightly darker, so the inset padding shows as a dark frame */
          background: #0f0303;
          display: flex;
          align-items: stretch;
        }

        /*
          The "frame" div gives the image its inset padding.
          Figma shows roughly 14px padding on top/bottom, 12px on left,
          and the right edge bleeds into the content column (no padding right).
        */
        .about-img-frame {
          position: relative;
          flex: 1;
          margin: 14px 0 14px 14px;   /* inset on top, bottom, left — NOT right */
          overflow: hidden;
          border-radius: 10px;         /* Figma: visible rounded corners on image */
        }

        .about-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center center;
          border-radius: 10px;
        }

        /*
          Right-edge + bottom fade:
          Bleeds the image into the card content bg so there's no hard edge.
          The right fade targets the card content bg color (#200c0c).
        */
        .about-img-fade {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background:
            linear-gradient(to right,  transparent 62%, #1a0707 100%),
            linear-gradient(to top,    #1a0707 0%,  transparent 10%);
          pointer-events: none;
          z-index: 1;
        }

        /* ══════════════════════════════════════════════════════════════════
           CONTENT COLUMN
        ══════════════════════════════════════════════════════════════════ */
        .about-content {
          padding: 42px 46px 42px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ══════════════════════════════════════════════════════════════════
           TYPOGRAPHY
           Figma H2: "Smart People Make" on line 1, "Expensive Mistakes." on line 2
           Font is bold white, "Expensive" in #d84a35
        ══════════════════════════════════════════════════════════════════ */
        .about-h2 {
          font-size: clamp(22px, 2.3vw, 32px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 24px 0;
        }

        .about-accent {
          color: #d84a35;
        }

        .about-para {
          color: #b8a0a0;
          font-size: 0.875rem;
          line-height: 1.72;
          margin: 0 0 18px 0;
        }

        .about-para--last {
          margin-bottom: 0;
        }

        /* ══════════════════════════════════════════════════════════════════
           TABLET: 768px – 1023px
        ══════════════════════════════════════════════════════════════════ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-section  { padding: 36px 20px; }
          .about-card     { grid-template-columns: 42% 1fr; }
          .about-content  { padding: 32px 28px 32px 26px; }
          .about-h2       { font-size: clamp(20px, 2.8vw, 27px); margin-bottom: 18px; }
          .about-para     { font-size: 0.85rem; line-height: 1.68; margin-bottom: 14px; }
          .about-img-frame { margin: 12px 0 12px 12px; border-radius: 8px; }
          .about-img      { border-radius: 8px; }
        }

        /* ══════════════════════════════════════════════════════════════════
           MOBILE: < 768px — single column
        ══════════════════════════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .about-section  { padding: 28px 16px; }
          .about-card     { grid-template-columns: 1fr; border-radius: 12px; }
          .about-img-col  { height: 280px; }
          .about-img-frame {
            margin: 12px 12px 0 12px;  /* on mobile: pad all sides, no bottom (fades out) */
            border-radius: 8px;
          }
          .about-img      { object-position: center top; border-radius: 8px; }
          .about-img-fade {
            background: linear-gradient(to bottom, transparent 60%, #1a0707 100%);
          }
          .about-content  { padding: 26px 20px 30px; }
          .about-h2       { font-size: clamp(20px, 5.5vw, 26px); margin-bottom: 16px; }
          .about-para     { font-size: 0.85rem; line-height: 1.68; margin-bottom: 14px; }
        }

        /* ══════════════════════════════════════════════════════════════════
           SMALL MOBILE: < 420px
        ══════════════════════════════════════════════════════════════════ */
        @media (max-width: 420px) {
          .about-img-col  { height: 240px; }
          .about-img-frame { margin: 10px 10px 0 10px; border-radius: 6px; }
          .about-content  { padding: 20px 16px 24px; }
          .about-para     { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}