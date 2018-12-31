<template>
 <div>
   <each-notification/>
  <div class="notification"><i class="far fa-eye as-unread"></i>
   <div class="icon gx-user">
     <p>ci</p>
   </div>
   <div class="item-content">
     <p><strong>Se rechazó el cambio de información de 2 productos</strong></p>
     <p>solicitado por Abarrotes Mary</p>
      <a href="#">Ver detalle</a>
     <p class="timestamp">6 de enero a las 11:30 h</p>
   </div>
 </div>
  <div class="notification"><i class="far fa-eye as-unread"></i>
   <div class="icon gx-user">
     <p>bm</p>
   </div>
   <div class="item-content">
     <p><strong>El usuario Peter Parker ha aceptado tu solicitud</strong></p>
    <p class="bad"><i class="far fa-times-circle"></i> Rechazado por <strong>Pedro Prado</strong></p><a href="#">Ver detalle</a>
     <p class="timestamp">4 de enero a las 11:30 h</p>
   </div>
 </div>
 <div class="notification"><i class="far fa-eye as-unread"></i>
   <div class="icon gx-user">
     <p>fa</p>
   </div>
   <div class="item-content">
     <p><strong>Aceptaste la cancelación de la factura GA-4355</strong></p>
     <p>Emitida por Sable S.A. de C.V.</p>
     <p class="good"><i class="far fa-check-circle"></i> Autorizado por <strong>Emilio Méndez</strong></p><a href="#">Ver detalle</a>
     <p class="timestamp">3 de enero a las 11:30 h </p>
   </div>
 </div>
 </div>
</template>

<script>
import EachNotification from "../Notifications/EachNotification.vue";


export default {
    name: "BodyNotification",
    components: {
      EachNotification: EachNotification,
    }
}
</script>
