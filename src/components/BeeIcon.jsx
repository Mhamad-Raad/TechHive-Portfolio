import BeeIcon from '../assets/svg/Bee';
import HiveIcon from '../assets/svg/Hive';
import HexIcon from '../assets/svg/Hex';

export default function Icon({ name = 'hex', size = 28 }) {
  const Icon = name === 'bee' ? BeeIcon : name === 'hive' ? HiveIcon : HexIcon;
  return (
    <Icon width={size} height={size} alt={name} aria-label={`${name} icon`} />
  );
}
