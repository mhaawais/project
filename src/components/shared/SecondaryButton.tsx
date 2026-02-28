import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SecondaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function SecondaryButton({ href, onClick, children }: SecondaryButtonProps) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: '#2e1414',   // rv-bg-secondary
    color: '#E8D5D5',              // rv-text-secondary
    fontSize: '0.875rem',
    fontWeight: 600,
    borderRadius: '4px',
    border: '1px solid #4A2A2A',  // rv-border
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
    whiteSpace: 'nowrap',
  };

  if (href) {
    return (
      <motion.a
        href={href}
        style={style}
        whileHover={{ scale: 1.02, borderColor: '#5A3A3A', color: '#FFFFFF' }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
        <ArrowRight style={{ width: '16px', height: '16px' }} />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      style={style}
      whileHover={{ scale: 1.02, borderColor: '#5A3A3A', color: '#FFFFFF' }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      <ArrowRight style={{ width: '16px', height: '16px' }} />
    </motion.button>
  );
}