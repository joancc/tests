<template>
  <div>
    <a 
     @click="showAndActive(option)">
      <i 
      :class="`${option.icon}`">
      </i>
      <span>{{option.item}}</span>
     </a>
    <Submenu></Submenu>
 </div>
</template>
 
<script>
import Submenu from "./Submenu.vue";

export default {
components: {
    Submenu: Submenu
},
 props: {
     option: Object, 
     showAndActive: {
      type: Function,
      required: true
     }
 },
  name: "EachMenuItem"
};
</script>

