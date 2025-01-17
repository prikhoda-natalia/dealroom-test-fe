import React from 'react';
import { ImageWithPlaceholder } from '../../ImageWithPlaceholder';

export interface ItemProps {
  counter?: number;
  imageSrc?: string;
  name: string;
}

export const Item = ({ counter, imageSrc, name }: ItemProps) => {
  return (
    <div className='flex gap-2.5 items-center justify-between text-sm'>
      <div className='flex items-center gap-2'>
        <div className='shrink-0'>
          <ImageWithPlaceholder src={imageSrc} alt={name} />
        </div>
        <div className='text-[#18181B]'>{name}</div>
      </div>
      <span className='text-[#64748B]'>{counter}</span>
    </div>
  );
};
