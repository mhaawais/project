import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function PrimaryButton({ href, onClick, children }: PrimaryButtonProps) {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    backgroundColor: "#932a1c", // rv-accent
    color: "#ffffff",
    fontSize: "0.875rem",
    fontWeight: 600,
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.2s",
    whiteSpace: "nowrap",
  };

  const hover = { scale: 1.02, backgroundColor: "#F06B3E" as const }; // rv-accent-hover
  const tap = { scale: 0.97 };

  if (href) {
    return (
      <motion.a href={href} style={style} whileHover={hover} whileTap={tap}>
        {children}
        <ArrowRight style={{ width: 16, height: 16 }} />
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} style={style} whileHover={hover} whileTap={tap}>
      {children}
      <ArrowRight style={{ width: 16, height: 16 }} />
    </motion.button>
  );
}