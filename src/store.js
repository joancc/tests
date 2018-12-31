import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companiesFromServer: [],
    activeCompanyTaxId: "1234567890"
  },
  mutations: {
    setCompaniesList: (state, payload) => {
      state.companiesFromServer = payload;
    },
    setactiveCompanyTaxId: (state, payload) => {
      state.activeCompanyTaxId = payload;
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
      // this.companiesFromServer.forEach(company => {
      //   if (company.key === taxId) {
      //     this.storeList = company.stores;
      //   }
      // });
      // this.showStoreColumn = !this.showStoreColumn;
      // if (!this.showLocationColumn) {
      //   this.showLocationColumn = true;
      // }
    },
    getCompaniesFromServer: ({
      commit
    }) => {
      const currentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDYyNzE4NDIsImV4cCI6MTU0NjMxMTg0MiwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1hcGktdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLWFwaS10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6ImEyZjdmOGY1LTI0ZjktNDU2Yi04Zjg5LWUzN2VmYzQzOWFkMiIsImF1dGhfdGltZSI6MTU0NjI3MTg0MiwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iLCJNYXJjbyBBbnRvbmlvIiwiTWFyY28gQW50b25pbyIsIk1hcmNvIEFudG9uaW8iXSwiZW1haWwiOlsiaG9nYXJAZ2VzdGlvbml4LmNvbSIsImNlc2FyLnZhcmdhc0BnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiY29yZ293YXJlMkBnbWFpbC5jb20iLCJob2dhckBnZXN0aW9uaXguY29tIiwiaG9nYXJAZ2VzdGlvbml4LmNvbSJdLCJzY29wZSI6WyJnZXN0aW9uaXhfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.fo8tSl7GO4baro8rFJ0keMnC9WlpitdPUziF6R8wR-0eDnoTJWIJqDNgEReTYuOzxeKjIal1ijcGseSe52pMIZsv9rw4RruHGgWX-W2kvUHeZTdgBnWiCZpZxWgSwCfQxgWclnpRCZpkyB4LA8uz11tqvzXGRhW3vUWFPSCaPwr0AdRKn9QnONI0l2G2OAAH9AtKyg5Gt__31ZALVXz8GtNJHD1_mbrCtRqt2slyj23kmS5GlXN0opwATXsTpTezKXqlxTJNqMpdlotwMNtCMRX6-CoqtVFA2rHqIdDa918uPQ9-MuJiDUIQhzyaBt0EWlrEfi-qTFwTPcyByPREspOKa1Z0xpif4oQOfXf6r2Z2885RhL1IHL4PXpCMLWjZ958Oqxvfsumeb9msyVo9gejXV969N90eN8HxnswGRIpf4sGnjvorJsyIImiMWvdaVkyU0oJ4VpWBPrcv6KTfNemyCrEVinwrGSGdF7hIJfvdgBJnR2c8duz8OO-mBmDSqg2jdMcIC4pFIKJjwt6AMqXJ1EJfvyaHXQppEwM23IyZ1MUVVUV8K7qom80AY5tFoYZh39LCsbgRCwx8GvqbF-AYnk5fLnTeaI5EFt-J_XohphYfvALOxWoDYgmeXv62P3W4K9_NZgq-HxD9o1fNqTBuOabCBys2upbOxbJS1Kc";
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
    activeCompanyTaxId: state => state.activeCompanyTaxId
  }
});