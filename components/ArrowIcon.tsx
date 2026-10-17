import type { SVGProps } from 'react';

type ArrowIconProps = SVGProps<SVGSVGElement> & {
  color?: string;
};

export default function ArrowIcon({
  color = 'text-primary',
  ...props
}: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className={`stroke-current ${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14M12 19l7-7-7-7"
      />
    </svg>
  );
}
