<template>
<!-- notifications -->
<div class="content-notification">
    <header-notifications/>
    <body-notifications/>
    <period/> 
</div>
</template>

<script>
import HeaderNotifications from "../Notifications/HeaderNotification.vue";
import Period from "../Notifications/Period.vue";
import BodyNotifications from "../Notifications/BodyNotifications"
export default {
    name: "Notifications",
    components: {
        HeaderNotifications: HeaderNotifications,
        Period: Period,
        BodyNotifications: BodyNotifications
    }
}
</script>
