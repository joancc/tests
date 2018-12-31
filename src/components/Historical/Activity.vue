<template>
 <div>
     <li class="activity">
       <p v-for="i in info" :key="i.id" class="time">{{i.time}}</p><a class="tag time-tag sell-tag">VENTA</a><span>10 unidades</span><span><a href="#">Sucursal Puebla</a></span>
     </li>
 </div>
</template>

<script>
export default {
  name: "Activity",
  props: {
      info: Object
    }
}
</script>
