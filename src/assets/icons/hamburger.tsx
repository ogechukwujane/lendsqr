import { DetailedHTMLProps, FC, SVGProps } from 'react';

export const Hamburger: FC<
  DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7.86719H19M1 1.86719H19M1 13.8672H19"
      stroke="#101828"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
