export default function Logo({ size = 28 }) {
  return (
    <div className='flex items-center gap-2 select-none'>
      <img
        src='/src/assets/svg/bee.svg'
        width={size}
        height={size}
        alt='Bee icon'
        aria-hidden
      />
      <span className='font-extrabold tracking-[0.18em] text-gold-300 text-sm sm:text-base'>
        TECHHIVE
      </span>
    </div>
  );
}
