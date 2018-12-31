<template>
<div class="notification unread"><i class="far fa-eye as-unread"></i>
   <div class="icon gx-user">
     <p>ci</p>
   </div>
   <div class="item-content">
     <p><strong>Se rechazó el cambio de información de 2 productos</strong></p>
     <p>solicitado por Abarrotes Mary</p>
     <accept-reject-btn/>
     <request-status/>
     <p class="timestamp">10 de enero a las 11:35 h</p>
   </div>
 </div>
</template>

<script>
import AcceptRejectBtn from "../Notifications/AcceptRejectBtn.vue";
import RequestStatus from "../Notifications/RequestStatus.vue";

export default {
    name: "EachNotification",
    components: {
      AcceptRejectBtn: AcceptRejectBtn,
      RequestStatus: RequestStatus
    }

}
</script>
