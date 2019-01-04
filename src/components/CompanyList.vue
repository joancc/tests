<template>
  <div class="column is-half">
    <div class="select-title">
      <div class="icon companies"></div>
      <h4>Empresas</h4>
    </div>
    <CompanyListItem v-for="company in companiesList" :item="company" :key="company.company_id"/>
  </div>
</template>
<script>
import CompanyListItem from "./CompanyListItem";
import { mapGetters } from "vuex";

export default {
  name: "CompanyList",
  components: {
    CompanyListItem
  },
  created() {
    this.$store.dispatch("getCompaniesList");
  },
  computed: {
    ...mapGetters(["companiesList"])
  }
};
</script>
