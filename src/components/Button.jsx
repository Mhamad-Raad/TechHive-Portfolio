import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Button({
  children,
  onClick,
  as = 'button',
  href,
  variant = 'solid',
}) {
  const [hover, setHover] = useState(false);
  const base =
    'inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold tracking-wide uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400';
  const look =
    variant === 'solid'
      ? 'bg-gold-400 text-black border border-gold-400'
      : 'bg-transparent text-gold-300 border border-gold-400';

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      className={`${base} ${look} shadow-gold relative overflow-hidden`}
      aria-label={typeof children === 'string' ? children : 'button'}
    >
      <span className='relative z-10'>{children}</span>
      {hover && (
        <span
          className='absolute inset-0 opacity-20 pointer-events-none'
          aria-hidden
        >
          <span className='absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent animate-[pulse_1.2s_ease-in-out_infinite]' />
        </span>
      )}
    </motion.a>
  );
}
