import { call, put, takeLatest } from 'typed-redux-saga'
import * as api from './api'
import { fetchCompanies, fetchCompaniesFailed, fetchCompaniesSucceeded } from './reducer';
import { Company, IndustryGroup } from '../types';

function* fetchCompaniesSaga(action: typeof fetchCompanies) {
   try {
      const response = yield* call(api.fetchCompanies);

      const uniqueCompaniesSet: Set<string> = new Set();
      const companies: Company[] = [];
      const industriesNames: string[] = [];
      const industryGroups: IndustryGroup[] = [];

      response.items.forEach(company => {
        if (uniqueCompaniesSet.has(company.uuid)) return;

        uniqueCompaniesSet.add(company.uuid);
        companies.push(company)

        company.industries.forEach(industry => {
          const industryIndex = industryGroups.findIndex((storedIndustry) => storedIndustry.id === industry.id)
          const companyKey = `${company.name}_${company.uuid}`;

          if (industryIndex > -1) {
            industryGroups[industryIndex].companies.push(companyKey)
          } else {
            const industryKey = `${industry.name}_${industry.id}`;
            industriesNames.push(industryKey);

            industryGroups.push({
              ...industry,
              companies: [companyKey]
            })
          }
        })
      })

      industriesNames.sort();

      industryGroups.forEach(industry => {
        industry.companies.sort();
      });

      yield* put(fetchCompaniesSucceeded({
        companies,
        industryGroups,
        industriesNames
      }));
   } catch (error) {
      yield* put(fetchCompaniesFailed());
   }
}

export function* companiesSagas() {
  yield* takeLatest(fetchCompanies.type, fetchCompaniesSaga);
}
