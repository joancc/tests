import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const mutations = {
  setCompaniesList: (state, payload) => {
    state.companiesList = payload;
  },
  setCompanyBranches: (state, payload) => {
    state.companyBranches = payload;
  },
  setBranchLocation: (state, payload) => {
    state.branchLocation = payload;
  }
};

export const getters = {
  companiesList: state => state.companiesList,
  companyBranches: state => state.companyBranches,
  branchLocation: state => state.branchLocation
};

export const state = {
  companiesList: [],
  companyBranches: [],
  branchLocation: []
};

export const actions = {
  getActiveBranch: ({ commit, state }, { id }) => {
    const branches = state.companyBranches.map(branch => {
      return {
        ...branch,
        ...{
          selected: branch.branch_id === id
        }
      };
    });
    commit("setCompanyBranches", branches);
    branches.forEach(location => {
      if (location.branch_id === id) {
        commit("setBranchLocation", location);
      }
    });
  },
  getActiveItem: ({ commit, state }, { id }) => {
    const companies = state.companiesList.map(company => {
      return {
        ...company,
        ...{
          selected: company.company_id === id
        }
      };
    });
    commit("setCompaniesList", companies);
    Axios.get("https://api-test.gestionix.com/api/v3/branch_offices/", {
      headers: {
        Company: id,
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        commit("setCompanyBranches", response.data);
      })
      .catch(err => console.log(err));
  },
  getCompaniesList: ({ commit }) => {
    Axios.get("https://api-test.gestionix.com/api/v3/users/companies", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        const companies = response.data.map(company => {
          return {
            ...company,
            ...{
              active: true
            }
          };
        });
        commit("setCompaniesList", companies);
      })
      .catch(err => console.log(err));
  }
};

const accessToken =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY2MzQ4OTEsImV4cCI6MTU0NjY3NDg5MSwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRlc3QuZ2VzdGlvbml4LmNvbSIsImF1ZCI6WyJodHRwczovL2F1dGgtdGVzdC5nZXN0aW9uaXguY29tL3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6IjZkYzc1NTRkLTU0ZmYtNGRkMC04Njg0LTQ3NTRlNjdiN2IyOSIsImF1dGhfdGltZSI6MTU0NjYzNDg5MSwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsImF4ZWwiLCJheGVsIiwia2xrbGtsaWtsa2wiLCJwcm92ZWVkb3IiLCJwcm92ZWVkb3IiXSwiZW1haWwiOlsiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIl0sInNjb3BlIjpbImdlc3Rpb25peF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.Hvxz3xI97ViA0Ev9-T2BzHa5dCajJrf8THBqxNu-RcUF90GoS225CQ3w3uzGx8lMPUSaqDtwCcEEiQ0P9I39zYbMPDjpdl3rL9KxwkjKnZuFOSpRS-EPUltcvYj5JhOoLLTa-dpiKBU3-AemtOo6kljpdGUGl6qmBnk8GmnIGrK7kK3yCZYOM_WRQfwtalqqhkFKLJTOWp9mFhP9Iw1CMZ-8WLkyAFViQcM4BwRwYchv97tOFngeQpcoKLfORTp7f5QBjQhQO99zoLWVy6BQgRR0Q0jC0yh0oVZGki1qmX14uvu1aGnTqLFp7G9BPcwAhcuzla3rnxo70cGg8a4KYJ3JIzN6KarDJFR2vqKLRBMWhw7svQrf7Zgy8fillRHXzbHdT--13x5hGRZygHsw8RgXwkuD6Zd35C0f3Kequc07Yas9UL6daYZQ9GKOO50S6RyDrqIIHeX5VvnN_KeXPk8V4e_g2HMbiHz731DElMZsGKIwS8KXnYIQnwjol8w3i3pCXX6l4JDXSbhsK1buVJN05GVpT5XtohcnHzoxkfFFSO-sJajDBeilF3rAixUNpFqq8E-44lchlOy2poR9VEkzHigmHUxfZg4eC966o9m1h9MnR-SvWggroZQ45kOw1JKPpktO8l6njZgvuN9m5KbvXtkWbBVI-8Bi3KtpmCA";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
