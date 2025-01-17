import React, { useEffect } from 'react';
import { Companies } from '../../components/Companies';
import { CompanyGroups } from '../../components/CompanyGroups';
import { ScreenLayout } from '../../components/ScreenLayout';
import { useAppDispatch } from './hooks/useAppDispatch';
import { fetchCompanies } from '../Companies/state/reducer';
import { useAppSelector } from './hooks/useAppSelector';
import { selectCompanyEntities, selectIndustryGroupEntities, selectIndustriesNames } from '../Companies/state/selectors';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [dispatch]);

  const industriesNames = useAppSelector(selectIndustriesNames);
  const industryGroupEntities = useAppSelector(selectIndustryGroupEntities);
  const companyEntities = useAppSelector(selectCompanyEntities);

  return (
    <ScreenLayout>
      <h1 className="py-6 text-3xl font-bold tracking-tight text-gray-900">Companies</h1>
      <div className='mb-6 p-6 flex items-center bg-white rounded-lg'>
        <div className='font-semibold'>Group by</div>
        <div className="ml-4 flex space-x-1 rounded-lg bg-slate-100 p-0.5" role="tablist" aria-orientation="horizontal">
          <button className="group flex items-center rounded-md py-[0.4375rem] pr-2 pl-2 text-sm font-semibold pr-3" role="tab" type="button" aria-selected="false">
            <span className="text-slate-600 ml-2">None</span>
          </button>
          <button className="group flex items-center rounded-md py-[0.4375rem] pr-2 pl-2 text-sm font-semibold bg-white shadow-sm pr-3" role="tab" type="button" aria-selected="true">
            <span className="text-slate-900 ml-2">Industry</span>
          </button>
        </div>
      </div>
      <CompanyGroups>
        {industriesNames?.map((industryNameKey: string) => {
          const [industryName, industryId] = industryNameKey.split('_');
          const industry = industryGroupEntities[industryId]

          return (
            <CompanyGroups.Item key={industryNameKey} counter={industry?.companies.length} title={industryName}>
              <Companies paramNames={['Name', 'Total jobs available']}>
                {industry?.companies.map((companyNameKey: string) => {
                  const [companyName, companyUuid] = companyNameKey.split('_');
                  const company = companyEntities[companyUuid]

                  return (
                    <Companies.Item key={companyNameKey} counter={company?.total_jobs_available} imageSrc={company?.images["32x32"]} name={companyName} />
                  )
                })}
              </Companies>
            </CompanyGroups.Item>
          )
        })}
      </CompanyGroups>
    </ScreenLayout>
  );
}

export default App;
