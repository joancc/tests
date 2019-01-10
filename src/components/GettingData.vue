<template>
  <!-- selecciona sucursal -->
  <div class="select-branch">
    <WelcomeBack></WelcomeBack>
    <div class="columns">
      <CompaniesComponent
        :componentName="this.componentName"
        :enterpriseData="showingEnterprises"
        :branchesData="showingBranches"
        @enterpriseShops="messageShops($event)"
        @passingActive="messageActive($event)"
      ></CompaniesComponent>
      <BranchesComponent :activeSignal="activeBranch" :isShop="shops" v-if="shops.length != 0"></BranchesComponent>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CompaniesComponent from "./CompaniesComponent";
import BranchesComponent from "./BranchesComponent";
import WelcomeBack from "./WelcomeBack";

export default {
  components: {
    BranchesComponent: BranchesComponent,
    CompaniesComponent: CompaniesComponent,
    WelcomeBack: WelcomeBack
  },
  data() {
    return {
      componentName: "Empresas",
      activeBranch: false,
      shops: []
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    showingBranches() {
      return JSON.parse(localStorage.getItem("branches"));
    },
    showingEnterprises() {
      return JSON.parse(localStorage.getItem("companies"));
    }
  },
  methods: {
    messageShops(shopArray) {
      this.shops = shopArray;
    },
    messageActive(active) {
      this.activeBranch = active;
    },
    async init() {
      let urlBasic =
        "https://api-test.gestionix.com/api/v3/users/authentication";
      let urlUser = "https://api-test.gestionix.com/api/v3/users/862";
      let urlCompany = "https://api-test.gestionix.com/api/v3/users/companies";
      let urlBranch = "https://api-test.gestionix.com/api/v3/branch_offices/?";
      let ids = [];
      let authenticationPromise = await axios.post(urlBasic, {
        user: "qa@gestionix.com",
        password: "gestionix"
      });

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + authenticationPromise.data.access_token;

      let usersPromise = await axios.get(urlUser, {});

      let companyPromise = await axios.get(urlCompany, {});

      /*axios
      .post(urlBasic, {
        user: "qa@gestionix.com",
        password: "gestionix"
      })
      .then(function(response) {
        axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "access-token"
        );
        axios
          .get(urlUser)
          .then(function(res) {
          })
          .catch(function(err) {
            console.log(err);
          });
        axios
          .get(urlCompany)
          .then(function(resp) {
            for (let i = 0; i < resp.data.length; i++) {
              ids[i] = resp.data[i].company_id;
            }
            axios
              .all(
                ids.map(id => {
                  axios.defaults.headers.common["Company"] = id;
                  axios.get(urlBranch + id);
                })
              )
              .then(
                axios.spread(function(...respu) {
                  localStorage.setItem("idBranches", JSON.stringify(respu));
                })
              );
          })
          .catch(function(err) {
            console.log(err);
          });
      })
      .catch(function(error) {
        console.log(error);
      });*/
    }
  }
};
</script>