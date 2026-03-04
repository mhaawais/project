import { motion, type Variants } from "framer-motion";

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

// ─── Buttons ────────────────────────────────────────────────────────────────
function PrimaryBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-[7px] px-5 py-[10px] bg-[#9b2214] text-white text-[0.82rem] font-semibold rounded border border-[#9b2214] no-underline tracking-[0.01em] whitespace-nowrap transition-colors duration-200 hover:bg-[#7a1a10] hover:border-[#7a1a10]"
    >
      {children} <span className="text-[0.78rem]">→</span>
    </a>
  );
}

function SecondaryBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-[7px] px-5 py-[10px] bg-transparent text-white text-[0.82rem] font-semibold rounded border border-white/30 no-underline tracking-[0.01em] whitespace-nowrap transition-all duration-200 hover:border-white/55 hover:bg-white/[0.05]"
    >
      {children} <span className="text-[0.78rem]">→</span>
    </a>
  );
}

// ────────────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };


  return (
    <>
      {/* minimal style only for responsive gradient override */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-bg {
            background: radial-gradient(
              ellipse 110% 52% at 50% 60%,
              #5c0b0b 0%, #340606 36%, #1a0303 62%, #100101 100%
            ) !important;
          }
        }
        /* Desktop-only portrait mask — keeps image fully visible on mobile */
        @media (min-width: 1024px) {
          .hero-portrait-img {
            mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, black 20%, black 100%),
                        linear-gradient(to bottom, black 28%, rgba(0,0,0,0.4) 58%, transparent 82%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, black 20%, black 100%),
                                linear-gradient(to bottom, black 28%, rgba(0,0,0,0.4) 58%, transparent 82%);
            mask-composite: intersect;
            -webkit-mask-composite: source-in;
          }
        }
      `}</style>

      <section
        className="hero-bg relative overflow-hidden flex flex-col lg:block lg:min-h-screen"
        style={{
          /* Peak #9a1414 at 80% x 36% — bright crimson behind face,
             dark near-black (#0a0101) at edges & top corners            */
          background:
            "radial-gradient(ellipse 62% 65% at 80% 36%, #9a1414 0%, #650c0c 22%, #280404 48%, #0a0101 100%)",
        }}
      >
        {/* ── Portrait ────────────────────────────────────────────────────── */}
        {/*   Mobile: in-flow below content  |  Desktop lg+: absolute right   */}
        <motion.div
          className="
            order-2
            relative w-full h-[320px]
            sm:h-[460px]
            lg:order-none lg:absolute lg:top-0 lg:right-0 lg:w-[44%] lg:h-full lg:z-[2]
            pointer-events-none
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {/* Desktop-only face glow overlay — hidden on mobile */}
          <div
            className="hidden lg:block absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 50% 30%, rgba(110,16,6,0.32) 0%, transparent 62%)",
            }}
          />

          {/* Portrait image — mask applied lg+ only via .hero-portrait-img CSS */}
          <img
            src="/images/hero-bg.png"
            alt="Robert Vandervoort – Strategic Advisor"
            className="hero-portrait-img absolute top-0 right-18 w-full h-full object-contain object-top lg:object-cover z-[1]"
          />

          {/* Mobile-only: very soft bottom fade inside portrait so it blends
              into the next section without a hard line. Height is small enough
              (25%) that the face/body stays fully visible.                     */}
          <div
            className="lg:hidden absolute bottom-0 left-0 right-0 h-[30%] z-[2] pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #1b0404 0%, rgba(27,4,4,0.55) 45%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* ── Watermark "Vandervoort" — RIGHT edge, upper portrait zone ─── */}
        {/* right:-8px pins it to the right; content-wrap (z-4) hides "Vander" */}
        <div
          className="hidden lg:block absolute right-[-8px] z-[3] pointer-events-none select-none"
          style={{ top: "40%", transform: "translateY(-50%)" }}
        >
          <span
            className="block font-black text-white leading-none tracking-[-0.03em] whitespace-nowrap"
            style={{ fontSize: "clamp(42px, 6.5vw, 138px)", opacity: 0.02 }}
          >
            voort
          </span>
        </div>

        {/* ── Watermark "Robert" — RIGHT side, below Vandervoort ──────── */}
        {/* Positioned right:12% so it sits inside the portrait area       */}
        <div
          className="hidden lg:block absolute right-[26%] z-[3] pointer-events-none select-none"
          style={{ top: "calc(40% + clamp(36px, 5.5vw, 80px))" }}
        >
          <span
            className="block font-black text-white leading-none tracking-[-0.03em] whitespace-nowrap"
            style={{ fontSize: "clamp(48px, 7.5vw, 108px)", opacity: 0.01 }}
          >
            obert
          </span>
        </div>

        {/* ── Thin vertical decorative line ──────────────────────────────── */}
        {/* Midpoint between left screen edge (0%) and portrait left (~56%) */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 left-[28%] w-px z-[1] pointer-events-none"
          style={{ background: "rgba(255,255,255,0.055)" }}
        />

        {/* ── Content ─────────────────────────────────────────────────────── */}
        <div className="order-1 relative z-[4] max-w-7xl mx-auto w-full px-6 lg:px-8 lg:min-h-screen flex items-center">
          <motion.div
            className="
              w-full flex flex-col gap-[18px]
              pt-24 pb-8
              lg:max-w-[46%] lg:pt-20 lg:pb-16
            "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {/* Tag */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="w-[7px] h-[7px] bg-[#c03020] rounded-[2px] flex-shrink-0" />
              <span className="text-[#d0bbbb] text-[0.8rem] font-medium tracking-[0.02em]">
                Strategic Advisor
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="m-0 text-white font-extrabold leading-[1.25] tracking-[-0.022em]"
              style={{ fontSize: "clamp(22px, 2.2vw, 34px)" }}
            >
              Who Leaders Call When the Stakes Are High and Getting It Wrong{" "}
              <mark
                className="bg-[#9b2214] text-white rounded-[3px] px-[6px] pt-[1px] pb-[3px]"
                style={
                  {
                    WebkitBoxDecorationBreak: "clone",
                    boxDecorationBreak: "clone",
                  } as React.CSSProperties
                }
              >
                Costs Millions
              </mark>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="m-0 text-[#c8b4b4] text-[0.84rem] leading-[1.72]"
            >
              I pressure-test ideas before you waste people, capital, or
              credibility.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-[10px]"
            >
              <PrimaryBtn href="#contact">Book Me to Speak</PrimaryBtn>
              <SecondaryBtn href="#services">Get No-BS Consulting</SecondaryBtn>
            </motion.div>

            {/* Trust line */}
            <motion.p
              variants={fadeUp}
              className="m-0 text-[#8a7272] text-[0.78rem] leading-[1.65] max-w-[390px] lg:max-w-[390px]"
            >
              Trusted inside Fortune 100 and global enterprise environments
              <br className="hidden sm:block" />
              {" "}for high-stakes AI, product, and governance decisions.
            </motion.p>
          </motion.div>
        </div>

        {/* ── Desktop bottom blend (lg+ only) ────────────────────────────── */}
        {/* Hidden on mobile — portrait is in-flow so absolute fade would   */}
        {/* cover it. Mobile blend is handled inside the portrait-wrap above */}
        <div
          className="hidden lg:block absolute bottom-0 left-0 right-0 h-[200px] z-[5] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #1b0404 0%, rgba(19,2,2,0.7) 45%, rgba(10,1,1,0.3) 75%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
