<template>
  <!--Is needed to change the company class for warehouse class if needed-->
  <button class="select-item" :disabled="!isactive ? '' : disabled">
    <!-- The button has or not a disabled property-->
    <div class="info">
      <p>
        <strong>{{enterpriseName}}</strong>
        <!--Find the way of use isactive to active the display none property-->
        <!--<span v-bind:style="{ display: none }"></span>-->
        <span v-bind:class="{'on': isactive}"></span>
        <i v-bind:class="{'fas fa-lock': !isactive}"></i>
        <span v-if="keyType == 'RFC'">{{keyType}}: {{rfc}}</span>
        <span v-else-if="keyType == 'Clave'">{{keyType}}: {{warehouseKey}}</span>
      </p>
    </div>
    <ItemCompanyDisabled v-if="isactive == false"></ItemCompanyDisabled>
  </button>
</template>

<script>
import ItemCompanyDisabled from "./ItemCompanyDisabled.vue";

export default {
  props: {
    companyId: Number,
    companyName: String,
    companyTask: String,
    gettingBranches: Array
  },
  components: {
    ItemCompanyDisabled: ItemCompanyDisabled
  },
  data: function() {
    return {
      enterpriseName: "",
      isactive: true,
      keyType: "RFC",
      rfc: ""
    };
  },
  mounted() {
    this.enterpriseName = this.companyName;
    this.rfc = this.companyTask;
  } /*
  computed: {
    getShops() {
      return this.gettingBranches.filter(branch => branch.type == "Shop");
    },
    getStore() {
      return this.gettingBranches.filter(branch => branch.type == "Store");
    },
    getOffice() {
      return this.gettingBranches.filter(branch => branch.type == "Office");
    }
  },
  methods: {
    getBranches() {
      let shopsAvailable = this.getShops; // it should be the branch filtered by company
      this.$emit("enterpriseShops", shopsAvailable);
      this.$emit("itemSelected", true);
    }
  }*/
};
</script>