import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companiesFromServer: [],
    branchList: [],
    locationList: [],
    showStoreColumn: true,
    showLocationColumn: true
  },
  mutations: {
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
  },
  actions: {
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
      const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY0NDIzNDAsImV4cCI6MTU0NjQ4MjM0MCwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0NjQ0MjM0MCwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.IjaKX4JIKi5_fbamPNCax1tt4TGelIEaCsduY-UmCOw00k5T1qVr3k3QaBXRUH-OnCbeGyE2PHXMkg__c2WUL474d2O3kan5wQFiAMwrh2xicGUQ_T3_d9uIKUyV4HlXRefY3eAyYfIFigh1-22MowKr0l6e_xp_MTbUy1VzBQTWSy2lovvXOC4zQGKd3qFOjvI2idRFXyv_kqxBJBwpG8hh6s2H5IgRMnm2DfqP5BE32Yz_8bALpeE9T1IGEtTD5RaZC3o05LQhIu3W0L_5odelWaRcDg2Ovr5l6uEfvPfioUTcaF5Y1te9mohFGrnkP22O-MqucF0cQvi0U57XcDRy6lqZKhVpUpAXlZHnzIcikY_34hps-vIw_LtBPSNZW3BXJlbegdgSR4KI82ps-5Zo7RnTcg5ZHylPZnLkYOb8EVBNbK4Z8aeF46h6M-J16MqmwWHFMTMFWYl5HUA2IDiUGZg1XNYqLMxeCvnlEikUALK1CZmA1iQjT2JTxY0GSgM0vL_h_M9xLbNrkbbwBA52RNcE-NHEOABx-jskeAagUVCsBIjcgYz56pK1sBRugARwZ6ky61HGlfCrft78F8WbuhqvFVtDk6BbK7hs6MoKADs0_CHJd2UfEAXTNgXZjjx-Ik5Cyrqy8fn3YVi4JYdtkx4GXLnD-rOzTdIEsDg";
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
            active: store.branch_id === payload
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
      const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY0NDIzNDAsImV4cCI6MTU0NjQ4MjM0MCwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0NjQ0MjM0MCwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.IjaKX4JIKi5_fbamPNCax1tt4TGelIEaCsduY-UmCOw00k5T1qVr3k3QaBXRUH-OnCbeGyE2PHXMkg__c2WUL474d2O3kan5wQFiAMwrh2xicGUQ_T3_d9uIKUyV4HlXRefY3eAyYfIFigh1-22MowKr0l6e_xp_MTbUy1VzBQTWSy2lovvXOC4zQGKd3qFOjvI2idRFXyv_kqxBJBwpG8hh6s2H5IgRMnm2DfqP5BE32Yz_8bALpeE9T1IGEtTD5RaZC3o05LQhIu3W0L_5odelWaRcDg2Ovr5l6uEfvPfioUTcaF5Y1te9mohFGrnkP22O-MqucF0cQvi0U57XcDRy6lqZKhVpUpAXlZHnzIcikY_34hps-vIw_LtBPSNZW3BXJlbegdgSR4KI82ps-5Zo7RnTcg5ZHylPZnLkYOb8EVBNbK4Z8aeF46h6M-J16MqmwWHFMTMFWYl5HUA2IDiUGZg1XNYqLMxeCvnlEikUALK1CZmA1iQjT2JTxY0GSgM0vL_h_M9xLbNrkbbwBA52RNcE-NHEOABx-jskeAagUVCsBIjcgYz56pK1sBRugARwZ6ky61HGlfCrft78F8WbuhqvFVtDk6BbK7hs6MoKADs0_CHJd2UfEAXTNgXZjjx-Ik5Cyrqy8fn3YVi4JYdtkx4GXLnD-rOzTdIEsDg";
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
  },
  getters: {
    companiesFromServer: state => state.companiesFromServer,
    branchList: state => state.branchList,
    locationList: state => state.locationList,
    showStoreColumn: state => state.showStoreColumn,
    showLocationColumn: state => state.showLocationColumn
  }
});