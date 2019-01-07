<template>
  <div>
    <div class="select-title">
      <div class="icon companies"></div>
      <h4>Empresas</h4>
    </div>
    <ListItem v-for="company in companiesFromServer" :company="company" :key="company.key"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "@/components/ListItem.vue";

export default {
  name: "CompanyList",
  created() {
    this.$store.dispatch("getCompaniesFromServer");
  },
  computed: {
    ...mapGetters(["companiesFromServer"])
  },
  components: {
    ListItem
  }
};
</script>