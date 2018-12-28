<template>
  <div id="app">
    <BranchPickerButton/>
  </div>
</template>

<script>
import BranchPickerButton from "./components/BranchPickerButton.vue";

export default {
  name: "app",
  components: {
    BranchPickerButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
