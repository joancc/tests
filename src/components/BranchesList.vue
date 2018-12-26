<template>
  <div class="column">
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
    </div>
    <ListItem
      v-for="branch in filterWarehouses"
      :item="branch"
      :handleSelectedItem="handleSelectedItem"
      :key="branch.id"
    />
    <hr>
    <div class="select-title">
      <div class="icon offices"></div>
      <h4>Oficinas</h4>
    </div>
    <ListItem
      v-for="branch in filterOffices"
      :item="branch"
      :handleSelectedItem="handleSelectedItem"
      :key="branch.id"
    />
    <hr>
    <div class="select-title">
      <div class="icon stores"></div>
      <h4>Tiendas</h4>
    </div>
    <ListItem
      v-for="branch in filterStores"
      :item="branch"
      :handleSelectedItem="handleSelectedItem"
      :key="branch.id"
    />
  </div>
</template>
<script>
import ListItem from "./ListItem";
export default {
  name: "BranchesList",
  props: {
    branches: {
      type: Array,
      required: true
    },
    handleSelectedItem: {
      type: Function,
      require: true
    }
  },
  components: {
    ListItem
  },
  computed: {
    filterWarehouses() {
      return this.branches.filter(branch => {
        return branch.type === "warehouse";
      });
    },
    filterOffices() {
      return this.branches.filter(branch => {
        return branch.type === "office";
      });
    },
    filterStores() {
      return this.branches.filter(branch => {
        return branch.type === "store";
      });
    }
  }
};
</script>
