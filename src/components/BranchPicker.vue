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
				:storeList="stores"
				:handle-company-select="handleStoreSelect"
				:class="{'is-hidden': showStoreColumn}"
				:handleRequest="handleRequest"
				:showRequest="showRequest"
				:requestId="requestId"
				class="is-one-third"
			/>
			<LocationList
				:locationList="locations"
				:handle-company-select="handleLocationSelect"
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
		data() {
			return {
				closeColumns: false,
				requestId: "",
				showRequest: false,
				storeList: [],
				showStoreColumn: true,
				showCompanies: false,
				showLocationColumn: true,
				locationList: [],
				activeStoreId: "",
				activeLocationId: ""
			};
		},
		computed: {
			// activeCompany() {
			// 	return this.companiesFromServer[0];
			// },
			// stores() {
			// 	return this.storeList.map(store => {
			// 		return {
			// 			...store,
			// 			...{ active: store.key === this.activeStoreId }
			// 		};
			// 	});
			// },
			// locations() {
			// 	return this.locationList.map(location => {
			// 		return {
			// 			...location,
			// 			...{ active: location.key === this.activeLocationId }
			// 		};
			// 	});
			// }
		},
		methods: {
			// handleCompanySelect(taxId) {
			// 	this.activeCompanyTaxId = taxId;
			// 	this.companiesFromServer.forEach(company => {
			// 		if (company.key === taxId) {
			// 			this.storeList = company.stores;
			// 		}
			// 	});
			// 	this.showStoreColumn = !this.showStoreColumn;
			// 	if (!this.showLocationColumn) {
			// 		this.showLocationColumn = true;
			// 	}
			// },
			handleStoreSelect(storeId) {
				this.activeStoreId = storeId;
				this.companiesFromServer.forEach(company => {
					if (company.key === this.activeCompanyTaxId) {
						company.stores.forEach(store => {
							if (store.key === this.activeStoreId) {
								this.locationList = store.locations;
							}
						});
					}
				});
				this.showLocationColumn = !this.showLocationColumn;
			},
			handleLocationSelect(locationId) {
				this.activeLocationId = locationId;
			},
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
