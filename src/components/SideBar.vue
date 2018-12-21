<template>
 <div>
  <aside class="menu">
  <Logo></Logo>
 <ul class="menu-list">
   <li><a><i class="fas fa-building"></i><span>Mi Gestionix</span></a></li>
   <li><a :class="{'is-active': active}" @click="show" ref="compras" ><i class="fas fa-shopping-basket"></i><span>Compras y Proveedores</span></a>
    <Submenu></Submenu>
   </li>
 </ul>
 <Footer></Footer>
</aside>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Submenu from './Submenu.vue'
import Footer from './Footer'

export default {
  name: "SideBar",
  components:{
    'Logo' : Logo,
    'Submenu': Submenu,
    'Footer': Footer
  },
  data (){
      return {
          active : false
      }
  },
  methods:{
    show (){
      this.active = !this.active
  //     let actives = document.querySelectorAll('.is-active')
  //     console.log(actives)
  //       this.$refs.compras.active = !this.$refs.compras.active
  //       console.log(this.$refs.compras.active , this.$refs.inventario.active)
    }
  } 
};

</script>