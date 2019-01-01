<template>
<div>
  <li v-for="info in historicalInfo " :key="info.id" class="day">
       <p>{{info.date}}</p>
  <Historical-activity 
  :info="info"/>
  </li>
</div>
</template>

<script>
import HistoricalActivity from "../Historical/HistoricalActivity.vue"
export default {
    name: "HistoricalDay",
    components: {
      HistoricalActivity: HistoricalActivity
    },
    props: {
      historicalInfo: Array
    }
}
</script>
