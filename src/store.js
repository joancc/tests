import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const mutations = {
  setCompaniesList: (state, payload) => {
    state.companiesFromServer = payload;
  },
  setBranchList: (state, payload) => {
    state.branchList = payload;
  },
  setShowStoreColumn: (state, payload) => {
    state.showStoreColumn = payload;
  },
  setRequestId: (state, payload) => {
    state.requestId = payload;
  },
  setshowRequest: (state, payload) => {
    state.showRequest = !payload;
  }
};

export const actions = {
  handleRequest({
    commit,
    state
  }, payload) {
    commit('setshowRequest', state.showRequest);
    commit('setRequestId', payload);
  },
  handleCompanySelect({
    commit,
    state
  }, payload) {
    const companies = state.companiesFromServer.map(company => {
      return {
        ...company,
        ...{
          active: company.company_id === payload
        }
      }
    });
    commit("setCompaniesList", companies);
    const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY4NzQ0OTQsImV4cCI6MTU0NjkxNDQ5NCwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRlc3QuZ2VzdGlvbml4LmNvbSIsImF1ZCI6WyJodHRwczovL2F1dGgtdGVzdC5nZXN0aW9uaXguY29tL3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0Njg3NDQ5NCwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.eUdieIrTL7GjAzvKMj5f4pCzAmChetdPlcWQPl-_-pWHE-mZZhMBCA-uR_ruYdlsn8LJrzT1_FLt2LV8gijkpXf-xuVzej5Qo6B5iXaicHeQYJnagvDt7_knAU_Y4ly8fvP10seo_nhRZHiQAs4q0cjbml5D4hq-DdiLaYcsS1okNq2XrqN4JAiVPy2JBA4Uv5PPodRbPpo0ru392K_hSpeJFicNXN8EQbyBvEYxVaEbmjQWuq7vnAPY_4Afo0p2FxDnGX9TOpb1kCU0cM8De35l5EG90eVOK2aWYwMi5zW7lQuKnW9R1jiuQQdrQW39tVuOV9ABrl7GY6grsj1nWnywfNxRHQI8C-8wFJxLBeaTMfbq0HtryulGzIqPspBXwkXxiJBufHDHAYgOLCo7hNySuwpcVNX2XFKKoDwQxGYRhelZqxsK5NkoAM5Ukq5d7JH61sMMcjqA9aFfLHgVLY0xF51vHFd_r6b2QKWNyZ8LGK04vW6BayLBMqBvQtlK6HMz_0N7j2cxrTxiRT1NC-UWhEd4iOlZFdj1kuYewlDNDggqQs48tQ7f1XpYGHBwFPLY9XudpzFxUj8ZGUkSPGPDguyNoSGkrbUs0hpGBQpbUonzasZakmFNSVbS1pD62h926BLXxlfp7X2zy6KxrMo9snl4Gbo0QVYo83N0BnU";
    Axios.get("https://api-test.gestionix.com/api/v3//branch_offices/?", {
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Company: payload
      }
    })
      .then(resp => {
        commit("setBranchList", resp.data);
        commit('setShowStoreColumn', !state.showStoreColumn);
      })
  },
  handleStoreSelect({
    commit,
    state
  }, payload) {
    const stores = state.branchList.map(store => {
      return {
        ...store,
        ...{
          status: store.branch_id === payload
        }
      }
    });
    commit("setBranchList", stores);
  },
  getCompaniesFromServer: ({
    commit
  }) => {
    const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY4NzQ0OTQsImV4cCI6MTU0NjkxNDQ5NCwiaXNzIjoiaHR0cHM6Ly9hdXRoLXRlc3QuZ2VzdGlvbml4LmNvbSIsImF1ZCI6WyJodHRwczovL2F1dGgtdGVzdC5nZXN0aW9uaXguY29tL3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0Njg3NDQ5NCwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.eUdieIrTL7GjAzvKMj5f4pCzAmChetdPlcWQPl-_-pWHE-mZZhMBCA-uR_ruYdlsn8LJrzT1_FLt2LV8gijkpXf-xuVzej5Qo6B5iXaicHeQYJnagvDt7_knAU_Y4ly8fvP10seo_nhRZHiQAs4q0cjbml5D4hq-DdiLaYcsS1okNq2XrqN4JAiVPy2JBA4Uv5PPodRbPpo0ru392K_hSpeJFicNXN8EQbyBvEYxVaEbmjQWuq7vnAPY_4Afo0p2FxDnGX9TOpb1kCU0cM8De35l5EG90eVOK2aWYwMi5zW7lQuKnW9R1jiuQQdrQW39tVuOV9ABrl7GY6grsj1nWnywfNxRHQI8C-8wFJxLBeaTMfbq0HtryulGzIqPspBXwkXxiJBufHDHAYgOLCo7hNySuwpcVNX2XFKKoDwQxGYRhelZqxsK5NkoAM5Ukq5d7JH61sMMcjqA9aFfLHgVLY0xF51vHFd_r6b2QKWNyZ8LGK04vW6BayLBMqBvQtlK6HMz_0N7j2cxrTxiRT1NC-UWhEd4iOlZFdj1kuYewlDNDggqQs48tQ7f1XpYGHBwFPLY9XudpzFxUj8ZGUkSPGPDguyNoSGkrbUs0hpGBQpbUonzasZakmFNSVbS1pD62h926BLXxlfp7X2zy6KxrMo9snl4Gbo0QVYo83N0BnU";
    Axios.get("https://api-test.gestionix.com/api/v3/users/companies", {
      headers: {
        Authorization: `Bearer ${currentToken}`
      }
    })
      .then(resp => {
        const companies = resp.data.map(company => {
          return {
            ...company,
            ...{
              status: true
            }
          };
        });
        commit("setCompaniesList", companies);
      })
      .catch(err => console.log(err));
  },
};

export const state = {
  companiesFromServer: [],
  branchList: [],
  showStoreColumn: true,
  showRequest: false,
  requestId: "",
};

export const getters = {
  companiesFromServer: state => state.companiesFromServer,
  branchList: state => state.branchList,
  showStoreColumn: state => state.showStoreColumn,
  requestId: state => state.requestId,
  showRequest: state => state.showRequest
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});