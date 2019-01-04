<template>
	<div class="column" style="border: 2px solid yellow;">
		<div class="select-title">
			<div class="icon location"></div>
			<h4>Ubicación</h4>
		</div>
		<div v-for="location in locationList" :key="location.key">
			<ListLocation :company="location"/>
		</div>
	</div>
</template>
<script>
	import ListLocation from "./ListLocation";
	import { mapGetters } from "vuex";

	export default {
		name: "StoreLocation",
		computed: {
			...mapGetters(["locationList"])
		},
		components: {
			ListLocation
		}
	};
</script>
