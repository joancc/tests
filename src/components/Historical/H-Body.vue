<template>
 <div>
  <div class="day-activities">
   <ul>
    <day/>
   </ul>
 </div>
</div>
</template>

<script>
import Day from "../Historical/Day.vue";

export default {
    name: "Body",
    components: {
     Day: Day
    }
}
</script>
