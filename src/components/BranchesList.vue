<template>
  <div class="column is-half" v-if="companyBranches.length >=1">
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
    </div>
    <BranchListItem v-for="branch in filterWarehouses" :item="branch" :key="branch.branch_id"/>
    <hr>
    <div class="select-title">
      <div class="icon offices"></div>
      <h4>Oficinas</h4>
    </div>
    <BranchListItem v-for="branch in filterOffices" :item="branch" :key="branch.branch_id"/>
    <hr>
    <div class="select-title">
      <div class="icon stores"></div>
      <h4>Tiendas</h4>
    </div>
    <BranchListItem v-for="branch in filterStores" :item="branch" :key="branch.branch_id"/>
  </div>
</template>
<script>
import BranchListItem from "./BranchListItem";
import { mapGetters, mapState } from "vuex";
export default {
  name: "BranchesList",
  components: {
    BranchListItem
  },
  computed: {
    ...mapGetters(["companyBranches"]),
    filterWarehouses() {
      return this.companyBranches.filter(branch => {
        return branch.type === "Shop";
      });
    },
    filterOffices() {
      return this.companyBranches.filter(branch => {
        return branch.type === "Office";
      });
    },
    filterStores() {
      return this.companyBranches.filter(branch => {
        return branch.type === "Store";
      });
    }
  }
};
</script>
