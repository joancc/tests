<template>
	<div class="column" style="border: 2px solid blue;">
		<div class="select-title">
			<div class="icon warehouses"></div>
			<h4>Almacenes</h4>
		</div>
		<div v-for="warehouse in wareHouseList" :key="warehouse.branch_id">
			<ListItem
				:company="warehouse"
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
			/>
		</div>
		<div class="select-title">
			<div class="icon offices"></div>
			<h4>Oficinas</h4>
		</div>
		<div v-for="office in officeList" :key="office.key">
			<ListItem
				:company="office"
				:handleCompanySelect="handleCompanySelect"
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
			/>
		</div>

		<div class="select-title">
			<div class="icon stores"></div>
			<h4>Tiendas</h4>
		</div>
		<div v-for="store in storesList" :key="store.key">
			<ListItem
				:company="store"
				:handleCompanySelect="handleCompanySelect"
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
			/>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	import ListItem from "./ListItem";

	export default {
		name: "StorePicker",
		computed: {
			...mapGetters(["branchList"]),
			wareHouseList() {
				return this.branchList.filter(store => {
					return store.type === "Shop";
				});
			},
			officeList() {
				return this.branchList.filter(store => {
					return store.type === "Office";
				});
			},
			storesList() {
				return this.branchList.filter(store => {
					return store.type === "Store";
				});
			}
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
