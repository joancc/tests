<template>
 <div>
  <aside class="menu">
 <div class="side-avatar">
   <div class="has-text-centered">
     <h1>A</h1>
   </div>
 </div>
 <ul class="menu-list">
   <li><a><i class="fas fa-building"></i><span>Mi Gestionix</span></a></li>
   <li><a :class="{'is-active': active}" @click="show" ref="compras" ><i class="fas fa-shopping-basket"></i><span>Compras y Proveedores</span></a>
     <ul >
       <li><a href="#"><i class="fas fa-sales"></i><span>Compras y Proveedores</span></a></li>
       <li><a href="#"><i class="fas fa-hand-holding-box"></i><span>Proveedores</span></a></li>
       <li><a href="#"><i class="fas fa-money-bill"></i><span>Pagos</span></a></li>
       <li><a href="#"><i class="fas fa-folder-money"></i><span>Categorías de egresos</span></a></li>
     </ul>
   </li>
   <li ><a :class="{'is-active': active}" class="is-collapsible " @click="show" ref="inventario"><i class="fas fa-box"></i><span>Inventario</span></a>
     <ul>
       <li><a href="#"><i class="fas fa-tag"></i><span>Productos</span></a></li>
       <li><a href="#"><i class="fas fa-box-open"></i><span>Traspasar inventario</span></a></li>
       <li><a href="#"><i class="fas fa-boxes"></i><span>Recontar inventario</span></a></li>
       <li><a href="#"><i class="fas fa-box-alt"></i><span>Actualización masiva</span></a></li>
     </ul>
   </li>
   <li><a :class="{'is-active': active}" class="is-collapsible" @click="show" ref="ventas"><i class="fas fa-usd-circle"></i><span>Ventas y Clientes</span></a>
     <ul>
       <li><a href="#"><i class="fas fa-money-check-alt"></i><span>Ventas</span></a></li>
       <li><a href="#"><i class="fas fa-file-invoice"></i><span>Mis Facturas</span></a></li>
       <li><a href="#"><i class="fas fa-file-check"></i><span>Pedidos</span></a></li>
       <li><a href="#"><i class="fas fa-user"></i><span>Clientes</span></a></li>
       <li><a href="#"><i class="fas fa-hand-holding-usd"></i><span>Cobros</span></a></li>
       <li><a href="#"><i class="fas fa-pennant"></i><span>Categorías de ingresos</span></a></li>
     </ul>
   </li>
   <li><a :class="{'is-active': active}" class="is-collapsible" @click="show" ref="reportes"><i class="fas fa-clipboard-list-check"></i><span>Reportes inteligentes</span></a>
     <ul>
       <li><a href="#"><i class="fas fa-chart-line"></i><span>Inicio</span></a></li>
       <li><a href="#"><i class="fas fa-screen"></i><span>Resumen de Operación</span></a></li>
       <li><a href="#"><i class="fas fa-file-invoice-dollar"></i><span>Ventas Diarias</span></a></li>
       <li><a href="#"><i class="fas fa-calendar-income"></i><span>Cuentas por Cobrar</span></a></li>
       <li><a href="#"><i class="fas fa-calendar-payments"></i><span>Cuentas por Pagar</span></a></li>
       <li><a href="#"><i class="fas fa-dolly"></i><span>Cambios en Inventario</span></a></li>
     </ul>
   </li>
   <li><a><i class="fas fa-money-bill-alt"></i><span>Cuentas</span></a></li>
   <li><a><i class="fas fa-calculator"></i><span>Ir a mi contabilidad</span></a></li>
 </ul>
 <div class="side-footer">
   <img class="img-fluid full" src="https://gestionix-design-test.azurewebsites.net/images/logo.svg" />
   <img class="img-fluid mini" src="/images/gx-white.svg" />
 </div>
</aside>
  </div>
</template>

<script>
export default {
  name: "SideBar",
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