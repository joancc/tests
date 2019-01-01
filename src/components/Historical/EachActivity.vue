<template>
<div> 
 <div>  
    <p class="time">{{activity.time}}</p>
        <a class="tag time-tag sell-tag">{{activity.type}}</a>
        <span>10 unidades</span>
        <span><a href="#">Sucursal Puebla</a></span>   
 </div> 
</div>
</template>

<script>
export default {
    name: "EachActivity",
    props: {
        activity: Object
    }
}
</script>

