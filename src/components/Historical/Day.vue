<template>
<div>
  <li v-for="info in historicalInfo " :key="info.id" class="day">
       <p>{{info.date}}</p>
  <activity 
  :info="info"/>
  </li>
</div>
</template>

<script>
import Activity from "../Historical/Activity.vue"
export default {
    name: "Day",
    components: {
      Activity: Activity
    },
    props: {
      historicalInfo: Array
    }
}
</script>
