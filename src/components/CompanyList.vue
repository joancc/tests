<template>
	<div class="column" style="border: 2px solid red;">
		<div class="select-title">
			<div class="icon companies"></div>
			<h4>Empresas</h4>
		</div>
		<ListItem
			v-for="company in companies"
			:company="company"
			:handleCompanySelect="handleCompanySelect"
			:key="company.key"
			:handleRequest="handleRequest"
			:showRequest="showRequest"
			:requestId="requestId"
		/>
	</div>
</template>
<script>
	import ListItem from "./ListItem";

	export default {
		name: "CompanyList",
		props: {
			companies: {
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