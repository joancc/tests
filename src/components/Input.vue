<template>
  <div>
    <h1>{{msg}}</h1>
    <input
      @input="changeClass"
      v-model="newValue"
      type="type"
      :placeholder="msg"
      :class="{'valid': isValid}"
    >
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      isValid: false,
      newValue: ""
    };
  },
  methods: {
    changeClass() {
      this.$root.$emit("validButton", this.newValue.length);
      if (this.newValue.length > 0) {
        this.isValid = !this.isValid;
      }
    }
  },
  props: ["msg"]
};
</script>