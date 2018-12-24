<template>
<div>
   <li v-for="option in options" :key="option.id" ><a :class="{'is-active': active}" @click="$emit('show')"><i :class="`${option.icon}`"></i><span>{{option.item}}</span></a></li>
</div>
</template>

<script>
export default {
  props:{
      options: Array,
      active: Boolean,
      show: Function
  },
  name: "MainItems"
};
</script>