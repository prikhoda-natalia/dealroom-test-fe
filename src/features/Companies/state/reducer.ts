import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompaniesState, FetchCompaniesSucceeded } from "./types";
import { Company, IndustryGroup } from "../types";

export const companiesAdapter = createEntityAdapter<Company>({
  selectId: (company: Company) => company.uuid
})

export const industryGroupsAdapter = createEntityAdapter<IndustryGroup>({
  selectId: (industryGroup) => industryGroup.id
})

const initialState: CompaniesState = {
  status: 'idle',
  companies: companiesAdapter.getInitialState(),
  industryGroups: industryGroupsAdapter.getInitialState(),
  industriesNames: []
};

export const companiesSlice = createSlice({
  name: 'Companies',
  initialState,
  reducers: {
    fetchCompanies: (state) => {
      state.status = 'loading'
    },
    fetchCompaniesSucceeded: (state, action: PayloadAction<FetchCompaniesSucceeded>) => {
      const { companies, industryGroups, industriesNames } = action.payload

      state.status = 'idle'
      state.industriesNames = industriesNames

      companiesAdapter.setAll(state.companies, companies)
      industryGroupsAdapter.setAll(state.industryGroups, industryGroups)
    },
    fetchCompaniesFailed: (state) => {
      state.status = 'failed'
    }
  }
});

export const { fetchCompanies, fetchCompaniesSucceeded, fetchCompaniesFailed } = companiesSlice.actions;

export default companiesSlice.reducer;
