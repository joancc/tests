<template>
    <ul >
      <div >
       <li><a href="#"><i class=""></i><span>{{options}}</span></a></li>
      </div>
    </ul>
</template>

<script>
export default {
  props:{
  options: {
  type: Array,
  required:true
  }
 
  },
  name: "Submenu"
};
</script>
