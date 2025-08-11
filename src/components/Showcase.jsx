import Card from './Card';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project A', metrics: ['<2s load', '+15% conv.'], img: '' },
  { title: 'Project B', metrics: ['99.9% uptime', '+32% leads'], img: '' },
  { title: 'Project C', metrics: ['TTI 1.8s', 'A11y 98'], img: '' },
];

export default function Showcase() {
  return (
    <section id='work' className='mx-auto max-w-7xl px-4 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-2xl font-bold tracking-wide text-gold-300'
      >
        Recent Work
      </motion.h2>
      <div className='mt-8 grid md:grid-cols-3 gap-6'>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card>
              <div className='aspect-[16/10] rounded-xl border border-gold-400/30 bg-gradient-to-br from-[#111215] to-[#0B0B0F] relative overflow-hidden'>
                <div className='absolute inset-0 grid grid-cols-6 opacity-20'>
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className='border border-gold-400/10'></div>
                  ))}
                </div>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <h3 className='font-semibold'>{p.title}</h3>
                <div className='text-xs text-white/70 flex gap-2'>
                  {p.metrics.map((m) => (
                    <span
                      key={m}
                      className='px-2 py-1 rounded border border-gold-400/30'
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
