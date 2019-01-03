<template>
  <div class="select-branch">
    <div class="outer-20-b">
      <a href="#">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList/>
      <BranchesList/>
    </div>
  </div>
</template>
<script>
import CompanyList from "./CompanyList.vue";
import BranchesList from "./BranchesList.vue";
import LocationList from "./LocationList.vue";

export default {
  name: "BranchPicker",
  components: {
    CompanyList,
    BranchesList
  }
};
</script>

