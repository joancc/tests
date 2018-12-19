<template>
  <div>
    <h1>{{msg}}</h1>
    <input
      type="text"
      @input="handleName"
      :class="{'valid': isValid, 'error': isError}"
      :placeholder="placeholder"
      v-model="name"
    >
  </div>
</template>
<script>
export default {
  name: "Input",
  props: ["msg", "placeholder"],
  data() {
    return {
      name: "",
      isValid: false,
      isError: false
    };
  },
  methods: {
    handleName() {
      this.$root.$emit("ActiveButton", this.name.length);
      if (this.name.length < 5) {
        this.isError = true;
        this.isValid = false;
      } else {
        this.isError = true;
        this.isValid = true;
      }
    }
  }
};
</script>
