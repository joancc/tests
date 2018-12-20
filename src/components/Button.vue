<template>
  <div>
    <a class="button has-text-white has-background-report is-report" @click="handleMenu">
      <span class="icon">
        <i class="fas fa-bars"></i>
      </span>
      <span>Menu</span>
    </a>
    <a
      class="button has-text-white has-background-income is-income"
      :class="{'disabled': isDisabled}"
      @click="handleList"
    >
      <span class="icon">
        <i class="fas fa-arrow-circle-right"></i>
      </span>
      <span>Enviar</span>
    </a>
    <div v-if="menu" class="select-branch">
      <div class="outer-20-b">
        <a @click="handleMenu" href="#">Regresar</a>
      </div>
      <Companies/>
    </div>
  </div>
</template>
<script>
import Companies from "@/components/Companies.vue";

export default {
  name: "Button",
  data() {
    return {
      isDisabled: true,
      menu: false
    };
  },
  components: {
    Companies
  },
  methods: {
    handleList() {
      if (!this.isDisabled) {
        alert("Enviado");
      }
    },
    handleMenu() {
      this.menu = !this.menu;
    }
  },
  mounted() {
    this.$root.$on("ActiveButton", Name => {
      if (Name.length < 5) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    });
  }
};
</script>
