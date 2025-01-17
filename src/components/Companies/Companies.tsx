import React, { ReactNode } from 'react';
import { Item } from './Item';

export interface CompaniesProps {
  children: ReactNode;
  paramNames: string[];
}

export const Companies = ({ children, paramNames }: CompaniesProps) => {
  return (
    <div className="divide-y divide-[#e3e8ef]">
      <div className='pb-2 flex gap-2.5 items-center justify-between text-xs text-[#64748B]'>
        {paramNames.map((paramName) => {
          return (
            <div key={paramName}>{paramName}</div>
          )
        })}
      </div>
      <div className="pt-4 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

Companies.Item = Item
