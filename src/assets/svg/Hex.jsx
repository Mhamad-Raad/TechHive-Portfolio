const HexIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 48 48'
    aria-labelledby='title'
    role='img'
    {...props}
  >
    <title>{'Hex'}</title>
    <polygon
      points='24,4 40,14 40,34 24,44 8,34 8,14'
      fill='none'
      stroke='#F59E0B'
      strokeWidth={2}
    />
  </svg>
);
export default HexIcon;
