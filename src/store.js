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
  setLocationList: (state, payload) => {
    state.locationList = payload;
  },
  setShowStoreColumn: (state, payload) => {
    state.showStoreColumn = payload;
  },
  setshowLocationColumn: (state, payload) => {
    state.showLocationColumn = payload;
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
    const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY1NDkxMzIsImV4cCI6MTU0NjU4OTEzMiwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0NjU0OTEzMiwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.Exl0Zou-SXJN9r7KPctN19yyCQjERREl4wy3__T88atYF4AH3SySCMWUlh7I_qJBISlhfuGKHmqGNUrjR0a0YvBkFKHomBSRO3bNNUQF23NQo-67kLylWEem1gIueiGn1lf5XtKwSE_ZtFgb3b_HDxkxNqjKYOE9Quu4URbypxt2oTpJOLlwdgQ2jelFiT4H__rbr1ZsGSEN4xss9HnTg53-5Jmv0UhqWnRjrjy0QJO-FhBZHyhai-fZNjITMcygbXPRi3W5TytjPpgD_8olygJTMh5WhoZxyIFv-YjSpieAAl7iNoivPzNgEPuHOBshrAbZJtEJjFJBKHQDUzIj2Xn-ai-SIjibHW823VhW7btiKsoJYG5cW398s657vZuehIYohs3E-65Ktnf3CYIWxLM-IAwCkU6b58v7ifuRKuXmil5k_vqQYl1dlHq-Tp5I5D0i34OKqmnPKhbwO3PXrVlR2xIijFuuTnZwBIAdj96Q7vyCWjSjGM9lFLaVcoEQlaJ5xezUlDBavr3q0MiKpUA11ACOncsQNF3F_1c64YPcdTrbnUmDEpAOD-CupvrfKoz-0STlsdBds8DE95e5rj5mLkqb0rpKTywdZpR_KBp2fzZm-Hu6DB40zpoMEbnrDY6aloMfFyHfvNL9ipMTZyfNrC9eiezsV9zk2ir6zx8";
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
    const locations = state.branchList.filter(location => {
      return location.branch_id === payload
    });
    commit('setLocationList', locations);
    commit('setshowLocationColumn', !state.showLocationColumn);
  },
  getCompaniesFromServer: ({
    commit
  }) => {
    const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY1NDkxMzIsImV4cCI6MTU0NjU4OTEzMiwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0NjU0OTEzMiwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.Exl0Zou-SXJN9r7KPctN19yyCQjERREl4wy3__T88atYF4AH3SySCMWUlh7I_qJBISlhfuGKHmqGNUrjR0a0YvBkFKHomBSRO3bNNUQF23NQo-67kLylWEem1gIueiGn1lf5XtKwSE_ZtFgb3b_HDxkxNqjKYOE9Quu4URbypxt2oTpJOLlwdgQ2jelFiT4H__rbr1ZsGSEN4xss9HnTg53-5Jmv0UhqWnRjrjy0QJO-FhBZHyhai-fZNjITMcygbXPRi3W5TytjPpgD_8olygJTMh5WhoZxyIFv-YjSpieAAl7iNoivPzNgEPuHOBshrAbZJtEJjFJBKHQDUzIj2Xn-ai-SIjibHW823VhW7btiKsoJYG5cW398s657vZuehIYohs3E-65Ktnf3CYIWxLM-IAwCkU6b58v7ifuRKuXmil5k_vqQYl1dlHq-Tp5I5D0i34OKqmnPKhbwO3PXrVlR2xIijFuuTnZwBIAdj96Q7vyCWjSjGM9lFLaVcoEQlaJ5xezUlDBavr3q0MiKpUA11ACOncsQNF3F_1c64YPcdTrbnUmDEpAOD-CupvrfKoz-0STlsdBds8DE95e5rj5mLkqb0rpKTywdZpR_KBp2fzZm-Hu6DB40zpoMEbnrDY6aloMfFyHfvNL9ipMTZyfNrC9eiezsV9zk2ir6zx8";
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
  locationList: [],
  showStoreColumn: true,
  showLocationColumn: true,
  showRequest: false,
  requestId: "",
};

export const getters = {
  companiesFromServer: state => state.companiesFromServer,
  branchList: state => state.branchList,
  locationList: state => state.locationList,
  showStoreColumn: state => state.showStoreColumn,
  showLocationColumn: state => state.showLocationColumn,
  requestId: state => state.requestId,
  showRequest: state => state.showRequest
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});