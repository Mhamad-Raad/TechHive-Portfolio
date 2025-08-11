import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button';
import LazyLottie from './LazyLottie';

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id='home' className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-techhive-linear' aria-hidden></div>
      <div className='absolute inset-0 bg-techhive-radial' aria-hidden></div>

      {!reduce && (
        <LazyLottie
          path='/lottie/bee_orbit.json'
          className='absolute inset-0 opacity-10 pointer-events-none'
          ariaLabel='Subtle orbiting bee particles'
        />
      )}

      <div className='relative mx-auto max-w-7xl px-4 py-28 sm:py-36'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl sm:text-6xl font-extrabold tracking-tight font-manrope'
        >
          Beautiful sites.{' '}
          <span className='text-gold-300'>Automated workflows.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className='mt-5 max-w-2xl text-white/80'
        >
          Launch in days, not months. Free 48‑hour audit.
        </motion.p>
        <div className='mt-8 flex items-center gap-4'>
          <Button as='a' href='#contact'>
            Get a free audit
          </Button>
          <Button as='a' href='#work' variant='outline'>
            See work
          </Button>
        </div>
      </div>

      {!reduce && (
        <div className='relative h-24 opacity-30'>
          <LazyLottie
            path='/lottie/honeycomb_flow.json'
            className='absolute inset-0'
            ariaLabel='Honeycomb divider'
          />
        </div>
      )}
    </section>
  );
}
