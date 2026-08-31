import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
  href?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
  id?: string;
};

export function BrandIcon({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={cn(
        'p-2 rounded-lg bg-white/10 border border-white/10 text-amber-400 shrink-0',
        className,
      )}
    >
      <Terminal className={cn('h-5 w-5', iconClassName)} aria-hidden />
    </div>
  );
}

export default function BrandLogo({
  href = '/',
  className,
  iconClassName,
  textClassName,
  showText = true,
  id,
}: BrandLogoProps) {
  const content = (
    <>
      <BrandIcon iconClassName={iconClassName} />
      {showText && (
        <span className={cn('text-xl font-bold tracking-tight text-white', textClassName)}>
          Addis<span className="text-amber-400">Tech</span>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        id={id}
        href={href}
        className={cn('flex items-center space-x-2 transition-all hover:opacity-90', className)}
        aria-label={showText ? 'Addis Tech home' : 'Addis Tech'}
      >
        {content}
      </Link>
    );
  }

  return (
    <div id={id} className={cn('flex items-center space-x-2', className)}>
      {content}
    </div>
  );
}
