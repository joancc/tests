<template>
	<div class="column" style="border: 2px solid red;">
		<div class="select-title">
			<div class="icon companies"></div>
			<h4>Empresas</h4>
		</div>
		<ListItem
			v-for="company in companiesFromServer"
			:company="company"
			:key="company.key"
			:handleRequest="handleRequest"
			:showRequest="showRequest"
			:requestId="requestId"
		/>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	import ListItem from "@/components/ListItem.vue";

	export default {
		name: "CompanyList",
		created() {
			this.$store.dispatch("getCompaniesFromServer");
		},
		computed: {
			...mapGetters(["companiesFromServer"])
		},
		props: {
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