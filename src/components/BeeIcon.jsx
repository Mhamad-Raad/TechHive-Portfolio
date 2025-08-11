export default function BeeIcon({ name = 'hex', size = 28 }) {
  const src =
    name === 'bee'
      ? '/src/assets/svg/bee.svg'
      : name === 'hive'
      ? '/src/assets/svg/hive.svg'
      : '/src/assets/svg/hex.svg';
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={name}
      aria-label={`${name} icon`}
    />
  );
}
