import Logo from './Logo';

export default function Footer() {
  return (
    <footer className='mt-16 border-t border-gold-400/20'>
      <div className='mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <Logo />
        <small className='text-white/60'>
          © {new Date().getFullYear()} TECHHIVE · All rights reserved
        </small>
        <nav className='text-sm text-white/70 flex gap-4'>
          <a href='#home' className='hover:text-gold-300'>
            Top
          </a>
          <a href='#features' className='hover:text-gold-300'>
            Features
          </a>
          <a href='#contact' className='hover:text-gold-300'>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
