<template>
 <ul class="menu-list">
   <main-items 
   :options="options" 
   :show="show">
   </main-items>
 </ul>
</template>

<script>
import MainItems from './MainItems.vue'

export default {
    name: "Menu",
    components: {
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
            icon: "fas fa-box",
             submenu: {
                subitem: "Productos",
                subitem: "Traspasar inventario",
                subitem: "Recontar inventario",
                subitem: "Actualización masiva",                    
             }
        },
        {
            item:"Ventas y Clientes", 
            icon: "fas fa-usd-circle",
             submenu: {
                subitem: "Ventas",
                subitem: "Mis Facturas",
                subitem: "Pedidos",
                subitem: "Clientes",
                subitem: "Cobros",     
                subitem: "Categorías de ingresos",                    
             } 
        },
        {
            item:"Reportes Inteligentes",
            icon: "fas fa-clipboard-list-check",
             submenu: {
                subitem: "Inicio",
                subitem: "Resumen de Operaciones",
                subitem: "Ventas Diarias",
                subitem: "Cuentas por Cobrar",
                subitem: "Cuentas por Pagar",     
                subitem: "Cambios en Inventarios",                    
             }  
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
        console.log('click')
    //   return this.active = !this.active
  }
 } 
};
</script>