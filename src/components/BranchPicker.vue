<template>
  <div class="select-branch">
    <div class="columns">
      <CompanyList class="column companies is-half"/>
      <StoreList :class="{'is-hidden': showStoreColumn}" class="column branches is-half"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CompanyList from "./CompanyList.vue";
import StoreList from "./StoreList.vue";

export default {
  name: "BranchPicker",
  computed: {
    ...mapGetters(["showStoreColumn"])
  },
  components: {
    CompanyList,
    StoreList
  }
};
</script>