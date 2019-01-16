<template>
  <div class="column companies is-half">
    <EnterpriseBanner :bannerName="this.componentName" :iconName="this.componentIcon"></EnterpriseBanner>
    <div
      class="item company"
      v-for="company in enterpriseData"
      :key="company.company_id"
      @click="messageBranches(company.company_id)"
    >
      <ItemCompany
        :companyId="company.company_id"
        :companyName="company.emitter.business_name"
        :companyTask="company.emitter.tax_id"
        :companyActive="true"
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
    componentIcon: String,
    enterpriseData: Array
  },
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  },
  methods: {
    messageBranches(companyId) {
      this.$emit("enterpriseBranches", companyId);
    }
  }
};
</script>