import { motion } from 'framer-motion';
import Logo from './Logo';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#features', label: 'What We Build' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-gold-400/20'
    >
      <nav className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
        <a
          href='#home'
          className='focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-md'
        >
          <Logo />
        </a>
        <ul className='hidden md:flex items-center gap-6 text-sm text-white/80'>
          {links.map((l) => (
            <li key={l.href}>
              <a className='hover:text-gold-300 transition' href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href='#contact'
          className='md:inline-flex hidden text-sm font-semibold text-black bg-gold-400 px-4 py-2 rounded-lg border border-gold-400 hover:shadow-gold'
        >
          Free Audit
        </a>
      </nav>
    </motion.header>
  );
}
