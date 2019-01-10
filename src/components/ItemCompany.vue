<template>
  <button class="select-item" :disabled="!this.companyActive">
    <div class="info">
      <p>
        <strong>{{this.companyName}}</strong>
        <!--<span v-bind:style="{ display: none }"></span>-->
        <span v-bind:class="{'on': this.companyActive}"></span>
        <i v-bind:class="{'fas fa-lock': !this.companyActive}"></i>
        <span v-if="this.keyType == 'RFC'">{{this.keyType}}: {{this.companyTask}}</span>
      </p>
    </div>
    <ItemCompanyDisabled v-if="!this.companyActive"></ItemCompanyDisabled>
  </button>
</template>

<script>
import ItemCompanyDisabled from "./ItemCompanyDisabled.vue";

export default {
  props: {
    companyId: Number,
    companyName: String,
    companyTask: String,
    companyActive: Boolean
  },
  components: {
    ItemCompanyDisabled: ItemCompanyDisabled
  },
  data: function() {
    return {
      keyType: "RFC"
    };
  }
};
</script>