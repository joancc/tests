<template>
  <div id="app">
    <SomeComponent msg="Welcome to Your Vue.js App"/>
    <SearcherInput/>
  </div>
</template>

<script>
import SomeComponent from "./components/SomeComponent.vue";
import SearcherInput from "./components/SearcherInput.vue";

export default {
  name: "app",
  components: {
    SomeComponent,
    SearcherInput
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
  padding: 0 200px;
}
</style>
