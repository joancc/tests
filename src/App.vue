<template>
  <div id="app">
    <SomeComponent msg="Welcome to Your Vue.js App"/>
    <SearchInput/>
    <SideBar/>
  </div>
</template>

<script>
import SomeComponent from "./components/SomeComponent.vue";
import SearchInput from "./components/SearchInput.vue";
import SideBar from "./components/SideBar.vue"
export default {
  name: "app",
  components: {
    SomeComponent,
    SearchInput,
    SideBar
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
