<template>
  <div class="item" @click="handleSelectedItem(item.id)">
    <button v-if="item.active" class="select-item" :class="{ active: item.selected }">
      <div class="info">
        <p>
          {{ item.name }}
          <span class="on"></span>
          <span v-if="item.rfc">RFC : {{ item.rfc }}</span>
          <span v-if="item.key">CLAVE : {{ item.key }}</span>
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
            <div class="d-block" v-if="item.rfc">RFC: {{item.rfc}}</div>
            <div class="d-block" v-if="item.key">Clave: {{item.key}}</div>
          </span>
        </div>
        <!--is-hidden -->
        <a class="fas fa-question-circle"></a>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    handleSelectedItem: {
      type: Function,
      required: true
    }
  },
  name: "ListItem"
};
</script>
