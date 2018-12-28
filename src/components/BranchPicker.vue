<template>
  <div class="select-branch">
    <div class="outer-20-b">
      <a href="#" @click="handleShowMenu">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList
        :companies="companies"
        :handleSelectedItem="handleSelectedItem"
        :handleRequest="{handleSelectedRequest, idRequest, selectedRequest}"
      />
      <BranchesList
        :branches="branches"
        :handleSelectedItem="handleSelectedBranch"
        :handleRequest="{handleSelectedRequest, idRequest, selectedRequest}"
      />
      <LocationList
        :locations="branchLocations"
        :handleSelectedItem="handleSelectedLocation"
        :handleRequest="{handleSelectedRequest, idRequest, selectedRequest}"
      />
    </div>
  </div>
</template>testingjavascript
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
      branchLocations: [],
      idRequest: 0,
      selectedRequest: false
    };
  },
  props: {
    handleShowMenu: {
      type: Function,
      required: true
    }
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
    },
    handleSelectedRequest(requestId) {
      this.idRequest = requestId;
      this.selectedRequest = !this.selectedRequest;
    }
  },
  components: {
    CompanyList,
    BranchesList,
    LocationList
  }
};
</script>
<style scoped>
.select-branch {
  margin-top: -45px;
}
</style>

