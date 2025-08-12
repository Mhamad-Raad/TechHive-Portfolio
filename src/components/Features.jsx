import Card from './Card';
import BeeIcon from './BeeIcon';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Landing & Portfolio Sites',
    icon: 'hex',
    bullets: [
      'Modern, responsive',
      'SEO‑friendly, fast',
      'CMS or headless ready',
    ],
  },
  {
    title: 'Business Automation',
    icon: 'hive',
    bullets: [
      'Inventory & warehouse',
      'Booking & scheduling',
      'Dashboards & alerts',
    ],
  },
  {
    title: 'API Integrations',
    icon: 'bee',
    bullets: [
      'Payments & auth',
      '3rd‑party services',
      'Clean, secure, scalable',
    ],
  },
];

export default function Features() {
  return (
    <section id='features' className='mx-auto max-w-7xl px-4 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-2xl font-bold tracking-wide text-gold-300'
      >
        What We Build
      </motion.h2>
      <div className='mt-8 grid md:grid-cols-3 gap-6'>
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card>
              <div className='flex items-center gap-3'>
                <BeeIcon name={it.icon} />
                <h3 className='text-lg font-semibold text-gold-300'>
                  {it.title}
                </h3>
              </div>
              <ul className='mt-4 space-y-2 text-white/80 list-disc list-inside'>
                {it.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
