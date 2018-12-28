<template>
  <div class="request" :class="{'show': selectedRequest}">
    <a class="fas fa-question-circle" @click="handleSelectedRequest(requestId)"></a>
    <p>¿Solicitar permiso para la Tienda {{itemKey}}?</p>
    <div>
      <button class="button is-small is-bank">solicitar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestItem",
  props: {
    selectedRequest: {
      type: Boolean,
      required: true
    },
    handleSelectedRequest: {
      type: Function,
      required: true
    },
    requestId: {
      type: Number,
      required: true
    },
    itemKey: {
      type: String,
      required: true
    }
  }
};
</script>