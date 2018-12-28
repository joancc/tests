<template>
	<div class="column" style="border: 2px solid yellow;">
		<div class="select-title">
			<div class="icon location"></div>
			<h4>Ubicación</h4>
		</div>
		<div v-for="location in locationList" :key="location.key">
			<ListItem
				:company="location"
				:handleCompanySelect="handleCompanySelect"
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
			/>
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
			},
			handleRequest: {
				type: Function,
				required: true
			},
			showRequest: {
				type: Boolean,
				required: true
			},
			requestId: {
				type: String,
				required: true
			}
		},
		components: {
			ListItem
		}
	};
</script>
