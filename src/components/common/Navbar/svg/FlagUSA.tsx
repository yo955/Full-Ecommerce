const FlagUSA = ({ width = 32, height = 32 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 7410 3900">
    <rect width="7410" height="3900" fill="#b22234" />
    <g fill="#fff">
      {[...Array(6)].map((_, i) => (
        <rect key={i} y={(i * 2 + 1) * 300} width="7410" height="300" />
      ))}
    </g>
    <rect width="2964" height="2100" fill="#3c3b6e" />
    <g fill="#fff">
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => {
          const x = 247 + col * 494 + (row % 2 === 0 ? 0 : 247);
          const y = 210 + row * 210;
          return (
            <polygon
              key={`${row}-${col}`}
              points={Array.from({ length: 5 })
                .map((_, i) => {
                  const angle = (Math.PI / 2) + (i * 2 * Math.PI) / 5;
                  const sx = x + 90 * Math.cos(angle);
                  const sy = y + 90 * Math.sin(angle);
                  return `${sx},${sy}`;
                })
                .join(" ")}
            />
          );
        })
      )}
    </g>
  </svg>
);

export default FlagUSA;
