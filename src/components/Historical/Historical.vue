<template>
<div class="historical in-side">
    <h-title/>
    <h-body 
    :historicalInfo="historicalInfo"/>
    <h-footer/>
</div>
</template>

 <script>
import HTitle from "../Historical/H-Title.vue";
import HFooter from "../Historical/H-Footer.vue";
import HBody from "../Historical/H-Body.vue";
export default {
  name: "Historical",
  components: {
    HTitle: HTitle,
    HFooter: HFooter,
    HBody: HBody
  },
  data() {
    return {
      historicalInfo: [
       {
        date: '12/31/2018',
        activities: [
      {
        time: '13:45:00',
        type: 'Venta',
      },
      {
        time: '15:45:00',
        type: 'Compra',
      },
    ]
  },
  {
    date: '12/30/2018',
    activities: [
      {
        time: '13:45:00',
        type: 'Venta',
      },
      {
        time: '15:45:00',
        type: 'Compra',
      },
      {
        time: '17:45:00',
        type: 'Compra',
      },
      {
        time: '19:45:00',
        type: 'Compra',
      },
      ]
     }
   ]
  }
},    
};
</script>