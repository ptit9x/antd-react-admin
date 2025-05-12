import { SVGProps } from 'react';

export const EmojiIcon = ({ width = '14', height = '14', ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' width={width} height={height} {...props}>
      <circle cx='10' cy='10' r='8.5' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      <path
        d='M6.45855 13.2559C6.8927 13.6319 7.45773 13.8981 8.05594 14.0708C8.66207 14.2458 9.33114 14.3333 9.99996 14.3333C10.6688 14.3333 11.3378 14.2458 11.944 14.0708C12.5422 13.8981 13.1072 13.6319 13.5414 13.2559'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M7.49996 9.41667C8.09827 9.41667 8.58329 8.93164 8.58329 8.33333C8.58329 7.73502 8.09827 7.25 7.49996 7.25C6.90165 7.25 6.41663 7.73502 6.41663 8.33333C6.41663 8.93164 6.90165 9.41667 7.49996 9.41667Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='0.5'
        strokeLinecap='round'
      />
      <path
        d='M12.5 9.41667C13.0983 9.41667 13.5833 8.93164 13.5833 8.33333C13.5833 7.73503 13.0983 7.25 12.5 7.25C11.9017 7.25 11.4166 7.73503 11.4166 8.33333C11.4166 8.93164 11.9017 9.41667 12.5 9.41667Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='0.5'
        strokeLinecap='round'
      />
    </svg>
  );
};
