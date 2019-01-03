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
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY1MzIzNzUsImV4cCI6MTU0NjU3MjM3NSwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6IjZkYzc1NTRkLTU0ZmYtNGRkMC04Njg0LTQ3NTRlNjdiN2IyOSIsImF1dGhfdGltZSI6MTU0NjUzMjM3NSwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsImF4ZWwiLCJheGVsIiwia2xrbGtsaWtsa2wiLCJwcm92ZWVkb3IiLCJwcm92ZWVkb3IiXSwiZW1haWwiOlsiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIl0sInNjb3BlIjpbImdlc3Rpb25peF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.IuTAaQqNesXdlBzqhXLUJeCr5j6sEUoLRwLZzTasGB7DYD_FobpBIHNS8YqlRQVrv1602qyvHNve1rOncnfaj6dioZHalCo1P3fXnFB9HHHUgAIwVGgD3gIyryO0CRMl73iyBShLvkpqrpCZQCe2RBwvfbevOnOXmiOH6-PFPRwL1n34b4d3w8xURrJrBznLnr4fzIRm3xaUDLJCp4esxK2cC8Dya9JTgDEIwZr7XBdlou5jmOCmDfAxvoo_9Fhrfr2ntHB-SZAzio49gq9p4JHfSZCFGVGIc9Q90-kioVIkkGyQCygNVJScAm90Lw-JmRB4zR3LXP88JTpP4khIEGZvTLU16dNcGuAWe2AqfbrB06LERps6ed-xIrhs1Z6NtCctA3XZMZHxPM82ksnAMCtikknsSApGZ4dw-_AjL7Ij9k6RCPh5o1ZWTTaeWVjeRhGmJyp16B2efne2_mSmr8JMKQoPCSWvfVjCly-g8euHi76LziPsCFYDc4QGzmU6L1UMRsVPEH9agrlfZ59JTXhX58Uy1RaQoL6jRdfDdy6z6Nh9XcV7pf4ct70HRWCkVI9lvNJ7cP6TRaYyK99xHLor2_fg46DglWQ0bsqZnfO9ymMpbLIfGLYSpULTyGEMDGai_vkRa67p8AFfNDtDd1bQGUtrs_L6sYVW0v7VCF8";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
