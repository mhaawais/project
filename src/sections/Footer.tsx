import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="ftr-footer">
      <div className="ftr-container">

        {/* ── Logo ── */}
        <motion.div
          className="ftr-logo-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/Frame-header.png" alt="Robert Vandervoort Logo" className="ftr-logo" />
        </motion.div>

        {/* ── Contact ── */}
        <motion.div
          className="ftr-contact"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="ftr-contact-label">Contact:</span>
          <a href="mailto:robert@vdvlabs.com" className="ftr-contact-link">
            <Mail size={15} />
            robert@vdvlabs.com
          </a>
        </motion.div>

        {/* ── Tags ── */}
        <motion.div
          className="ftr-tags"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>AI</span>
          <span className="ftr-dot">•</span>
          <span>Governance</span>
          <span className="ftr-dot">•</span>
          <span>Systems Thinking</span>
          <span className="ftr-dot">•</span>
          <span>Enterprise Strategy</span>
        </motion.div>

        {/* ── Divider ── */}
        <div className="ftr-divider" />

        {/* ── Bottom row ── */}
        <motion.div
          className="ftr-bottom"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="ftr-copy">© 2026 VDV Labs. All rights reserved.</p>

          <div className="ftr-social">
            <span className="ftr-social-label">Follow Me:</span>
            <div className="ftr-social-icons">
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ftr-social-link" aria-label="Twitter/X">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ftr-social-link" aria-label="LinkedIn">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        /* ── Footer: deep dark red, brighter at top ── */
        .ftr-footer {
          background: radial-gradient(
            ellipse 100% 200% at 50% 0%,
            #2a0404 0%,
            #180101 40%,
            #0a0000 100%
          );
          border-top: 1px solid rgba(150, 43, 28, 0.25);
          padding: 48px 0 32px;
        }

        .ftr-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* ── Logo ── */
        .ftr-logo-wrap {
          margin-bottom: 20px;
        }

        .ftr-logo {
          height: 52px;
          width: auto;
          display: block;
        }

        /* ── Contact row ── */
        .ftr-contact {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .ftr-contact-label {
          font-size: 13px;
          color: #a08080;
        }

        .ftr-contact-link {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          color: #c8b0b0;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ftr-contact-link:hover {
          color: #c0392b;
        }

        /* ── Tags ── */
        .ftr-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 6px 10px;
          font-size: clamp(13px, 1.1vw, 15px);
          color: #c8b0b0;
          margin-bottom: 28px;
          letter-spacing: 0.01em;
        }

        .ftr-dot {
          color: #7a3030;
          font-size: 12px;
        }

        /* ── Thin divider ── */
        .ftr-divider {
          width: 100%;
          max-width: 500px;
          height: 1px;
          background: rgba(150, 43, 28, 0.22);
          margin-bottom: 20px;
        }

        /* ── Bottom row ── */
        .ftr-bottom {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .ftr-copy {
          font-size: 12px;
          color: #7a5555;
          margin: 0;
        }

        .ftr-social {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ftr-social-label {
          font-size: 12px;
          color: #7a5555;
        }

        .ftr-social-icons {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ftr-social-link {
          color: #7a5555;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }

        .ftr-social-link:hover {
          color: #c0392b;
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .ftr-footer {
            padding: 36px 0 24px;
          }

          .ftr-bottom {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            text-align: center;
          }

          .ftr-tags {
            gap: 4px 8px;
            font-size: 12px;
          }

          .ftr-logo {
            height: 44px;
          }
        }

        @media (max-width: 420px) {
          .ftr-container {
            padding: 0 16px;
          }
        }
      `}</style>
    </footer>
  );
}