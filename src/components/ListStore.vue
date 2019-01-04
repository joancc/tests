<template>
  <div class="item">
    <button class="select-item" v-if="company.active" @click="handleStoreSelect(company.branch_id)">
      <div class="info">
        <p>
          {{ company.name }}
          <span class="on"></span>
          <span>RFC: {{ company.branch_id }}</span>
        </p>
      </div>
    </button>
    <button class="select-item" disabled v-if="!company.active">
      <div class="info">
        <span>
          {{company.name}}
          <div class="popover_wrapper">
            <i class="fas fa-lock-alt"></i>
            <div class="push popover_content up">
              <p class="popover_message">
                No tienes
                <strong>permiso</strong> para modificar la información
              </p>
            </div>
          </div>
          <div class="d-block">RFC: {{ company.branch_id}}</div>
        </span>
      </div>
      <a class="fas fa-question-circle" @click="handleRequest(company.branch_id)"></a>
    </button>
    <!-- <Request :class="{'show': showRequest}" v-if="company.branch_id === requestId"/> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Request from "@/components/Request.vue";

export default {
  methods: {
    handleStoreSelect(storeId) {
      this.$store.dispatch("handleStoreSelect", storeId);
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
  name: "ListStore",
  components: {
    Request
  }
};
</script>
