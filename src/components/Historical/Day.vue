<template>
<div>
  <li class="day">
       <p>Hoy</p>
  </li>
  <activity/>
</div>
</template>

<script>
import Activity from "../Historical/Activity.vue"
export default {
    name: "Day",
    components: {
      Activity: Activity
    }
}
</script>
