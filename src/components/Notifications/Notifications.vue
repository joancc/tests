<template>
<div class="content-notification">
  <header-notifications/>
  <body-notifications 
  :notifications="notifications"/>
</div>
</template>

<script>
import HeaderNotifications from "../Notifications/HeaderNotification.vue";
import BodyNotifications from "../Notifications/BodyNotifications"
export default {
    name: "Notifications",
    components: {
        HeaderNotifications: HeaderNotifications,
        BodyNotifications: BodyNotifications
    },
    data() {
      return{
       notifications: [
        {
         date: '10 de enero a las 11:35 h',
         icon: 'ci',
         seen: 'notification',
         message:
        {
         subject: 'Se rechazó el cambio de información de 2 productos',
         request: 'solicitado por Abarrotes Mary',
         status:
             {statusMessage:'rechazado', icon:'far fa-times-circle', name: "Pedro"},
             
        },
        
     },
     {
         date: '11 de enero a las 11:35 h',
         icon: 'p',
         seen: 'notification unread',
         message:
        {
         subject: 'Se rechazó el cambio de información de 3 productos',
         request: 'solicitado por Armando',
         status:
             {statusMessage:'Autorizado', icon:'far fa-check-circle', name:'Pedro Pardo'},
             
             
        }, 
      }
    ]
   }
  }
}
</script>
