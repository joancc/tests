<template>
 <div>
   <each-notification 
   :notifications="notifications"/>
 </div>
</template>

<script>
import EachNotification from "../Notifications/EachNotification.vue";

export default {
    name: "BodyNotification",
    components: {
      EachNotification: EachNotification,
    },
    props: {
      notifications: Array
    }
}
</script>
