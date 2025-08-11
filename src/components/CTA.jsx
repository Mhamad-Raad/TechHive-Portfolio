import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  const [status, setStatus] = useState('idle');

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    console.log('Form submit →', Object.fromEntries(fd.entries()));
    setTimeout(() => setStatus('ok'), 400);
  }

  return (
    <section id='contact' className='mx-auto max-w-3xl px-4 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-2xl font-bold tracking-wide text-gold-300'
      >
        Free 48‑hour audit
      </motion.h2>
      <p className='mt-3 text-white/80'>
        Send a URL or quick brief. We’ll reply within 48 hours.
      </p>
      <form onSubmit={onSubmit} className='mt-6 grid gap-4'>
        <label className='grid gap-2'>
          <span className='text-sm'>Email</span>
          <input
            name='email'
            type='email'
            required
            placeholder='you@company.com'
            className='px-4 py-3 rounded-xl bg-[#111215] border border-gold-400/40 focus:border-gold-400'
          />
        </label>
        <label className='grid gap-2'>
          <span className='text-sm'>Project / URL</span>
          <input
            name='project'
            type='text'
            required
            placeholder='https://your-site.com'
            className='px-4 py-3 rounded-xl bg-[#111215] border border-gold-400/40 focus:border-gold-400'
          />
        </label>
        <button
          type='submit'
          className='px-5 py-3 rounded-xl text-black bg-gold-400 border border-gold-400 hover:shadow-gold font-semibold'
        >
          Request audit
        </button>
        {status === 'ok' && (
          <p role='status' className='text-green-400'>
            Thanks! We’ll be in touch.
          </p>
        )}
      </form>
    </section>
  );
}
