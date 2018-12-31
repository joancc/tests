<template>
  <div class="column is-one-third">
    <div class="select-title">
      <div class="icon companies"></div>
      <h4>Empresas</h4>
    </div>
    <ListItem v-for="company in companiesList" :item="company" :key="company.company_id"/>
  </div>
</template>
<script>
import ListItem from "./ListItem";
import { mapGetters, mapState } from "vuex";

export default {
  name: "CompanyList",
  components: {
    ListItem
  },
  created() {
    this.$store.dispatch("getCompaniesList");
  },
  computed: {
    ...mapGetters(["companiesList"])
  }
};
</script>
