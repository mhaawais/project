// import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { RiDoubleQuotesL } from 'react-icons/ri';

const testimonials = [
  {
    quote: "Robert naturally adds value to organizations and goes the extra mile without being asked. These qualities are invaluable.",
    name: 'Edward Shanahan',
    title: 'Sr. AI Solutions Engineer',
    avatar: '/images/avatar-edward.jpg',
  },
  {
    quote: "Robert brings quality in every interaction he has and delivers results. You truly do inspire.",
    name: 'Eugene Breen',
    title: 'Senior Customer Success Engineer',
    avatar: '/images/avatar-eugene.jpg',
  },
  {
    quote: "With Robert's cleverness we were always one step ahead. We achieved excellent results.",
    name: 'Mehmet Taluk',
    title: 'Consultant',
    avatar: '/images/avatar-mehmet.jpg',
  },
];

export function TestimonialsSection() {
  // const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="tst-section">
      <div className="tst-container">

        {/* ── Headline ── */}
        <FadeIn>
          <h2 className="tst-heading">
            Trusted Behind the Scenes of{' '}
            <span className="tst-accent">Fortune 100</span>{' '}
            and Global Enterprise Organizations
          </h2>
        </FadeIn>

        {/* ── Cards ── */}
        <StaggerContainer staggerDelay={0.15} className="tst-grid">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="tst-card"
                whileHover={{ y: -4, borderColor: '#972b1c' }}
                transition={{ duration: 0.25 }}
              >
                {/* React-icons double quote — matches screenshot */}
                <RiDoubleQuotesL className="tst-quote-icon" />

                {/* Quote text */}
                <p className="tst-quote-text">{t.quote}</p>

                {/* Thin divider */}
                <div className="tst-divider" />

                {/* Author row */}
                <div className="tst-author">
                  <div className="tst-avatar-wrap">
                    <img src={t.avatar} alt={t.name} className="tst-avatar" />
                  </div>
                  <div className="tst-author-info">
                    <span className="tst-author-name">{t.name},</span>{' '}
                    <span className="tst-author-title">{t.title}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Dot pagination ── */}
        {/* <div className="tst-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`tst-dot ${i === activeDot ? 'tst-dot--active' : ''}`}
              onClick={() => setActiveDot(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div> */}

      </div>

      <style>{`
        /* ── Section — rich deep red background matching screenshot ── */
        .tst-section {
          background: radial-gradient(
            ellipse 90% 60% at 50% 0%,
            #2a0606 0%,
            #1a0303 40%,
            #0e0101 100%
          );
          padding: 72px 0 60px;
        }

        .tst-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Heading ── */
        .tst-heading {
          text-align: center;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin: 0 auto 48px;
          max-width: 780px;
          letter-spacing: -0.02em;
        }

        .tst-accent {
          color: #c0392b;
        }

        /* ── Grid ── */
        .tst-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── Card — darker red tint ── */
        .tst-card {
          background: #1c0404;
          border: 1px solid rgba(150, 43, 28, 0.4);
          border-radius: 12px;
          padding: 28px 26px 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
          transition: border-color 0.25s;
        }

        /* ── RiDoubleQuotesL icon — red, large, matches screenshot ── */
        .tst-quote-icon {
          width: 36px;
          height: 36px;
          color: #c0392b;
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        /* ── Quote body ── */
        .tst-quote-text {
          font-size: clamp(13px, 1.05vw, 15px);
          color: #c8b0b0;
          line-height: 1.7;
          margin: 0 0 20px;
          flex: 1;
        }

        /* ── Thin red divider ── */
        .tst-divider {
          width: 100%;
          height: 1px;
          background: rgba(150, 43, 28, 0.4);
          margin-bottom: 16px;
        }

        /* ── Author row ── */
        .tst-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tst-avatar-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(150, 43, 28, 0.5);
        }

        .tst-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .tst-author-info {
          font-size: 13px;
          line-height: 1.4;
          color: #c8b0b0;
        }

        .tst-author-name {
          color: #ffffff;
          font-weight: 600;
        }

        .tst-author-title {
          color: #a08080;
          font-weight: 400;
        }

        /* ── Dot pagination ── */
        .tst-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 36px;
        }

        .tst-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4a1a1a;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, transform 0.2s;
        }

        .tst-dot--active {
          background: #c0392b;
          transform: scale(1.2);
        }

        /* ── Tablet ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .tst-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .tst-card {
            padding: 22px 18px 20px;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .tst-section {
            padding: 48px 0 44px;
          }
          .tst-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .tst-heading {
            font-size: 1.5rem;
            margin-bottom: 32px;
          }
          .tst-card {
            padding: 24px 20px 20px;
          }
          .tst-quote-text {
            font-size: 0.9rem;
          }
        }

        /* ── Small mobile ── */
        @media (max-width: 420px) {
          .tst-container {
            padding: 0 16px;
          }
          .tst-heading {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}