type SparklineProps = {
  data?: number[];
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
  fill?: boolean;
};

const DEFAULT_DATA = [4, 6, 5, 8, 7, 11, 9, 13, 12, 16, 18, 22];

/**
 * A tiny dependency-free SVG line chart used inside product cards.
 */
export function Sparkline({
  data = DEFAULT_DATA,
  width = 96,
  height = 28,
  stroke = "#1D3FE6",
  className,
  fill = true,
}: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);

  const points = data.map((value, index) => {
    const x = index * stepX;
    const y = height - ((value - min) / range) * (height - 4) - 2;
    return [x, y] as const;
  });

  const linePath = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");

  const areaPath = `${linePath} L${width} ${height} L0 ${height} Z`;
  const gradientId = `spark-${stroke.replace("#", "")}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={areaPath} fill={`url(#${gradientId})`} />}
      <path
        d={linePath}
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r={2.5}
        fill={stroke}
      />
    </svg>
  );
}

export default Sparkline;
