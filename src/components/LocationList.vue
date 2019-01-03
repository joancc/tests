<template>
  <div class="column is-one-third" v-if="branchLocation.length >=1">
    <div class="select-title">
      <div class="icon location"></div>
      <h4>Ubicación</h4>
    </div>
    {{branchLocation}}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "LocationList",
  computed: {
    ...mapGetters(["branchLocation"])
  }
};
</script>
