import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center justify-center w-10 h-10 bg-rv-accent rounded-md">
        <span className="text-white font-bold text-lg">RV</span>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm leading-tight">Robert</span>
          <span className="text-white font-semibold text-sm leading-tight">Vandervoort</span>
        </div>
      )}
    </div>
  );
}
