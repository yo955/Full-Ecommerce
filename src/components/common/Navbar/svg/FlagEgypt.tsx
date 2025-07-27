const FlagEgypt = ({
  width = 32,
  height = 32,
}: {
  width?: number;
  height?: number;
}) => (
  <svg width={width} height={height} viewBox="0 0 640 480">
    <g fillRule="evenodd">
      <path fill="#ce1126" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000" d="M0 320h640v160H0z" />
    </g>
    <g transform="translate(320 240) scale(2)">
      <path fill="#c09300" d="M-5-20h10l-5 10zM-5 0h10v10h-10z" />
    </g>
  </svg>
);

export default FlagEgypt;
