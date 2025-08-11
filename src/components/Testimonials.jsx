import { motion } from 'framer-motion';

const quotes = [
  { q: 'Load time halved, conversions up.', a: 'R. Malik' },
  { q: 'Delivered in days. Pixel perfect.', a: 'S. Patel' },
  { q: 'Automation saved us hours weekly.', a: 'K. Omar' },
];

export default function Testimonials() {
  return (
    <section id='testimonials' className='mx-auto max-w-7xl px-4 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-2xl font-bold tracking-wide text-gold-300'
      >
        Testimonials
      </motion.h2>
      <div className='relative mt-8'>
        <div className='grid md:grid-cols-3 gap-6'>
          {quotes.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className='p-6 rounded-2xl border border-gold-400 text-black bg-gradient-to-br from-gold-300 to-gold-400'
            >
              <p className='font-semibold'>“{t.q}”</p>
              <footer className='mt-3 text-sm opacity-80'>— {t.a}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
