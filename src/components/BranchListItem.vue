<template>
  <div class="item">
    <button
      class="select-item"
      @click="handleSelectedBranch(item.branch_id)"
      :class="{ active: item.selected }"
    >
      <div class="info">
        <p>
          {{ item.name }}
          <span class="on"></span>
          <span>{{ item.type }}</span>
        </p>
      </div>
    </button>
    <div v-if="!item.active">
      <button class="select-item" disabled>
        <div class="info">
          <span>
            {{item.name}}
            <div class="popover_wrapper">
              <i class="fas fa-lock"></i>
              <div class="push popover_content up">
                <p class="popover_message">
                  No tienes
                  <strong>permiso</strong> para modificar la información
                </p>
              </div>
            </div>
            <div class="d-block">RFC: {{item.type}}</div>
          </span>
        </div>
        <!--is-hidden -->
        <a class="fas fa-question-circle"></a>
      </button>
      <RequestItem/>
    </div>
  </div>
</template>
<script>
export default {
  name: "BranchListItem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    handleSelectedBranch(itemId) {
      this.$store.dispatch("getActiveBranch", {
        id: itemId
      });
    }
  }
};
</script>
