<template>
    <ul >
      <div >
       <li v-for="subitem in submenu" 
       :key="subitem.id" ><a href="#">
       <i 
       :class="`${subitem.icon}`">
       </i>
      <span>{{subitem.subitem}}</span></a></li>
      </div>
    </ul>
</template>

<script>
export default {
  props:{
  submenu: {
  type: Array,
  required:true
   }
  },
  name: "Submenu"
};
</script>
