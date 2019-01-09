<template>
  <div class="column companies is-half">
    <EnterpriseBanner :bannerName="this.componentName"></EnterpriseBanner>
    <div
      class="item company"
      v-for="company in enterpriseData"
      :key="company.company_id"
      @click="messageBranches()"
    >
      <ItemCompany
        :companyId="company.company_id"
        :companyName="company.emitter.business_name"
        :companyTask="company.emitter.tax_id"
        :gettingBranches="branchesData"
      ></ItemCompany>
    </div>
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany.vue";

export default {
  props: {
    componentName: String,
    enterpriseData: Array,
    branchesData: Array
  },
  data: function() {
    return {
      indexData: 0
    };
  },
  computed: {
    getShops() {
      return this.branchesData.filter(branch => branch.type == "Shop");
    },
    getStore() {
      return this.branchesData.filter(branch => branch.type == "Store");
    },
    getOffice() {
      return this.branchesData.filter(branch => branch.type == "Office");
    }
  },
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  },
  methods: {
    messageBranches() {
      let shopsAvailable = this.branchesData; // it should be the branch filtered by company
      this.$emit("enterpriseShops", shopsAvailable);
      this.$emit("passingActive", true);
    }
  }
};
</script>