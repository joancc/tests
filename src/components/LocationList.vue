<template>
	<div class="column" style="border: 2px solid yellow;">
		<div class="select-title">
			<div class="icon location"></div>
			<h4>Ubicación</h4>
		</div>
		<div v-for="location in locationList" :key="location.key">
			<ListItem :company="location" :handleCompanySelect="handleCompanySelect"/>
		</div>
	</div>
</template>
<script>
	import ListItem from "./ListItem";

	export default {
		name: "StoreLocation",
		props: {
			locationList: {
				type: Array,
				required: true
			},
			handleCompanySelect: {
				type: Function,
				required: true
			}
		},
		components: {
			ListItem
		}
	};
</script>
