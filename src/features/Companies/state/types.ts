import { EntityState } from '@reduxjs/toolkit';
import { Company, IndustryGroup } from '../types';

export type CompaniesState = {
  status: 'idle' | 'loading' | 'failed';
  companies: EntityState<Company>;
  industryGroups: EntityState<IndustryGroup>;
  industriesNames: string[]
}

export type FetchCompaniesApiResponse = {
  items: Company[];
  total: number;
}

export type FetchCompaniesSucceeded = {
  companies: Company[];
  industryGroups: IndustryGroup[];
  industriesNames: string[]
}
