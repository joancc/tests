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
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY0NDI0NjMsImV4cCI6MTU0NjQ4MjQ2MywiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6IjZkYzc1NTRkLTU0ZmYtNGRkMC04Njg0LTQ3NTRlNjdiN2IyOSIsImF1dGhfdGltZSI6MTU0NjQ0MjQ2MywiaWRwIjoibG9jYWwiLCJuYW1lIjpbIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsImF4ZWwiLCJheGVsIiwia2xrbGtsaWtsa2wiLCJwcm92ZWVkb3IiXSwiZW1haWwiOlsiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIl0sInNjb3BlIjpbImdlc3Rpb25peF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.lwee5oIAUuNlBBloc04QluCNf8GDYLBwQUyGxCfNkMb3-ardyB0RwioHbJ5KbPbeiHR_wzKFgDtndEQ1cr0kwhZHiYMlGOeupxVxcu2FQtvMq2SWdGaMV639Kfxnxe-yu3tfJqy8qrGDYHo__ZLsKr1kI-er0UySJaDZtzzTLJ3oS1Z2tDz7ElRGcfCkFze4K-D6BE6gGu2OMMCQoMGilqC12pPBEN5GKnda1Z357A0hO2n0td0GTLdD4tt7epw1bd1vEk_okzdbrF-fF04uIVD48ZHEmmRdPdQIoMKWhrk_7QNnWl-vwnriBaQYl43wAaYrogAfrL5dPB-0ZorR5pUhJ6ySFJFXVfS7dAO4hIHnRwNzomo0U7oiOkVBhxwrTZOUxTgT-o6MGtdgyGkFFmfJxNLYCvbuvqY-zsY1G47XP4OLtVn3SbMOR_tq1zhOpNupNChQOj0dKGDRewY3Vs79sUQ77a4yfc26Naa2a8t2KtrcCLhI9MP6dqfXQlYeL_vUQKBRKvSPAljGKgsUNgofG6l_0jYJJ5UB5Op8FV0p6t5bG8SQTi9cKSspA0Yj6FQoTl09FZKRw5WcJr_B7mg7DhRywPKnb9Eli1UHkfVNnRSQ7DoIodn6ciVbCxpeKhvUAi1dhq-QQ4JPebwyDUhOUsbD_TWNFKLoBRAT6eU";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
