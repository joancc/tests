<template>
  <div class="column branches is-half" v-bind:class="{ 'is-hidden': !isActive }">
    <!--Render Warehouse information-->
    <EnterpriseBanner :bannerName="'Almacenes'" :showBanner="activeSignal"></EnterpriseBanner>
    <div
      class="item warehouse"
      v-for="warehouseBranch in getStore"
      :key="warehouseBranch.branch_id"
    >
      <ItemCompany
        :companyId="warehouseBranch.branch_id"
        :companyName="warehouseBranch.name"
        :companyTask="warehouseBranch.register_date"
      ></ItemCompany>
    </div>
    <hr>
    <!--Render Office information-->
    <EnterpriseBanner :bannerName="'Oficinas'"></EnterpriseBanner>
    <div class="item warehouse" v-for="oficeBranch in getOffice" :key="oficeBranch.branch_id">
      <ItemCompany
        :companyId="oficeBranch.branch_id"
        :companyName="oficeBranch.name"
        :companyTask="oficeBranch.register_date"
      ></ItemCompany>
    </div>
    <hr>
    <!--Render Shops information-->
    <EnterpriseBanner :bannerName="'Tiendas'"></EnterpriseBanner>
    <div class="item warehouse" v-for="storeBranch in isShop" :key="storeBranch.branch_id">
      <ItemCompany
        :companyId="storeBranch.branch_id"
        :companyName="storeBranch.name"
        :companyTask="storeBranch.register_date"
      ></ItemCompany>
    </div>
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany";
export default {
  props: {
    activeSignal: Boolean,
    isShop: Array
  },
  data: function() {
    return {
      isActive: false
    };
  },
  mounted() {
    this.isActive = this.isShop;
  },
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  },
  computed: {
    getShops() {
      return this.isShop.filter(branch => branch.type == "Shop");
    },
    getStore() {
      return this.isShop.filter(branch => branch.type == "Store");
    },
    getOffice() {
      return this.isShop.filter(branch => branch.type == "Office");
    }
  }
};
</script>