import { motion } from 'framer-motion';
import BeeIcon from './BeeIcon';

const steps = [
  {
    title: 'Audit',
    icon: 'hex',
    desc: '48‑hour free review of your site or idea.',
  },
  {
    title: 'Design',
    icon: 'bee',
    desc: 'Minimal, geometric, brand‑true visuals.',
  },
  {
    title: 'Build',
    icon: 'hive',
    desc: 'Modern stack, tests, performance‑first.',
  },
  { title: 'Deploy', icon: 'hex', desc: 'CI/CD to Vercel or Netlify in days.' },
];

export default function Process() {
  return (
    <section id='process' className='mx-auto max-w-7xl px-4 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-2xl font-bold tracking-wide text-gold-300'
      >
        Process
      </motion.h2>
      <ol className='mt-8 grid md:grid-cols-4 gap-6'>
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className='p-6 rounded-2xl border border-gold-400/30'
          >
            <div className='flex items-center gap-3'>
              <BeeIcon name={s.icon} />
              <h3 className='font-semibold'>{s.title}</h3>
            </div>
            <p className='mt-3 text-white/80 text-sm'>{s.desc}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
