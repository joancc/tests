<template>
 <ul class="menu-list">
   <li v-for="option in options" :key="option.id"><a :class="{'is-active': active}" @click="show" ref="compras"><i :class="`${option.icon}`"></i><span>{{option.item}}</span></a></li>
<!-- Make a conditional to decide. if submenu exists, render it, else, nthn -->
    <Submenu></Submenu>
 </ul>
</template>

<script>
import Submenu from './Submenu.vue'

export default {
  name: "Menu",
  el: "menu-list",
  components: {
      'Submenu' : Submenu 
  },
  data() {
      return {
          active : false,
          options: [
            {
                item: 'Mi gestionix', 
                icon: 'fas fa-building'
            },
            {
                item:'Compras y Proveedores', 
                icon: 'fas fa-shopping-basket',
                submenu: {
                    subitem: 'Compras y Proveedores',
                    subitem: 'Compras y Proveedores',
                    subitem: 'Compras y Proveedores',
                    subitem: 'Compras y Proveedores',                    
                } 
            },
            {
                item:'Inventario', 
                icon: 'fas fa-box'
            },
            {
                item:'Ventas y Clientes', 
                icon: 'fas fa-usd-circle' 
            },
            {
                item:'Reportes Inteligentes',
                icon: 'fas fa-clipboard-list-check' 
            },
            {
                item:'Cuentas',
                icon: 'fas fa-money-bill-alt'
            },
            {
                item:'Contabilidad', 
                icon: 'fas fa-calculator' 
            }
          ]
      }
  },
  methods:{
    show (){
      this.active = !this.active
    }
  } 
};
</script>