<template>
 <div>
  <div class="day-activities">
   <ul>
    <HistoricalDay :historicalInfo="historicalInfo" />
   </ul>
 </div>
</div>
</template>

<script>
import HistoricalDay from "../Historical/HistoricalDay.vue";

export default {
    name: "HistoricalBody",
    components: {
     HistoricalDay: HistoricalDay
    },
    props: {
      historicalInfo: Array
    }
}
</script>
