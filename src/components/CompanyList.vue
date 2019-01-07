<template>
  <div>
    <div class="select-title">
      <div class="icon companies"></div>
      <h4>Empresas</h4>
    </div>
    <ListCompany v-for="company in companiesFromServer" :company="company" :key="company.emitter.tax_id"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListCompany from "@/components/ListCompany.vue";

export default {
  name: "CompanyList",
  created() {
    this.$store.dispatch("getCompaniesFromServer");
  },
  computed: {
    ...mapGetters(["companiesFromServer"])
  },
  components: {
    ListCompany
  }
};
</script>