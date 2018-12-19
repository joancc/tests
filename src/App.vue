<template>
  <div id="app">
    <Input msg="Welcome to Your Vue.js App" placeholder="Enter your name..."/>
    <Button/>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";

export default {
  name: "app",
  components: {
    Button,
    Input
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
  padding: 0 80px;
}
</style>
