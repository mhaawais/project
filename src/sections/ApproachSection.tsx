import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

// const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const approaches = [
  {
    title: 'Truth Over Comfort',
    description: 'Honest questions now beat painful consequences later.',
  },
  {
    title: 'Judgment Beats Genius',
    description: 'Smart ideas fail all the time without discernment.',
  },
  {
    title: 'Human First — Always',
    description: 'People matter more than trends, tools, or ego.',
  },
  {
    title: 'Integrity in Action',
    description: "If it's not worth doing, I'll say so.",
  },
  {
    title: 'Pressure-Test Everything',
    description: "If your idea survives scrutiny, it's worth building.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="approach-section">

      {/* ── "approach" watermark — bottom right ── */}
      <div className="approach-watermark" aria-hidden="true">
        <span>approach</span>
      </div>

      {/* ── Main content grid ── */}
      <div className="approach-inner">

        {/* LEFT: real image panel */}
        <FadeIn direction="left">
          <div className="approach-img-wrap">
            <img
              src="/images/updated-4.png"
              alt="Team meeting"
              className="approach-img"
            />
          </div>
        </FadeIn>

        {/* RIGHT: heading + approach items */}
        <div className="approach-content">

          {/* Heading: "My Approach" */}
          <FadeIn delay={0.1}>
            <h2 className="approach-h2">
              My <span style={{ color: '#d84a35' }}>Approach</span>
            </h2>
          </FadeIn>

          {/* Approach items */}
          <StaggerContainer staggerDelay={0.08} className="approach-items">
            {approaches.map((item, i) => (
              <StaggerItem key={i}>
                <div className="approach-item">
                  <h3 className="approach-item-title">{item.title}</h3>
                  <p className="approach-item-desc">{item.description}</p>
                  {/* Divider line below each item except last */}
                  {i < approaches.length - 1 && (
                    <div className="approach-item-divider" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>

      <style>{`
        /* =============================================
           SECTION — solid dark maroon bg
        ============================================= */
        .approach-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(
            ellipse 65% 80% at 15% 50%,
            #321414 0%,
            #1e0a0a 40%,
            #110303 70%,
            #0a0101 100%
          );
          padding: 64px 24px;
        }

        /* ── "approach" watermark — bottom right ── */
        .approach-watermark {
          position: absolute;
          bottom: -10px;
          right: -15px;
          z-index: 1;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .approach-watermark span {
          display: block;
          font-size: clamp(80px, 13vw, 180px);
          font-weight: 900;
          color: white;
          opacity: 0.05;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        /* ── Inner grid: image left, content right ── */
        .approach-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 40% 1fr;
          gap: 72px;
          align-items: center;
        }

        /* ── Image panel ── */
        .approach-img-wrap {
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          /* Force taller image to match screenshot height */
          aspect-ratio: 3 / 4;
        }

        .approach-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center center;
          border-radius: 12px;
        }

        /* ── Content ── */
        .approach-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* ── Heading ── */
        .approach-h2 {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* ── Items container ── */
        .approach-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Each approach item ── */
        .approach-item {
          padding: 16px 0;
        }

        .approach-item-title {
          font-size: clamp(14px, 1.25vw, 17px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }

        .approach-item-desc {
          font-size: clamp(12px, 1vw, 14px);
          color: #c0a0a0;
          margin: 0;
          line-height: 1.6;
        }

        /* Thin divider line between items */
        .approach-item-divider {
          margin-top: 16px;
          height: 1px;
          background: #d84a35;
        }

        /* =============================================
           TABLET: 768px – 1023px
        ============================================= */
        @media (min-width: 768px) and (max-width: 1023px) {
          .approach-inner {
            grid-template-columns: 44% 1fr;
            gap: 40px;
          }

          .approach-section {
            padding: 52px 20px;
          }

          .approach-item-title {
            font-size: 0.95rem;
          }

          .approach-item-desc {
            font-size: 0.85rem;
          }
        }

        /* =============================================
           MOBILE: < 768px — stack vertically
        ============================================= */
        @media (max-width: 767px) {
          .approach-section {
            padding: 40px 20px 48px;
          }

          .approach-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          /* Image: natural width, centered, keep aspect ratio */
          .approach-img-wrap {
            max-width: 480px;
            margin: 0 auto;
            aspect-ratio: 4 / 3;
          }

          .approach-h2 {
            font-size: clamp(24px, 6vw, 30px);
          }

          .approach-item-title {
            font-size: 1rem;
          }

          .approach-item-desc {
            font-size: 0.875rem;
          }

          .approach-watermark span {
            font-size: clamp(60px, 18vw, 110px);
          }
        }

        /* =============================================
           SMALL MOBILE: < 420px
        ============================================= */
        @media (max-width: 420px) {
          .approach-section {
            padding: 32px 16px 40px;
          }

          .approach-img-wrap {
            max-width: 100%;
          }

          .approach-content {
            gap: 20px;
          }

          .approach-item-title {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}














// import { FadeIn } from '@/components/animations/FadeIn';
// import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

// // const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

// const approaches = [
//   {
//     title: 'Truth Over Comfort',
//     description: 'Honest questions now beat painful consequences later.',
//   },
//   {
//     title: 'Judgment Beats Genius',
//     description: 'Smart ideas fail all the time without discernment.',
//   },
//   {
//     title: 'Human First — Always',
//     description: 'People matter more than trends, tools, or ego.',
//   },
//   {
//     title: 'Integrity in Action',
//     description: "If it's not worth doing, I'll say so.",
//   },
//   {
//     title: 'Pressure-Test Everything',
//     description: "If your idea survives scrutiny, it's worth building.",
//   },
// ];

// export function ApproachSection() {
//   return (
//     <section id="approach" className="approach-section">

//       {/* ── "approach" watermark — bottom right ── */}
//       <div className="approach-watermark" aria-hidden="true">
//         <span>approach</span>
//       </div>

//       {/* ── Main content grid ── */}
//       <div className="approach-inner">

//         {/* LEFT: real image panel */}
//         <FadeIn direction="left">
//           <div className="approach-img-wrap">
//             <img
//               src="/images/updated-4.png"
//               alt="Team meeting"
//               className="approach-img"
//             />
//           </div>
//         </FadeIn>

//         {/* RIGHT: heading + approach items */}
//         <div className="approach-content">

//           {/* Heading: "My Approach" */}
//           <FadeIn delay={0.1}>
//             <h2 className="approach-h2">
//               My <span style={{ color: '#E85A2B' }}>Approach</span>
//             </h2>
//           </FadeIn>

//           {/* Approach items */}
//           <StaggerContainer staggerDelay={0.08} className="approach-items">
//             {approaches.map((item, i) => (
//               <StaggerItem key={i}>
//                 <div className="approach-item">
//                   <h3 className="approach-item-title">{item.title}</h3>
//                   <p className="approach-item-desc">{item.description}</p>
//                   {/* Divider line below each item except last */}
//                   {i < approaches.length - 1 && (
//                     <div className="approach-item-divider" />
//                   )}
//                 </div>
//               </StaggerItem>
//             ))}
//           </StaggerContainer>

//         </div>
//       </div>

//       <style>{`
//         /* =============================================
//            SECTION — solid dark maroon bg
//         ============================================= */
//         .approach-section {
//           position: relative;
//           overflow: hidden;
//           background: radial-gradient(
//             ellipse 65% 80% at 15% 50%,
//             #321414 0%,
//             #1e0a0a 40%,
//             #110303 70%,
//             #0a0101 100%
//           );
//           padding: 64px 24px;
//         }

//         /* ── "approach" watermark — bottom right ── */
//         .approach-watermark {
//           position: absolute;
//           bottom: -10px;
//           right: -15px;
//           z-index: 1;
//           pointer-events: none;
//           user-select: none;
//           line-height: 1;
//         }

//         .approach-watermark span {
//           display: block;
//           font-size: clamp(80px, 13vw, 180px);
//           font-weight: 900;
//           color: white;
//           opacity: 0.05;
//           letter-spacing: -0.02em;
//           line-height: 1;
//         }

//         /* ── Inner grid: image left, content right ── */
//         .approach-inner {
//           position: relative;
//           z-index: 2;
//           max-width: 1100px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 42% 1fr;
//           gap: 64px;
//           align-items: center;
//         }

//         /* ── Image panel ── */
//         .approach-img-wrap {
//           border-radius: 12px;
//           overflow: hidden;
//           /* Natural aspect ratio — image not forced to stretch */
//           width: 100%;
//         }

//         .approach-img {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//           border-radius: 12px;
//         }

//         /* ── Content ── */
//         .approach-content {
//           display: flex;
//           flex-direction: column;
//           gap: 24px;
//         }

//         /* ── Heading ── */
//         .approach-h2 {
//           font-size: clamp(24px, 2.6vw, 36px);
//           font-weight: 800;
//           color: #ffffff;
//           line-height: 1.15;
//           letter-spacing: -0.02em;
//           margin: 0;
//         }

//         /* ── Items container ── */
//         .approach-items {
//           display: flex;
//           flex-direction: column;
//           gap: 0;
//         }

//         /* ── Each approach item ── */
//         .approach-item {
//           padding: 14px 0;
//         }

//         .approach-item-title {
//           font-size: clamp(13px, 1.1vw, 15px);
//           font-weight: 700;
//           color: #ffffff;
//           margin: 0 0 5px 0;
//           letter-spacing: 0;
//         }

//         .approach-item-desc {
//           font-size: clamp(11px, 0.9vw, 13px);
//           color: #c0a0a0;
//           margin: 0;
//           line-height: 1.55;
//         }

//         /* Thin divider line between items */
//         .approach-item-divider {
//           margin-top: 14px;
//           height: 1px;
//           background: rgba(255, 255, 255, 0.08);
//         }

//         /* =============================================
//            TABLET: 768px – 1023px
//         ============================================= */
//         @media (min-width: 768px) and (max-width: 1023px) {
//           .approach-inner {
//             grid-template-columns: 44% 1fr;
//             gap: 40px;
//           }

//           .approach-section {
//             padding: 52px 20px;
//           }

//           .approach-item-title {
//             font-size: 0.875rem;
//           }

//           .approach-item-desc {
//             font-size: 0.8rem;
//           }
//         }

//         /* =============================================
//            MOBILE: < 768px — stack vertically
//         ============================================= */
//         @media (max-width: 767px) {
//           .approach-section {
//             padding: 40px 20px 48px;
//           }

//           .approach-inner {
//             grid-template-columns: 1fr;
//             gap: 32px;
//           }

//           /* Image: natural width, centered */
//           .approach-img-wrap {
//             max-width: 480px;
//             margin: 0 auto;
//           }

//           .approach-h2 {
//             font-size: clamp(22px, 6vw, 28px);
//           }

//           .approach-item-title {
//             font-size: 0.9rem;
//           }

//           .approach-item-desc {
//             font-size: 0.82rem;
//           }

//           .approach-watermark span {
//             font-size: clamp(60px, 18vw, 110px);
//           }
//         }

//         /* =============================================
//            SMALL MOBILE: < 420px
//         ============================================= */
//         @media (max-width: 420px) {
//           .approach-section {
//             padding: 32px 16px 40px;
//           }

//           .approach-img-wrap {
//             max-width: 100%;
//           }

//           .approach-content {
//             gap: 18px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }