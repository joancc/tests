<template>
<div>
  <a>holi</a>
    <!-- <ul >
      <div >
       <li v-for="subitem in submenu" 
       :key="subitem.id" ><a href="#">
       <i 
       :class="`${subitem.icon}`">
       </i>
      <span>{{subitem.subitem}}</span></a></li>
      </div>
    </ul> -->
</div>

</template>

<script>
export default {
  props: {
  
  },
  name: "Submenu"
};
</script>
