<template>
 <div>
   <ul>
   <li v-for="option in options" 
   :key="option.id" >
     <a 
     @click="show(option.item); isActive()">
      <i 
      :class="`${option.icon}`">
      </i>
      <span>{{option.item}}</span>
     </a>
    </li>
    <Submenu  :submenu="submenu" :class="{'is-active': active}" v-show="active" ></Submenu>
   </ul>
 </div>
</template>

<script>
import Submenu from "./Submenu.vue";

export default {
  components: {
    Submenu : Submenu
  },
  props: {
    options: Array,
    active: {
      type: Boolean,
      required: true
    },
    show: {
      type: Function,
      required: true
    },
    isActive:{
       type: Function,
      required: true
    },
    submenu: {
      type: Array,
      required: true
    }
  },
  name: "MainItems"
};
</script>

<style>
li {
  text-align: left;
}
</style>
