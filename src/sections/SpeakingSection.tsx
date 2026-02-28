import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ArrowRight } from 'lucide-react';

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const keynotes = [
  {
    title: 'Why Smart Ideas Fail',
    description: 'How intelligent teams make expensive mistakes and how judgment prevents them.',
  },
  {
    title: 'AI, Governance & The Human Cost of Getting It Wrong',
    description: 'The financial and human consequences of rushed AI implementation.',
  },
  {
    title: 'Pressure-Testing Innovation Before It Burns Resources',
    description: 'Designing systems that survive contact with reality.',
  },
  {
    title: 'Building the Wrong Thing Well Is Still Failure',
    description: "Why execution doesn't save flawed strategy.",
  },
];

export function SpeakingSection() {
  return (
    <section id="speaking" className="spk-section">

      {/* ══════════════════════════
          TOP ZONE — solid dark, centered
      ══════════════════════════ */}
      <div className="spk-top">
        <FadeIn>
          <h2 className="spk-title">Speaking &amp; Media</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="spk-sub">
            I am a Strategic Advisor trusted inside some of the largest enterprises to guide
            complex technology, product, and governance decisions.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="spk-sub">
            I am known for asking the questions most people avoid, especially when the cost of
            getting it wrong is high.
          </p>
        </FadeIn>
      </div>

      {/* thin full-width divider */}
      <div className="spk-divider" />

      {/* ══════════════════════════
          BOTTOM ZONE — bg image, full-bleed grid
      ══════════════════════════ */}
      <div className="spk-bottom">

        {/* Full-bleed bg image + overlay */}
        <div className="spk-bg" aria-hidden="true">
          <img src="/images/updated-5.png" alt="" className="spk-bg-img" />
          <div className="spk-bg-overlay" />
        </div>

        {/* ── Watermark: 2 lines, fully visible ── */}
        <div className="spk-watermark" aria-hidden="true">
          <span>Speaking &amp;</span>
          <span>Media</span>
        </div>

        <div className="spk-grid">

          {/* LEFT: Keynotes — pushed right toward portrait */}
          <div className="spk-left">
            <FadeIn>
              <h3 className="spk-kn-heading">Signature Keynotes</h3>
            </FadeIn>

            <StaggerContainer staggerDelay={0.09} className="spk-kn-list">
              {keynotes.map((k, i) => (
                <StaggerItem key={i}>
                  <div className="spk-kn-item">
                    <h4 className="spk-kn-title">{k.title}</h4>
                    <p className="spk-kn-desc">{k.description}</p>
                    <div className="spk-kn-line" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.38}>
              <motion.a
                href="#contact"
                className="spk-btn"
                whileHover={{ scale: 1.03, backgroundColor: '#972b1c' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                Invite Me to Speak
                <ArrowRight size={14} />
              </motion.a>
            </FadeIn>
          </div>

          {/* RIGHT: Portrait — fills column, bleeds to right edge */}
          <motion.div
            className="spk-portrait-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <img
              src="/images/hero-bg.png"
              alt="Robert Vandervoort"
              className="spk-portrait"
            />
          </motion.div>

        </div>
      </div>

      <style>{`
        /* ============================================
           SECTION
        ============================================ */
        .spk-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(
            ellipse 75% 55% at 50% 0%,
            #1e0808 0%,
            #110303 55%,
            #0a0101 100%
          );
        }

        /* ============================================
           TOP ZONE
        ============================================ */
        .spk-top {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 60px 24px 50px;
        }

        .spk-title {
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
        }

        .spk-sub {
          font-size: clamp(14px, 1.2vw, 16px);
          color: #c0aaaa;
          line-height: 1.75;
          margin: 0 auto 10px;
          max-width: 620px;
        }

        .spk-divider {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.07);
        }

        /* ============================================
           BOTTOM ZONE
        ============================================ */
        .spk-bottom {
          position: relative;
          overflow: hidden;
        }

        .spk-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .spk-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }

        .spk-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 1, 1, 0.78);
        }

        /* ── Watermark: 2 lines side by side, fully visible ── */
        .spk-watermark {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
          user-select: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
        }

        .spk-watermark span {
          display: block;
          font-size: clamp(40px, 8vw, 115px);
          font-weight: 900;
          color: #8a1a1a;
          opacity: 0.65;
          letter-spacing: -0.02em;
          line-height: 1;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        /* ── Grid: left col shrunk so text is closer to portrait ── */
        .spk-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 52% 48%;
          min-height: 620px;
        }

        /* ── LEFT column: big left-padding clears watermark,
              right-padding is tight so text hugs the portrait ── */
        .spk-left {
          padding: 52px 16px 60px 320px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        /* ── LARGER heading ── */
        .spk-kn-heading {
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .spk-kn-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .spk-kn-item {
          padding-top: 14px;
        }

        /* ── LARGER keynote title ── */
        .spk-kn-title {
          font-size: clamp(15px, 1.3vw, 18px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 5px;
          line-height: 1.3;
        }

        /* ── LARGER description ── */
        .spk-kn-desc {
          font-size: clamp(13px, 1.05vw, 15px);
          color: #b89090;
          margin: 0;
          line-height: 1.65;
        }

        .spk-kn-line {
          margin-top: 12px;
          height: 1.5px;
          max-width: 460px;
          background: #972b1c;
        }

        .spk-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background: #972b1c;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 4px;
          text-decoration: none;
          cursor: pointer;
          width: fit-content;
          margin-top: 6px;
        }

        /* ── RIGHT column — portrait, NO seam overlay ── */
        .spk-portrait-col {
          position: relative;
          overflow: hidden;
          background: transparent;
        }

        .spk-portrait {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center top;
          display: block;
          mask-image: linear-gradient(
            to bottom,
            black 55%,
            rgba(0, 0, 0, 0.6) 80%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 55%,
            rgba(0, 0, 0, 0.6) 80%,
            transparent 100%
          );
        }

        /* ============================================
           TABLET: 768px – 1023px
        ============================================ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .spk-grid {
            grid-template-columns: 55% 45%;
            min-height: 500px;
          }

          .spk-left {
            padding: 40px 12px 48px 120px;
          }

          .spk-kn-heading { font-size: 1.25rem; }
          .spk-kn-title   { font-size: 1rem; }
          .spk-kn-desc    { font-size: 0.9rem; }
        }

        /* ============================================
           MOBILE: < 768px
        ============================================ */
        @media (max-width: 767px) {
          .spk-top {
            padding: 36px 20px 28px;
          }

          .spk-sub { font-size: 0.9rem; }

          .spk-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .spk-left {
            padding: 32px 20px 28px;
            gap: 16px;
          }

          .spk-kn-heading { font-size: 1.2rem; }
          .spk-kn-title   { font-size: 1rem; }
          .spk-kn-desc    { font-size: 0.9rem; }
          .spk-kn-line    { max-width: 100%; }

          .spk-watermark {
            flex-direction: column;
            justify-content: flex-start;
            top: 16px;
            left: 8px;
          }

          .spk-watermark span {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: clamp(32px, 11vw, 60px);
            opacity: 0.45;
          }

          .spk-portrait-col {
            min-height: 300px;
            height: 300px;
          }
        }

        /* ============================================
           SMALL MOBILE: < 420px
        ============================================ */
        @media (max-width: 420px) {
          .spk-top  { padding: 28px 16px 22px; }
          .spk-left { padding: 24px 16px 28px; }

          .spk-portrait-col {
            height: 240px;
            min-height: 240px;
          }
        }
      `}</style>
    </section>
  );
}









// import { motion } from 'framer-motion';
// import { FadeIn } from '@/components/animations/FadeIn';
// import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
// import { ArrowRight } from 'lucide-react';

// const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

// const keynotes = [
//   {
//     title: 'Why Smart Ideas Fail',
//     description: 'How intelligent teams make expensive mistakes and how judgment prevents them.',
//   },
//   {
//     title: 'AI, Governance & The Human Cost of Getting It Wrong',
//     description: 'The financial and human consequences of rushed AI implementation.',
//   },
//   {
//     title: 'Pressure-Testing Innovation Before It Burns Resources',
//     description: 'Designing systems that survive contact with reality.',
//   },
//   {
//     title: 'Building the Wrong Thing Well Is Still Failure',
//     description: "Why execution doesn't save flawed strategy.",
//   },
// ];

// export function SpeakingSection() {
//   return (
//     <section id="speaking" className="spk-section">

//       {/* ══════════════════════════
//           TOP ZONE — solid dark, centered
//       ══════════════════════════ */}
//       <div className="spk-top">
//         <FadeIn>
//           <h2 className="spk-title">Speaking &amp; Media</h2>
//         </FadeIn>
//         <FadeIn delay={0.1}>
//           <p className="spk-sub">
//             I am a Strategic Advisor trusted inside some of the largest enterprises to guide
//             complex technology, product, and governance decisions.
//           </p>
//         </FadeIn>
//         <FadeIn delay={0.15}>
//           <p className="spk-sub">
//             I am known for asking the questions most people avoid, especially when the cost of
//             getting it wrong is high.
//           </p>
//         </FadeIn>
//       </div>

//       {/* thin full-width divider */}
//       <div className="spk-divider" />

//       {/* ══════════════════════════
//           BOTTOM ZONE — bg image, full-bleed grid
//       ══════════════════════════ */}
//       <div className="spk-bottom">

//         {/* Full-bleed bg image + overlay */}
//         <div className="spk-bg" aria-hidden="true">
//           <img src="/images/updated-5.png" alt="" className="spk-bg-img" />
//           <div className="spk-bg-overlay" />
//         </div>

//         {/* ── Watermark inside bottom zone — sits on bg image, left side ── */}
//         <div className="spk-watermark" aria-hidden="true">
//           <span>Speaking &amp;</span>
//           <span>Media</span>
//         </div>

//         {/* 
//           TRUE full-width grid — NO max-width, NO shell container
//           Left col: keynotes with left-padding to indent from edge
//           Right col: portrait that bleeds to right edge
//         */}
//         <div className="spk-grid">

//           {/* LEFT: Keynotes indented from left */}
//           <div className="spk-left">
//             <FadeIn>
//               <h3 className="spk-kn-heading">Signature Keynotes</h3>
//             </FadeIn>

//             <StaggerContainer staggerDelay={0.09} className="spk-kn-list">
//               {keynotes.map((k, i) => (
//                 <StaggerItem key={i}>
//                   <div className="spk-kn-item">
//                     <h4 className="spk-kn-title">{k.title}</h4>
//                     <p className="spk-kn-desc">{k.description}</p>
//                     <div className="spk-kn-line" />
//                   </div>
//                 </StaggerItem>
//               ))}
//             </StaggerContainer>

//             <FadeIn delay={0.38}>
//               <motion.a
//                 href="#contact"
//                 className="spk-btn"
//                 whileHover={{ scale: 1.03, backgroundColor: '#b03520' }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ duration: 0.15 }}
//               >
//                 Invite Me to Speak
//                 <ArrowRight size={14} />
//               </motion.a>
//             </FadeIn>
//           </div>

//           {/* RIGHT: Portrait — fills column, bleeds to right edge, NO border/card */}
//           <motion.div
//             className="spk-portrait-col"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
//           >
//             <img
//               src="/images/hero-bg.png"
//               alt="Robert Vandervoort"
//               className="spk-portrait"
//             />
//             <div className="spk-portrait-fade" />
//           </motion.div>

//         </div>
//       </div>

//       <style>{`
//         /* ============================================
//            SECTION — dark maroon base
//         ============================================ */
//         .spk-section {
//           position: relative;
//           overflow: hidden;
//           background: radial-gradient(
//             ellipse 75% 55% at 50% 0%,
//             #1e0808 0%,
//             #110303 55%,
//             #0a0101 100%
//           );
//         }

//         /* ── Watermark: vertical text, left side — fully visible both lines ── */
//         .spk-watermark {
//           position: absolute;
//           left: 0;
//           top: 0;
//           bottom: 0;
//           z-index: 1;
//           pointer-events: none;
//           user-select: none;
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           gap: 4px;
//         }

//         .spk-watermark span {
//           display: block;
//           font-size: clamp(40px, 8vw, 115px);
//           font-weight: 900;
//           color: #8a1a1a;
//           opacity: 0.55;
//           letter-spacing: -0.02em;
//           line-height: 1;
//           white-space: nowrap;
//           writing-mode: vertical-rl;
//           transform: rotate(180deg);
//         }

//         /* ============================================
//            TOP ZONE
//         ============================================ */
//         .spk-top {
//           position: relative;
//           z-index: 2;
//           text-align: center;
//           padding: 60px 24px 50px;
//         }

//         .spk-title {
//           font-size: clamp(26px, 3vw, 40px);
//           font-weight: 800;
//           color: #ffffff;
//           line-height: 1.1;
//           letter-spacing: -0.02em;
//           margin: 0 0 18px;
//         }

//         .spk-sub {
//           font-size: clamp(13px, 1.1vw, 15px);
//           color: #c0aaaa;
//           line-height: 1.75;
//           margin: 0 auto 10px;
//           max-width: 620px;
//         }

//         /* Full-width thin divider */
//         .spk-divider {
//           position: relative;
//           z-index: 2;
//           width: 100%;
//           height: 1px;
//           background: rgba(255, 255, 255, 0.07);
//         }

//         /* ============================================
//            BOTTOM ZONE
//         ============================================ */
//         .spk-bottom {
//           position: relative;
//           overflow: hidden;
//         }

//         .spk-bg {
//           position: absolute;
//           inset: 0;
//           z-index: 0;
//         }

//         .spk-bg-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center center;
//           display: block;
//         }

//         /* Uniform overlay — no left/right shade difference */
//         .spk-bg-overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(8, 1, 1, 0.78);
//         }

//         /* Full-bleed grid — tall */
//         .spk-grid {
//           position: relative;
//           z-index: 2;
//           display: grid;
//           grid-template-columns: 48% 52%;
//           min-height: 620px;
//         }

//         /* ── LEFT column — text pushed well past watermark toward portrait ── */
//         .spk-left {
//           padding: 52px 0px 60px 300px;
//           display: flex;
//           flex-direction: column;
//           gap: 22px;
//         }

//         .spk-kn-heading {
//           font-size: clamp(17px, 1.7vw, 24px);
//           font-weight: 700;
//           color: #ffffff;
//           margin: 0;
//           letter-spacing: -0.01em;
//         }

//         .spk-kn-list {
//           display: flex;
//           flex-direction: column;
//           gap: 0;
//         }

//         .spk-kn-item {
//           padding-top: 14px;
//         }

//         .spk-kn-title {
//           font-size: clamp(13px, 1.05vw, 15.5px);
//           font-weight: 700;
//           color: #ffffff;
//           margin: 0 0 4px;
//           line-height: 1.3;
//         }

//         .spk-kn-desc {
//           font-size: clamp(11.5px, 0.92vw, 13.5px);
//           color: #b89090;
//           margin: 0;
//           line-height: 1.6;
//         }

//         /* Accent divider — #972b1c */
//         .spk-kn-line {
//           margin-top: 12px;
//           height: 1px;
//           max-width: 420px;
//           background: #972b1c;
//         }

//         /* CTA Button */
//         .spk-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 11px 20px;
//           background: #972b1c;
//           color: #ffffff;
//           font-size: 0.9rem;
//           font-weight: 600;
//           border-radius: 4px;
//           text-decoration: none;
//           cursor: pointer;
//           width: fit-content;
//           margin-top: 6px;
//         }

//         /* ── RIGHT column — portrait ── */
//         .spk-portrait-col {
//           position: relative;
//           overflow: hidden;
//           background: transparent;
//         }

//         .spk-portrait {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//           object-position: center top;
//           display: block;
//           mask-image: linear-gradient(
//             to bottom,
//             black 55%,
//             rgba(0, 0, 0, 0.6) 80%,
//             transparent 100%
//           );
//           -webkit-mask-image: linear-gradient(
//             to bottom,
//             black 55%,
//             rgba(0, 0, 0, 0.6) 80%,
//             transparent 100%
//           );
//         }

//         /* Left-edge fade — removed to eliminate border between text and portrait */
//         .spk-portrait-fade {
//           display: none;
//         }

//         /* ============================================
//            TABLET: 768px – 1023px
//         ============================================ */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           .spk-grid {
//             grid-template-columns: 58% 42%;
//             min-height: 500px;
//           }

//           .spk-left {
//             padding: 40px 0px 48px 110px;
//           }

//           .spk-kn-title { font-size: 0.9rem; }
//           .spk-kn-desc  { font-size: 0.82rem; }
//         }

//         /* ============================================
//            MOBILE: < 768px — single column, portrait below
//         ============================================ */
//         @media (max-width: 767px) {
//           .spk-top {
//             padding: 36px 20px 28px;
//           }

//           .spk-sub {
//             font-size: 0.875rem;
//           }

//           .spk-grid {
//             grid-template-columns: 1fr;
//             min-height: auto;
//           }

//           .spk-left {
//             padding: 32px 20px 28px;
//             gap: 16px;
//           }

//           .spk-kn-heading { font-size: 1.1rem; }
//           .spk-kn-title   { font-size: 0.95rem; }
//           .spk-kn-desc    { font-size: 0.85rem; }
//           .spk-kn-line    { max-width: 100%; }

//           .spk-portrait-col {
//             min-height: 300px;
//             height: 300px;
//           }

//           .spk-watermark {
//             flex-direction: column;
//             justify-content: flex-start;
//             top: 16px;
//             left: 8px;
//           }

//           .spk-watermark span {
//             writing-mode: horizontal-tb;
//             transform: none;
//             font-size: clamp(32px, 11vw, 60px);
//             opacity: 0.35;
//           }
//         }

//         /* ============================================
//            SMALL MOBILE: < 420px
//         ============================================ */
//         @media (max-width: 420px) {
//           .spk-top    { padding: 28px 16px 22px; }
//           .spk-left   { padding: 24px 16px 28px; }

//           .spk-portrait-col {
//             height: 240px;
//             min-height: 240px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }