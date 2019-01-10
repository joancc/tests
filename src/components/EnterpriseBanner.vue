<template>
  <div class="select-title">
    <div class="icon" :class="iconName"></div>
    <h4>{{this.bannerName}}</h4>
  </div>
</template>
<script>
export default {
  props: {
    bannerName: String,
    iconName: String
  }
};
</script>
