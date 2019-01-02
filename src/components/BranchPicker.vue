<template>
	<div class="select-branch" style="border: 2px solid purple;">
		<div class="outer-20-b">
			<a @click="handleCloseColumns">
				<i class="far fa-times-circle"></i> Cerrar
			</a>
		</div>
		<div class="columns" :class="{'is-hidden': closeColumns}">
			<CompanyList
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
				class="is-one-third"
			/>
			<StoreList
				:class="{'is-hidden': showStoreColumn}"
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
				class="is-one-third"
			/>
			<LocationList
				:class="{'is-hidden': showLocationColumn}"
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
				class="is-one-third"
			/>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	import CompanyList from "./CompanyList.vue";
	import StoreList from "./StoreList.vue";
	import LocationList from "./LocationList.vue";
	import { log } from "util";

	export default {
		name: "BranchPicker",
		computed: {
			...mapGetters(["showStoreColumn", "showLocationColumn"])
		},
		data() {
			return {
				closeColumns: false,
				requestId: "",
				showRequest: false
			};
		},
		methods: {
			handleRequest(id) {
				this.showRequest = !this.showRequest;
				this.requestId = id;
			},
			handleCloseColumns() {
				this.closeColumns = !this.closeColumns;
			}
		},
		components: {
			CompanyList,
			StoreList,
			LocationList
		}
	};
</script>
