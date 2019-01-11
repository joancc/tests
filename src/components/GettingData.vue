<template>
  <!-- selecciona sucursal -->
  <div class="select-branch">
    <WelcomeBack></WelcomeBack>
    <div class="columns">
      <CompaniesComponent
        :componentName="this.componentName"
        :componentIcon="this.componentIcon"
        :enterpriseData="this.companyData"
        @enterpriseBranches="messageBranches($event)"
      ></CompaniesComponent>
      <BranchesComponent :isBranch="branches" v-if="branches.length != 0"></BranchesComponent>
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
      componentIcon: "companies",
      branches: [],
      companyData: []
    };
  },
  methods: {
    async init() {
      let urlBasic =
        "https://api-test.gestionix.com/api/v3/users/authentication";
      let urlUser = "https://api-test.gestionix.com/api/v3/users/";
      let urlCompany = "https://api-test.gestionix.com/api/v3/users/companies";

      let authenticationPromise = await axios.post(urlBasic, {
        user: "qa@gestionix.com",
        password: "gestionix"
      });

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + authenticationPromise.data.access_token;

      let usersPromise = await axios.get(urlUser, {});

      let companyPromise = await axios.get(urlCompany, {});
      this.companyData = companyPromise.data;
      return this.companyData;
    },
    async messageBranches(companyId) {
      let urlBranch = "https://api-test.gestionix.com/api/v3/branch_offices/?";

      axios.defaults.headers.common["Company"] = companyId;

      let branchesPromise = await axios.get(urlBranch, {});
      this.branches = branchesPromise.data;
      return this.branches;
    }
  },
  mounted() {
    this.init();
  }
};
</script>