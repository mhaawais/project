import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="rv-contact">
      {/* Background layers */}
      <div className="rv-contact-bg" aria-hidden="true" />
      <div className="rv-contact-overlay" aria-hidden="true" />

      {/* Watermark (same position on all screens, slightly lower) */}
      <div className="rv-contact-watermark" aria-hidden="true">
        <span>Right Call</span>
      </div>

      <div className="rv-contact-inner">
        <div className="rv-contact-grid">
          {/* Left Content */}
          <div className="rv-contact-left">
            <FadeIn>
              <h2 className="rv-contact-title">
                <span className="rv-contact-accent">Ready</span> to Make the{" "}
                <br />
                Right Call?
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="rv-contact-sub">
                If you are about to commit serious capital, reputation, or
                talent to a major decision and want clarity before consequences,
                send me a message.
              </p>
            </FadeIn>
          </div>

          {/* Right Form */}
          <FadeIn delay={0.2} direction="right">
            <div className="rv-contact-card">
              <h3 className="rv-contact-card-title">Get In Touch</h3>

              <form onSubmit={handleSubmit} className="rv-contact-form">
                {/* Name Row */}
                <div className="rv-contact-row">
                  <div>
                    <label className="rv-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      className="rv-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="rv-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      className="rv-input"
                      required
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="rv-contact-row">
                  <div>
                    <label className="rv-label">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter E-mail"
                      className="rv-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="rv-label">Mobile No.</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile No."
                      className="rv-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="rv-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Message"
                    rows={4}
                    className="rv-textarea"
                    required
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="rv-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <ArrowRight className="rv-btn-icon" />
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        /* =========================================================
           CONTACT SECTION — LIGHTER BACKGROUND LIKE SCREENSHOT
        ========================================================= */
        .rv-contact {
          position: relative;
          overflow: hidden;
          padding: 90px 0;
          background: radial-gradient(
            ellipse 90% 70% at 50% 0%,
            #3a1010 0%,
            #240808 45%,
            #140404 100%
          );
        }

        /* Lighter "cinematic" shading in the bg (matches screenshot feel) */
        .rv-contact-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 20% 45%, rgba(151, 43, 28, 0.22) 0%, rgba(0, 0, 0, 0) 60%),
            radial-gradient(ellipse 60% 50% at 80% 35%, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0) 65%),
            radial-gradient(ellipse 80% 60% at 55% 70%, rgba(151, 43, 28, 0.12) 0%, rgba(0, 0, 0, 0) 65%);
          filter: saturate(1.05);
        }

        /* Softer overlay so the bg stays lighter like screenshot */
        .rv-contact-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: rgba(8, 1, 1, 0.45);
        }

        .rv-contact-inner {
          position: relative;
          z-index: 2;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .rv-contact-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: start;
        }

        /* =========================================================
           WATERMARK — SAME POSITION ALL SCREENS, MOVED DOWN
        ========================================================= */
        .rv-contact-watermark {
          position: absolute;
          z-index: 5;
          left: 56px;
          top: 54%; /* moved slightly down */
          transform: translateY(-50%);
          pointer-events: none;
          user-select: none;
          opacity: 0.10; /* more visible like screenshot */
          white-space: nowrap;
        }

        .rv-contact-watermark span {
          font-weight: 900;
          letter-spacing: -0.03em;
          font-size: clamp(64px, 10vw, 150px);
          color: rgba(255, 255, 255, 0.55);
          text-shadow: 0 10px 40px rgba(0,0,0,0.28);
        }

        /* =========================================================
           LEFT CONTENT
        ========================================================= */
        .rv-contact-left {
          padding-left: 28px;
        }

        .rv-contact-title {
          margin: 0 0 14px;
          color: #ffffff;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.08;
          font-size: clamp(30px, 3.2vw, 44px);
        }

        .rv-contact-accent {
          color: #972b1c;
        }

        .rv-contact-sub {
          margin: 0;
          max-width: 460px;
          color: rgba(232, 220, 220, 0.9);
          line-height: 1.8;
          font-size: 15px;
        }

        /* =========================================================
           FORM CARD — DARK BUT "LIFTED" CONTRAST LIKE SCREENSHOT
        ========================================================= */
        .rv-contact-card {
          border-radius: 16px;
          padding: 26px 26px 24px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.09),
            rgba(255, 255, 255, 0.05)
          );
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.38);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .rv-contact-card-title {
          margin: 0 0 18px;
          color: #ffffff;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.01em;
        }

        .rv-contact-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .rv-contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .rv-label {
          display: block;
          margin: 0 0 8px;
          color: rgba(240, 230, 230, 0.85);
          font-size: 12px;
        }

        .rv-input,
        .rv-textarea {
          width: 100%;
          border-radius: 10px;
          padding: 12px 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.20); /* lighter input bg like screenshot */
          color: #ffffff;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .rv-input::placeholder,
        .rv-textarea::placeholder {
          color: rgba(240, 230, 230, 0.48);
        }

        .rv-input:focus,
        .rv-textarea:focus {
          border-color: rgba(151, 43, 28, 0.90);
          background: rgba(0, 0, 0, 0.26);
        }

        .rv-textarea {
          resize: none;
        }

        .rv-btn {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 10px;
          border: 1px solid rgba(151, 43, 28, 0.35);
          background: #972b1c;
          color: #ffffff;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .rv-btn:hover {
          background: #b03520;
        }

        .rv-btn-icon {
          width: 16px;
          height: 16px;
        }

        /* =========================================================
           TABLET
        ========================================================= */
        @media (max-width: 1023px) {
          .rv-contact {
            padding: 70px 0;
          }

          .rv-contact-grid {
            gap: 40px;
          }

          .rv-contact-watermark {
            left: 32px;
            top: 55%;
          }

          .rv-contact-left {
            padding-left: 20px;
          }
        }

        /* =========================================================
           MOBILE — STACK, WATERMARK STILL ANCHORED SAME WAY
        ========================================================= */
        @media (max-width: 767px) {
          .rv-contact {
            padding: 54px 0;
          }

          .rv-contact-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .rv-contact-watermark {
            left: 18px;
            top: 57%;
            opacity: 0.10;
          }

          .rv-contact-left {
            padding-left: 0;
          }

          .rv-contact-sub {
            max-width: 520px;
          }

          .rv-contact-row {
            grid-template-columns: 1fr;
          }

          .rv-btn {
            width: 100%;
          }

          @media (max-width: 767px) {
  .rv-contact-watermark {
    left: 14px;
    top: 62%;                 /* a bit lower so it’s not behind the title */
    opacity: 0.14;            /* slightly stronger so it’s visible */
    z-index: 5;
  }

  .rv-contact-watermark span {
    font-size: clamp(56px, 18vw, 92px); /* scales well on phones */
    color: rgba(255, 255, 255, 0.55);
  }
}
        }
      `}</style>
    </section>
  );
}
