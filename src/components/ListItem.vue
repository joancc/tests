<template>
  <div class="item">
    <button
      class="select-item"
      @click="handleSelectedItem(item.company_id)"
      :class="{ active: item.selected }"
    >
      <div class="info">
        <p>
          {{ item.emitter.business_name }}
          <span class="on"></span>
          <span>RFC : {{ item.emitter.tax_id }}</span>
        </p>
      </div>
    </button>
    <div v-if="!item.active">
      <button class="select-item" disabled>
        <div class="info">
          <span>
            {{item.emitter.business_name}}
            <div class="popover_wrapper">
              <i class="fas fa-lock"></i>
              <div class="push popover_content up">
                <p class="popover_message">
                  No tienes
                  <strong>permiso</strong> para modificar la información
                </p>
              </div>
            </div>
            <div class="d-block">RFC: {{item.emitter.tax_id}}</div>
          </span>
        </div>
        <!--is-hidden -->
        <a class="fas fa-question-circle" @click="handleRequest.handleSelectedRequest(item.id)"></a>
      </button>
      <RequestItem/>
    </div>
  </div>
</template>
<script>
import RequestItem from "./RequestItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    handleSelectedItem(itemId) {
      this.$store.dispatch("getActiveItem", {
        id: itemId
      });
    }
  },
  components: {
    RequestItem
  }
};
</script>
