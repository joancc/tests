<template>
  <div class="select-branch">
    <div class="outer-20-b">
      <a href="#">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList :companies="companies" :handleSelectedItem="handleSelectedItem"/>
      <BranchesList :branches="companyBranches" :handleSelectedItem="handleSelectedItem"/>
      <LocationList/>
    </div>
  </div>
</template>
<script>
import CompanyList from "./CompanyList.vue";
import BranchesList from "./BranchesList.vue";
import LocationList from "./LocationList.vue";
import data from "../data.js";

export default {
  name: "BranchPicker",
  data() {
    return {
      companiesFromServer: data,
      activeCompanyId: 1,
      companyBranches: []
    };
  },
  computed: {
    companies() {
      return this.companiesFromServer.map(company => {
        return {
          ...company,
          ...{ selected: company.id === this.activeCompanyId }
        };
      });
    }
  },
  methods: {
    handleSelectedItem(id) {
      this.activeCompanyId = id;
      this.companiesFromServer.forEach(company => {
        if (company.id === id) {
          this.companyBranches = company.branches;
        }
      });
    }
  },
  components: {
    CompanyList,
    BranchesList,
    LocationList
  }
};
</script>
