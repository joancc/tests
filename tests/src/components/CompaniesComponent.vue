<template>
  <div class="column companies is-half">
    <EnterpriseBanner></EnterpriseBanner>
    <ItemCompany></ItemCompany>
    <ItemCompany></ItemCompany>
    <ItemCompany></ItemCompany>
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany.vue";

export default {
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  }
};
</script>

