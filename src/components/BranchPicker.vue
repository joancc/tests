<template>
  <div class="select-branch">
    <div class="outer-20-b">
      <a href="#">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList :companies="companies" :handleSelectedItem="handleSelectedItem"/>
      <BranchesList :branches="branches" :handleSelectedItem="handleSelectedBranch"/>
      <LocationList :locations="branchLocations" :handleSelectedItem="handleSelectedLocation"/>
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
      activeCompanyId: 0,
      activeBranchId: 0,
      activeLocation: 0,
      companyBranches: [],
      branchLocations: []
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
    },
    branches() {
      return this.companyBranches.map(branch => {
        return {
          ...branch,
          ...{ selected: branch.id === this.activeBranchId }
        };
      });
    }
  },
  methods: {
    handleSelectedItem(id) {
      this.activeCompanyId = id;
      this.branchLocations = [];
      this.companiesFromServer.forEach(company => {
        if (company.id === id) {
          this.companyBranches = company.branches;
        }
      });
    },
    handleSelectedBranch(branchId) {
      this.activeBranchId = branchId;
      this.companyBranches.forEach(branch => {
        if (branch.id === branchId) {
          this.branchLocations = branch.locations;
        }
      });
    },
    handleSelectedLocation(locationId) {
      this.activeLocation = locationId;
      console.log(locationId);
    }
  },
  components: {
    CompanyList,
    BranchesList,
    LocationList
  }
};
</script>
