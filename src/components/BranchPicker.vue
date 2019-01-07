<template>
  <div class="select-branch">
    <div class="outer-20-b">
      <a href="#">
        Cerrar
        <i class="far fa-times-circle"></i>
      </a>
    </div>
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
import LocationList from "./LocationList.vue";

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