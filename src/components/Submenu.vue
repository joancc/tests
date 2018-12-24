<template>
    <ul >
       <li><a href="#"><i class="fas fa-sales"></i><span>Compras y Proveedores</span></a></li>
       <p>{{subitem}}</p>
    </ul>
</template>

<script>
export default {
  props:{
    options: Array
  },
  name: "Submenu"
};
</script>
