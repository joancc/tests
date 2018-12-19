<template>
  <div>
    <a class="button has-text-white has-background-report is-report">
      <span class="icon">
        <i class="fas fa-ban"></i>
      </span>
      <span>Cancelar</span>
    </a>
    <a
      class="button has-text-white has-background-income is-income"
      :class="{'disabled': isDisabled}"
    >
      <span class="icon">
        <i class="fas fa-arrow-circle-right"></i>
      </span>
      <span>Enviar</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {
      isDisabled: true
    };
  },
  mounted() {
    this.$root.$on("ActiveButton", lengthName => {
      if (lengthName < 5) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    });
  }
};
</script>
