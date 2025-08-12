const HiveIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 48 48'
    aria-labelledby='title'
    role='img'
    {...props}
  >
    <title>{'Hive'}</title>
    <g
      fill='none'
      stroke='#F59E0B'
      strokeWidth={2}
      strokeLinejoin='miter'
      strokeLinecap='square'
    >
      <path d='M12 10h24l4 6-4 6H12l-4-6 4-6z' />
      <path d='M16 28h16l4 6-4 6H16l-4-6 4-6z' />
    </g>
  </svg>
);
export default HiveIcon;
