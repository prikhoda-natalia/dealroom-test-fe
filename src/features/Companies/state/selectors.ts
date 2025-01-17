import { RootState } from "../../App/state/types";
import { companiesAdapter, industryGroupsAdapter } from "./reducer";

export const selectStatus = (state: RootState) => state.companies.status;

export const selectIndustriesNames = (state: RootState) => state.companies.industriesNames;

export const {
  selectEntities: selectCompanyEntities,
  selectAll: selectCompanies
} = companiesAdapter.getSelectors((state: RootState) => state.companies.companies)

export const {
  selectEntities: selectIndustryGroupEntities,
  selectAll: selectIndustryGroups
} = industryGroupsAdapter.getSelectors((state: RootState) => state.companies.industryGroups)
