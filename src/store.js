import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companiesFromServer: [],
    branchList: []
  },
  mutations: {
    setCompaniesList: (state, payload) => {
      state.companiesFromServer = payload;
    },
    setBranchList: (state, payload) => {
      state.branchList = payload;
    }
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
      const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDYyODMxMDYsImV4cCI6MTU0NjMyMzEwNiwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0NjI4MzEwNiwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.mhPWUSAgtzWYJilIF5_LCwJ2VmNzqd7IT6g3sAROsUqe-HhZJuoLbKK0b6TYGPvmBfG1PLRQ-qmrAUptZcJl_5x_sOkEKlbXESvFkZ0bE8Uu3RHMHEnp4A4hN9dYHqMtPciQpSeQpOM2z113nOaqRCko26_kJEZaevEZ2hhBDK6k1mVUaW2NOZx9Tr0on0SrEceu1Dt84ahZYCzNVrE3mSM_1yIrPYdCZ_rA0eIjETGmBEJCVv_sNOL9a4voKh8urz1aClFI0r_dA5LAA-KB-Vj3DfgE_0MW-Yy72bNXhWevc5T7yC9rby3py9jFMfeYFOG5AjU_URjQs6mSJxzEXnFkRmWV2LfFbp7vlxxWGCnBYsnN06bGEt87d2KMXnQ3z264t9rKAFJfWRjY34IUgbqNdbJPxTP3Z1DC_qjIEskUBoZeloxSK2xqIzSdivlXGxYGhsFCK9skr7s-O2AY0lA38QXvLMNyFZo0kfVXGItOc3Fdv_782nI4e2QR-eNRU-sSat4skoyPLyc0RN9prptkTfTB-Jw3JsEharSjTx77a-VXoX2bz6kLRK-MvFO-z8NfSqGWeuZeT7GN_wi_vMfMFN9SWqaR2zT41IWW49LXw5iaOtniQeUm8kzTfuHrFutm4BfS7LIfHnRK_fY0f-PdY5A6yihWzYkSukvana0";
      Axios.get("https://api-test.gestionix.com/api/v3//branch_offices/?", {
          headers: {
            Authorization: `Bearer ${currentToken}`,
            Company: payload
          }
        })
        .then(resp => {
          commit("setBranchList", resp.data);
        })
    },
    getCompaniesFromServer: ({
      commit
    }) => {
      const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDYyODMxMDYsImV4cCI6MTU0NjMyMzEwNiwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0NjI4MzEwNiwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.mhPWUSAgtzWYJilIF5_LCwJ2VmNzqd7IT6g3sAROsUqe-HhZJuoLbKK0b6TYGPvmBfG1PLRQ-qmrAUptZcJl_5x_sOkEKlbXESvFkZ0bE8Uu3RHMHEnp4A4hN9dYHqMtPciQpSeQpOM2z113nOaqRCko26_kJEZaevEZ2hhBDK6k1mVUaW2NOZx9Tr0on0SrEceu1Dt84ahZYCzNVrE3mSM_1yIrPYdCZ_rA0eIjETGmBEJCVv_sNOL9a4voKh8urz1aClFI0r_dA5LAA-KB-Vj3DfgE_0MW-Yy72bNXhWevc5T7yC9rby3py9jFMfeYFOG5AjU_URjQs6mSJxzEXnFkRmWV2LfFbp7vlxxWGCnBYsnN06bGEt87d2KMXnQ3z264t9rKAFJfWRjY34IUgbqNdbJPxTP3Z1DC_qjIEskUBoZeloxSK2xqIzSdivlXGxYGhsFCK9skr7s-O2AY0lA38QXvLMNyFZo0kfVXGItOc3Fdv_782nI4e2QR-eNRU-sSat4skoyPLyc0RN9prptkTfTB-Jw3JsEharSjTx77a-VXoX2bz6kLRK-MvFO-z8NfSqGWeuZeT7GN_wi_vMfMFN9SWqaR2zT41IWW49LXw5iaOtniQeUm8kzTfuHrFutm4BfS7LIfHnRK_fY0f-PdY5A6yihWzYkSukvana0";
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
    branchList: state => state.branchList
  }
});