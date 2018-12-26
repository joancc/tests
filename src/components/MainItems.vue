<template>
 <div>
   <li v-for="option in options" 
   :key="option.id" >
     <a 
     :class="{'is-active': active}" 
     @click="show">
      <i 
      :class="`${option.icon}`">
      </i>
      <span>{{option.item}}</span>
     </a>
   </li>
   <Submenu :options="options" ></Submenu>
 </div>
</template>

<script>
import Submenu from './Submenu.vue'

export default {
  components: {
  'Submenu' : Submenu
  },
  props:{
      options: Array,
      active: {
      type: Boolean,
      required: true
    },
      show: {
      type: Function,
      required: true
    }
  },
  name: "MainItems"
};
</script>