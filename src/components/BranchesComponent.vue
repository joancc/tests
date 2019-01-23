<template>
  <div class="column branches is-half">
    <!--Render Warehouse information-->
    <EnterpriseBanner :bannerName="'Almacenes'" :iconName="'warehouses'"></EnterpriseBanner>
    <div
      class="item warehouse"
      v-for="warehouseBranch in getStore"
      :key="warehouseBranch.branch_id"
    >
      <ItemCompany
        :companyId="warehouseBranch.branch_id"
        :companyName="warehouseBranch.name"
        :companyTask="warehouseBranch.register_date"
        :companyActive="warehouseBranch.active"
      ></ItemCompany>
    </div>
    <hr>
    <!--Render Office information-->
    <EnterpriseBanner :bannerName="'Oficinas'" :iconName="'offices'"></EnterpriseBanner>
    <div class="item warehouse" v-for="oficeBranch in getOffice" :key="oficeBranch.branch_id">
      <ItemCompany
        :companyId="oficeBranch.branch_id"
        :companyName="oficeBranch.name"
        :companyTask="oficeBranch.register_date"
        :companyActive="oficeBranch.active"
      ></ItemCompany>
    </div>
    <hr>
    <!--Render Shops information-->
    <EnterpriseBanner :bannerName="'Tiendas'" :iconName="'stores'"></EnterpriseBanner>
    <div class="item warehouse" v-for="storeBranch in getShops" :key="storeBranch.branch_id">
      <ItemCompany
        :companyId="storeBranch.branch_id"
        :companyName="storeBranch.name"
        :companyTask="storeBranch.register_date"
        :companyActive="storeBranch.active"
      ></ItemCompany>
    </div>
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany";
export default {
  props: {
    isBranch: Array
  },
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  },
  computed: {
    getShops() {
      return this.isBranch.filter(branch => branch.type == "Shop");
    },
    getStore() {
      return this.isBranch.filter(branch => branch.type == "Store");
    },
    getOffice() {
      return this.isBranch.filter(branch => branch.type == "Office");
    }
  }
};
</script>