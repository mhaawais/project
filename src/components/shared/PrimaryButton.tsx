import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  showArrow?: boolean;
}

export function PrimaryButton({
  children,
  onClick,
  href,
  className,
  showArrow = true,
}: PrimaryButtonProps) {
  const buttonContent = (
    <motion.span
      className={cn(
        'inline-flex items-center gap-2 px-6 py-3 bg-rv-accent text-white font-medium text-sm rounded-md',
        'hover:bg-rv-accent-hover transition-colors duration-200',
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {showArrow && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button">
      {buttonContent}
    </button>
  );
}
