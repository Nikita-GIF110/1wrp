interface CloseIconProps {
  color?: string;
}

export const CloseIcon = ({ color = "#0D0C22" }: CloseIconProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L11 11" stroke={color} strokeWidth="2" />
    <path d="M1 11L11 0.999999" stroke={color} strokeWidth="2" />
  </svg>
);
