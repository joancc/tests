<template>
  <div>
    <a class="button is-report">
      <span class="icon">
        <i class="fas fa-ban"></i>
      </span>
      <span>Cancelado</span>
    </a>
    <a class="button is-income is-outlined" @click="openAlert" :class="{'disabled': isDisabled}">
      <span class="icon">
        <i class="fas fa-check"></i>
      </span>
      <span>Enviar</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "SomeComponent",
  data() {
    return {
      isDisabled: true
    };
  },
  methods: {
    openAlert() {
      alert("Waaaa");
    }
  },
  mounted() {
    this.$root.$on("validButton", validation => {
      if (validation > 0) {
        this.isDisabled = false;
      } else if (validation < 1) {
        this.isDisabled = true;
      }
    });
  }
};
</script>
