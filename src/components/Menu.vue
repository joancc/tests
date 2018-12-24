<template>
 <ul class="menu-list">
   <MainItems :options="options" :show="show"></MainItems>
   <div v-show="active">
     <Submenu v-bind:options="options"></Submenu>
   </div>
 </ul>
</template>

<script>
import MainItems from './MainItems.vue'
import Submenu from './Submenu.vue'

export default {
    name: "Menu",
    components: {
      'Submenu' : Submenu,
      'MainItems': MainItems
  },
  data() {
      return {
        active : false,
        options: [
        {
            item: "Mi gestionix", 
            icon: "fas fa-building"
        },
        {
            item: "Compras y Proveedores", 
            icon: "fas fa-shopping-basket",
            submenu: {
                subitem: "Compras y Proveedores",
                subitem: "Compras y Proveedores",
                subitem: "Compras y Proveedores",
                subitem: "Compras y Proveedores",                    
             } 
        },
        {
            item:"Inventario", 
            icon: "fas fa-box"
        },
        {
            item:"Ventas y Clientes", 
            icon: "fas fa-usd-circle" 
        },
        {
            item:"Reportes Inteligentes",
            icon: "fas fa-clipboard-list-check" 
        },
        {
            item:"Cuentas",
            icon: "fas fa-money-bill-alt"
        },
        {
            item:"Contabilidad", 
            icon: "fas fa-calculator" 
        }
      ]
    }
  },
  methods:{
    show (){
      return this.active = !this.active
  }
 } 
};
</script>