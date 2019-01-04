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
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFCRTVGOTQ2MTI0NTMyMkYxOTE4RTZERDVBREIzOTI4REFBMjg1RDciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJHLVg1UmhKRk1pOFpHT2JkV3RzNUtOcWloZGMifQ.eyJuYmYiOjE1NDY2MTU0NjEsImV4cCI6MTU0NjY1NTQ2MSwiaXNzIjoiaHR0cHM6Ly9nZXN0aW9uaXgtaWRlbnRpdHlzZXJ2aWNlLW9hdXRoMi1zZXJ2ZXItdGVzdC5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6WyJodHRwczovL2dlc3Rpb25peC1pZGVudGl0eXNlcnZpY2Utb2F1dGgyLXNlcnZlci10ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImdlc3Rpb25peF9hcGkiXSwiY2xpZW50X2lkIjoiR2VzdGlvbml4LUFwaSIsInN1YiI6IjZkYzc1NTRkLTU0ZmYtNGRkMC04Njg0LTQ3NTRlNjdiN2IyOSIsImF1dGhfdGltZSI6MTU0NjYxNTQ2MSwiaWRwIjoibG9jYWwiLCJuYW1lIjpbIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsIkFsZnJlZG8iLCJBbGZyZWRvIiwiQWxmcmVkbyIsImF4ZWwiLCJheGVsIiwia2xrbGtsaWtsa2wiLCJwcm92ZWVkb3IiLCJwcm92ZWVkb3IiXSwiZW1haWwiOlsiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIiwiZGVtb0BnZXN0aW9uaXguY29tIl0sInNjb3BlIjpbImdlc3Rpb25peF9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.Z0GMhHUV46tkKAnyE4V12tL1F8BZPXYlK84x_b_bBCuhgvH7fYKWxH9502SxXWRmySbZ7XmRFFrf54acSyRtG5TLXEqz56hZybO6ZaXf981yPxC4b3X66qBew66FkODNfS0Cl2W92Gg4A1OkKQxThjH69AEWZM0vd7CNLGFJda2-kw4-uDDRKAhnPn8IQtseLhQAyBnCisRmQQ2W5vVY14ydpenDaZkRl42KnRmiq0MEK5BjgDdHGseEjq_DZuXQL7YXAayPGB2hgUG8p2egMFxEb2E0JmvXUt4FJ9J8Ie668-_yTOd1n8scA66NlH1fKbTNIEHALxxGjHpDYgzKlhhpRovyG9SnSJ-FsRRmH4MIuYDU2DTsjK3mv74JhK0VLCKX4QX5G6PB7v2QazRzH3yX7Ddvf4fRL7t44aSqNdJ1ZhokS7g8VRG75h_iqTMKbTPx_KZeXa8bqIcQygM--gZ8tAlLH5dzelIxfvNOlpP5jwcveUirSoeJJRCudoMGVRJL-WWnSoWSTClEL8H5TkLVMHbyoAzSoj2e5Y7EBaVgCnLT5zXYUBrHdz-EON0QnSSpPMOijpouVKBM3KN2oheS3T1lOgB8mUIQA_TISyUo41_AghckdsIwp6gawAQ_wcbsyB2zKR2pxDLl_YJ90wHM7FpXNIZBNiAQdgG5Bm4";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
