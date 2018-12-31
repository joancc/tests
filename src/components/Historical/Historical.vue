<template>
<div class="historical in-side">
    <h-title/>
    <h-body/>
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
  }
};
</script>