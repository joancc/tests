<template>
	<div class="select-branch">
		<div class="columns">
			<CompanyColumn :companies="companies" :onClick="handleBranchSelected"/>
			<BranchColumn :branch="branchSelected"/>
		</div>
	</div>
</template>


<script>
	import CompanyColumn from "@/components/CompanyColumn.vue";
	import BranchColumn from "@/components/BranchColumn.vue";

	export default {
		name: "select-branch",
		components: {
			CompanyColumn,
			BranchColumn
		},
		methods: {
			handleBranchSelected(id) {
				console.log("ejecutado");
				this.companies.forEach(company => {
					if (company.id === id) {
						this.branchSelected = company;
					}
				});
			}
		},
		data() {
			return {
				branchSelected: {},
				companies: [
					{
						id: 1,
						name: "no patito S.A de C.V",
						rfc: "POASHF12434",
						clave: null,
						active: true,
						branch: [
							{
								branchName: "Almacén EDOMEX",
								branchKey: "12408416",
								active: false,
								type: "storage"
							},
							{
								branchName: "Almacén 2",
								branchKey: "0984728",
								active: true,
								type: "storage"
							},
							{
								branchName: "Oficina 1",
								branchKey: "98730290",
								active: true,
								type: "office"
							},
							{
								branchName: "Oficina 2",
								branchKey: "73933826",
								active: false,
								type: "office"
							},
							{
								branchName: "Tienda 1",
								branchKey: "7261839",
								active: true,
								type: "store"
							},
							{
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: false,
								type: "store"
							}
						]
					},
					{
						id: 2,
						name: "Empresa no patito S.A de C.V",
						rfc: "POASHF12434",
						clave: null,
						active: false,
						branch: [
							{
								branchName: "Almacén EDOMEX",
								branchKey: "8272030",
								active: false,
								type: "storage"
							},
							{
								branchName: "Almacén knxxn",
								branchKey: "1513135",
								active: true,
								type: "storage"
							},
							{
								branchName: "Oficina sdjnojnel",
								branchKey: "7283089",
								active: true,
								type: "office"
							},
							{
								branchName: "Oficina jnsuenek",
								branchKey: "73933826",
								active: false,
								type: "office"
							},
							{
								branchName: "Tienda jjajakai",
								branchKey: "7261839",
								active: false,
								type: "store"
							},
							{
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: true,
								type: "store"
							}
						]
					},
					{
						id: 3,
						name: "Almacén Sonora Grill",
						rfc: null,
						companyKey: "90078434",
						active: true,
						branch: [
							{
								branchName: "Almacén del EDOMEX",
								branchKey: "12408416",
								active: false,
								type: "storage"
							},
							{
								branchName: "Almacén 2",
								branchKey: "0984728",
								active: true,
								type: "storage"
							},
							{
								branchName: "Oficina iii",
								branchKey: "98730290",
								active: true,
								type: "office"
							},
							{
								branchName: "Oficina 2",
								branchKey: "73933826",
								active: false,
								type: "office"
							},
							{
								branchName: "Tienda primero",
								branchKey: "7261839",
								active: false,
								type: "store"
							},
							{
								branchName: "Tienda 2",
								branchKey: "7261839",
								active: true,
								type: "store"
							}
						]
					}
				]
			};
		}
	};
</script>
