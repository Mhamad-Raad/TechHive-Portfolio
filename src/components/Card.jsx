import { motion } from 'framer-motion';

export default function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(245,158,11,0.25)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className='rounded-2xl border border-gold-400/40 bg-[#0B0B0F]/60 backdrop-blur-sm p-6'
    >
      {children}
    </motion.div>
  );
}
