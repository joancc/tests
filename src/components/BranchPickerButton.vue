<template>
  <div>
    <a class="button is-report" @click="handleShowMenu">
      <span class="icon">
        <i class="fas fa-bars"></i>
      </span>
      <span>Menú</span>
    </a>
    <BranchPicker v-if="showMenu" :handleShowMenu="handleShowMenu"/>
  </div>
</template>

<script>
import BranchPicker from "./BranchPicker";
export default {
  name: "BranchPickerButton",
  components: {
    BranchPicker
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    handleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.button {
  margin-top: 5em;
}
</style>


