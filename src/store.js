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
  }
};

export const getters = {
  companiesList: state => state.companiesList,
  companyBranches: state => state.companyBranches
};

export const state = {
  companiesList: [],
  companyBranches: []
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
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY4NzQ0NDEsImV4cCI6MTU0NjkxNDQ0MSwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRlc3QuZ2VzdGlvbml4LmNvbSIsImF1ZCI6WyJodHRwczovL2F1dGgtdGVzdC5nZXN0aW9uaXguY29tL3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6IjZkYzc1NTRkLTU0ZmYtNGRkMC04Njg0LTQ3NTRlNjdiN2IyOSIsImF1dGhfdGltZSI6MTU0Njg3NDQ0MSwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsImF4ZWwiLCJheGVsIiwia2xrbGtsaWtsa2wiLCJwcm92ZWVkb3IiLCJwcm92ZWVkb3IiXSwiZW1haWwiOlsiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIl0sInNjb3BlIjpbImdlc3Rpb25peF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.c8WmJv5ArkBk2zRyqaLEXfc7s9vp2OVqebWu4y005Cb6z97WR3gtYa_pLRFM9cpSdpuYkzrC0rUk5gDMObTHGB9_dUxw3gjKCE1Qv0GIL7QvITdw1eMZwqpbfGsb1Q-RcbnxCvHU_E0_M2DbopEoyDtQSfIur-e7Nr0-EqNI1AeAJhh43AQlPXz6n0D0UczuRXRkAE6P_iBaO8tYcVVm0ez4FCMfvVh5bxpLn-dQJyfvALyo6_mLl2ivej_pMZo6R0U7dZLO4n8aV4OivaMYnRWgVQAAr2SjZsDf7xVsdgPIWxSn0EzyIS6Y-Z_veTWYCB6ho72TW9Srxxqhav5xKIFtVCO37HdaBMvd9L3o3a3UEhsOupvqIXaktl75vUVnVC2Ki2IQAV77n3SC56j1ctpPOJYbYho4m0QVQ0IrIxsze9Cy2iHCzD7Rhv8AV-D7U6IXPKrqcSGWMTmrIkrbmPTEYCQTKGWfC_QMQJVYcjWuK_SCkA3YfHKQRlXiwsOXbMKinMg_jzKwaDLrEYciLpaxiOx051sHRW579UaH1y6VFO12mcNc7WemIAUi6oaE9Cj4trrmwdo3IdJpj4HG_mMkr6GUszbP9PZC53UIIZ6HjVnLpnfgVROiG36lKasdpuQPP2ELmizxobj0695krUEW4WogiJMI9LRGhl7wXZo";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
