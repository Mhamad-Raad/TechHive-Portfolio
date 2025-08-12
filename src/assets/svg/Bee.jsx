const BeeIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 48 48'
    aria-labelledby='title'
    {...props}
  >
    <title>{'Bee mark'}</title>
    <g
      fill='none'
      stroke='#F59E0B'
      strokeWidth={2}
      strokeLinejoin='miter'
      strokeLinecap='square'
    >
      <path d='M10 24h28' />
      <polygon points='24,8 30,18 18,18' />
      <polygon points='24,40 30,30 18,30' />
      <path d='M12 16l-6 -4 6 -4 6 4 -6 4zM36 16l6 -4 -6 -4 -6 4 6 4z' />
    </g>
  </svg>
);
export default BeeIcon;
