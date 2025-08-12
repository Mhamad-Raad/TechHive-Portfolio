import Bee from '../assets/svg/Bee';
export default function Logo({ size = 28 }) {
  return (
    <div className='flex items-center gap-2 select-none'>
      <Bee width={size} height={size} />
      <span className='font-extrabold tracking-[0.18em] text-gold-300 text-sm sm:text-base'>
        TECHHIVE
      </span>
    </div>
  );
}
