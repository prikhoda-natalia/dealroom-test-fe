import React, { ReactNode } from 'react';

export interface ItemProps {
  children: ReactNode;
  counter?: number;
  title: string;
}

export const Item = ({ children, counter, title }: ItemProps) => {
  return (
    <div className='break-inside-avoid-column bg-white rounded-lg'>
      <h3 className='p-4 flex items-center justify-between font-semibold text-base text-[#18181B]'>
        <span className='capitalize'>{title}</span>
        <span>{counter}</span>
      </h3>
      <div className='px-4 pb-6'>
        {children}
      </div>
    </div>
  );
};
