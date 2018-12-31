import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const accessToken =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDYyNzIzNzksImV4cCI6MTU0NjMxMjM3OSwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6IjZkYzc1NTRkLTU0ZmYtNGRkMC04Njg0LTQ3NTRlNjdiN2IyOSIsImF1dGhfdGltZSI6MTU0NjI3MjM3OCwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsImF4ZWwiLCJheGVsIiwia2xrbGtsaWtsa2wiLCJwcm92ZWVkb3IiXSwiZW1haWwiOlsiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIl0sInNjb3BlIjpbImdlc3Rpb25peF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.VPWzdcqZ10ROPKFDBSq8tjaCeFDEf4uRvterhKMwvTjMHw1G2NjwN4JNUJm-alESg1kkvmCTNrnt6DDPBRFf5MEtdSQeHfeyEMDf059-mh9yuJNpfU9_ONhJ34gkfhxbzRgv0NAFMdgyQ1pIGBWXdcBDUN6_JeJ2PvJTCz9Bd8gZwdIMJWxbrW4FIB0HKembGL4WFBF91OzbwRXyFkx13NUxu6KL4FnWEvxo6wt4DDtV16kQL6g8dbst3mbcNeHdJWuMH_IYdpd7_DBN4ICIUkkuTepEPU39W4JlixylO7mlG57yJXM671uDQXDnE4TK1nLliLcCiB4zMJrDp1vpldWa5FGVf3Ijo2DQRElj85WJNvh8eW_mJGwlqTkXkXgaSHCyWa4sRd1R21V-YC-m7Yh0iTXoQ3mdPijZTXlddvbAMAxzVZdrBcX5dO_DttolwiHemgpTb3cLd11gJThWfYCL0ehchFnahSo1kyWO3KVjE1CzNdT88H0WstaP3juFNTx0rCp2h4B4wsna7JXFoIKu346j5Qpp89vM621CUIFpznUEqnlljt9s00j7kESjIzUx4v3aKyEhOOfrKyRPTAiIKVjMiWJ_rdc5J8bHppEhlKtuPrmchIXtkoam1IIQohs1HWlCMPitcx1omsLL4M3G1WjpXzBaQUL3XKeVUsE";

export default new Vuex.Store({
  state: {
    companiesList: [],
    companyBranches: [],
    branchLocation: []
  },
  mutations: {
    setCompaniesList: (state, payload) => {
      state.companiesList = payload;
    },
    setCompanyBranches: (state, payload) => {
      state.companyBranches = payload;
    },
    setBranchLocation: (state, payload) => {
      state.branchLocation = payload;
    }
  },
  actions: {
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
          commit("setBranchLocation", location.address);
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
  },
  getters: {
    companiesList: state => state.companiesList,
    companyBranches: state => state.companyBranches,
    branchLocation: state => state.branchLocation
  }
});
