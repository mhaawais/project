import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const testimonials = [
  {
    quote: "My go-to person for complex technical challenges.",
    name: 'Gary Lu',
    title: 'Solutions Architect',
    avatar: '/images/avatar-gary.png',
  },
  {
    quote: "His high degree of technical knowledge and his tenacity to solve issues makes him a very valuable asset to any organization.",
    name: 'Jamie Salinas',
    title: 'Technical Support Manager',
    avatar: '/images/avatar-jamie.png',
  },
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

function getCardsPerView() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function QuoteIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29.6 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M18 4L17 5L15 5L14 6L13 6L13 8L12 9L12 14L13 15L19 15L19 10L18 9L17 9L16 8L16 7L17 6L18 6ZM9 4L8 5L6 5L4 7L4 15L10 15L10 9L8 9L7 8L7 7L8 6L9 6Z"
        fill="#8B1A10"
      />
    </svg>
  );
}

export function TestimonialsSection() {
  const [activePage, setActivePage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPages = Math.ceil(testimonials.length / cardsPerView);

  useEffect(() => {
    const update = () => {
      const cpv = getCardsPerView();
      setCardsPerView(cpv);
      // clamp activePage if needed
      setActivePage(prev => {
        const maxPage = Math.ceil(testimonials.length / cpv) - 1;
        return Math.min(prev, maxPage);
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActivePage(prev => (prev + 1) % totalPages);
    }, 5000);
  }, [totalPages]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [startAutoPlay]);

  const goTo = (idx: number) => {
    setActivePage(idx);
    startAutoPlay();
  };

  // Touch/swipe support
  const touchStartX = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goTo((activePage + 1) % totalPages);
      else goTo((activePage - 1 + totalPages) % totalPages);
    }
  };

  const visibleCards = testimonials.slice(
    activePage * cardsPerView,
    activePage * cardsPerView + cardsPerView
  );

  return (
    <section className="tst-section">
      <div className="tst-container">

        {/* ── Heading ── */}
        <FadeIn>
          <h2 className="tst-heading">
            Trusted Behind the Scenes of{' '}
            <span className="tst-accent">Fortune 100</span>{' '}
            and Global Enterprise Organizations
          </h2>
        </FadeIn>

        {/* ── Cards ── */}
        <div
          className="tst-track"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`page-${activePage}-${cardsPerView}`}
              className="tst-cards-row"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {visibleCards.map((t, i) => (
                <div key={`${activePage}-${i}`} className="tst-card">
                  {/* Figma-matched double quote SVG */}
                  <QuoteIcon size={60} />

                  {/* Quote */}
                  <p className="tst-quote-text">{t.quote}</p>

                  {/* Divider */}
                  <div className="tst-divider" />

                  {/* Author */}
                  <div className="tst-author">
                    <div className="tst-avatar-wrap">
                      <img src={t.avatar} alt={t.name} className="tst-avatar" />
                    </div>
                    <div className="tst-author-info">
                      <span className="tst-author-name">{t.name},</span>{' '}
                      <span className="tst-author-title">{t.title}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/*
                Ghost cards to fill the last page if fewer cards remain
                (keeps grid columns consistent so cards don't stretch)
              */}
              {visibleCards.length < cardsPerView &&
                Array.from({ length: cardsPerView - visibleCards.length }).map((_, i) => (
                  <div key={`ghost-${i}`} className="tst-card tst-card--ghost" aria-hidden="true" />
                ))
              }
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Dot pagination ── */}
        <div className="tst-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`tst-dot ${i === activePage ? 'tst-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`

        /* ══════════════════════════════════════════════════════════
           SECTION
        ══════════════════════════════════════════════════════════ */
        .tst-section {
          background:
            radial-gradient(
              ellipse 90% 60% at 50% 0%,
              #2e0707 20%,
              #1c0404 40%,
              #200707 100%
            );
          padding: 70px 0 58px;
        }

        .tst-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ══════════════════════════════════════════════════════════
           HEADING
        ══════════════════════════════════════════════════════════ */
        .tst-heading {
          text-align: center;
          font-size: clamp(20px, 2.4vw, 32px);
          font-weight: 800;
          color: #797878;
          line-height: 1.28;
          margin: 0 auto 48px;
          max-width: 720px;
          letter-spacing: -0.02em;
        }

        .tst-accent { color: #c0392b; }

        /* ══════════════════════════════════════════════════════════
           TRACK + CARDS ROW
        ══════════════════════════════════════════════════════════ */
        .tst-track {
          overflow: hidden;
          touch-action: pan-y;
        }

        .tst-cards-row {
          display: grid;
          /* Desktop: 3 columns */
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
        }

        /* ══════════════════════════════════════════════════════════
           CARD
           Figma: dark maroon #1c0404, red border, 12px radius
        ══════════════════════════════════════════════════════════ */
        .tst-card {
          background: #1c0404;
          border: 1px solid rgba(148, 40, 24, 0.42);
          border-radius: 12px;
          padding: 26px 24px 22px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          min-height: 240px;
          transition: border-color 0.22s, transform 0.22s;
        }
        .tst-card:hover {
          border-color: rgba(148, 40, 24, 0.75);
          transform: translateY(-3px);
        }

        /* Ghost card — invisible placeholder, keeps grid shape */
        .tst-card--ghost {
          background: transparent;
          border-color: transparent;
          pointer-events: none;
        }
        .tst-card--ghost:hover {
          transform: none;
          border-color: transparent;
        }

        /* ── Quote text ── */
        .tst-quote-text {
          font-size: 0.855rem;
          color: #c8b0b0;
          line-height: 1.72;
          margin: 0 0 18px;
          flex: 1;
        }

        /* ── Divider ── */
        .tst-divider {
          width: 100%;
          height: 1px;
          background: #707070;
          margin-bottom: 14px;
          flex-shrink: 0;
        }

        /* ── Author ── */
        .tst-author {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .tst-avatar-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: white;
          background: #2a0808;
        }

        .tst-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .tst-author-info {
          font-size: 0.78rem;
          line-height: 1.42;
          color: #c8b0b0;
        }

        .tst-author-name  { color: #ffffff; font-weight: 600; }
        .tst-author-title { color: #e0c0c0; font-weight: 400; }

        /* ══════════════════════════════════════════════════════════
           DOTS
        ══════════════════════════════════════════════════════════ */
        .tst-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          margin-top: 30px;
        }

        .tst-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3a1414;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, width 0.25s, border-radius 0.25s;
          flex-shrink: 0;
        }

        /* Active: stretches to a pill — matches Figma */
        .tst-dot--active {
          background: #c0392b;
          width: 20px;
          border-radius: 4px;
        }

        /* ══════════════════════════════════════════════════════════
           TABLET: 640–1023px — 2 columns
        ══════════════════════════════════════════════════════════ */
        @media (min-width: 640px) and (max-width: 1023px) {
          .tst-cards-row  { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .tst-section    { padding: 56px 0 46px; }
          .tst-heading    { font-size: clamp(18px, 3vw, 26px); margin-bottom: 38px; }
          .tst-card       { padding: 22px 20px 20px; min-height: 220px; }
          .tst-quote-text { font-size: 0.84rem; }
        }

        /* ══════════════════════════════════════════════════════════
           MOBILE: <640px — 1 column, swipeable
        ══════════════════════════════════════════════════════════ */
        @media (max-width: 639px) {
          .tst-section    { padding: 44px 0 38px; }
          .tst-container  { padding: 0 16px; }
          .tst-heading    { font-size: clamp(17px, 5.5vw, 22px); margin-bottom: 28px; }
          .tst-cards-row  { grid-template-columns: 1fr; gap: 0; }
          .tst-card       {
            padding: 22px 20px 20px;
            min-height: 200px;
            border-radius: 10px;
          }
          .tst-quote-text { font-size: 0.875rem; }
          .tst-dots       { margin-top: 22px; gap: 6px; }
          .tst-dot        { width: 7px; height: 7px; }
          .tst-dot--active { width: 18px; }
        }
      `}</style>
    </section>
  );
}