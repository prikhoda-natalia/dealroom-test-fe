import axios from 'axios';
import { FetchCompaniesApiResponse } from './types';

export const fetchCompanies = async (): Promise<FetchCompaniesApiResponse> => {
  const response = await axios.get('http://localhost:3001/api/companies');
  console.log('Company Data:', response.data);
  return response.data;
};
