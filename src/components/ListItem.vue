<template>
  <div class="item company">
    <button
      class="select-item"
      :class="{ active: company.active }"
      @click="handleCompanySelect(company.company_id)"
      v-if="company.status"
    >
      <div class="info">
        <p>
          {{ company.emitter.business_name }}
          <span class="on"></span>
          <span>RFC: {{ company.emitter.tax_id }}</span>
        </p>
      </div>
    </button>
    <button class="select-item" disabled v-if="!company.status">
      <div class="info">
        <span>
          {{company.emitter.business_name}}
          <div class="popover_wrapper">
            <i class="fas fa-lock-alt"></i>
            <div class="push popover_content up">
              <p class="popover_message">
                No tienes
                <strong>permiso</strong> para modificar la información
              </p>
            </div>
          </div>
          <div class="d-block">RFC: {{ company.emitter.tax_id }}</div>
        </span>
      </div>
      <a class="fas fa-question-circle" @click="handleRequest(company.emitter.tax_id)"></a>
    </button>
    <!-- <Request
      :class="{'show': showRequest}"
      v-if="company.emitter.tax_id === requestId"
      :company="company"
    />-->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Request from "@/components/Request.vue";

export default {
  methods: {
    handleCompanySelect(taxId) {
      this.$store.dispatch("handleCompanySelect", taxId);
    },
    handleRequest(id) {
      this.$store.dispatch("handleRequest", id);
    }
  },
  computed: {
    ...mapGetters(["showRequest", "requestId"])
  },
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  name: "ListItem",
  components: {
    Request
  }
};
</script>
