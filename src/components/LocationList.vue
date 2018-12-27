<template>
  <div class="column is-one-third" v-if="locations.length >=1">
    <div class="select-title">
      <div class="icon location"></div>
      <h4>Ubicación</h4>
    </div>
    <ListItem
      v-for="location in locations"
      :item="location"
      :key="location.id"
      :handleSelectedItem="handleSelectedItem"
    />
  </div>
</template>
<script>
import ListItem from "./ListItem";
export default {
  name: "LocationList",
  props: {
    locations: {
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
