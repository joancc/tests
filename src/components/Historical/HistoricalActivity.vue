<template>
 <div>
     <li class="activity" v-for="activity in info.activities" :key="activity.id">
       <Eachactivity 
       :activity="activity" />
     </li>
 </div>
</template>

<script>
import Eachactivity from "../Historical/EachActivity.vue"
export default {
  name: "HistoricalActivity",
  components:{
    Eachactivity: Eachactivity
  },
  props: {
      info: Object,
    }
}
</script>
