import React, { ReactNode } from 'react';
import { Item } from './Item';

export interface CompanyGroupsProps {
  children: ReactNode;
}

export const CompanyGroups = ({ children }: CompanyGroupsProps) => {
  return (
    <div role="list" className="columns-3xs gap-4 space-y-4 md:gap-8 md:space-y-6">
        {children}
    </div>
  );
};

CompanyGroups.Item = Item
