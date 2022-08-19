import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

const CardIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 18"
      fill="none"
      className={twMerge('h-6 w-6 text-yellow-500', className)}
      {...props}
    >
      <path
        d="M21 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 18H24V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0ZM3 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V5H2V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM2 16V7H22V16H2Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { CardIcon };
