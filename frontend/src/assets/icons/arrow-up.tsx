interface ArrowUpProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const ArrowUp = ({
  width = 30,
  height = 29,
  fill = "#161616",
}: ArrowUpProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M24.3796 8.3828L4.10194 28.6604L0.77063 25.3291L21.0459 5.05149H3.17605V0.3396H29.0915V26.255H24.3796V8.3828Z"
      fill={fill}
    />
  </svg>
);
