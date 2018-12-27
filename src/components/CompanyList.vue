<template>
  <div class="column is-one-third">
    <div class="select-title">
      <div class="icon companies"></div>
      <h4>Empresas</h4>
    </div>
    <ListItem
      v-for="company in companies"
      :item="company"
      :handleSelectedItem="handleSelectedItem"
      :key="company.id"
    />
  </div>
</template>
<script>
import ListItem from "./ListItem";

export default {
  name: "CompanyList",
  props: {
    companies: {
      type: Array,
      required: true
    },
    handleSelectedItem: {
      type: Function,
      required: true
    }
  },
  components: {
    ListItem
  }
};
</script>
