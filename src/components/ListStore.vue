<template>
	<div class="item">
		<button class="select-item" v-if="company.active" @click="handleStoreSelect(company.branch_id)">
			<div class="info">
				<p>
					{{ company.name }}
					<span class="on"></span>
					<span>RFC: {{ company.branch_id }}</span>
				</p>
			</div>
		</button>
		<button class="select-item" disabled v-if="!company.active">
			<div class="info">
				<span>
					{{company.name}}
					<div class="popover_wrapper">
						<i class="fas fa-lock-alt"></i>
						<div class="push popover_content up">
							<p class="popover_message">
								No tienes
								<strong>permiso</strong> para modificar la información
							</p>
						</div>
					</div>
					<div class="d-block">RFC: {{ company.branch_id}}</div>
				</span>
			</div>
			<a class="fas fa-question-circle" @click="handleRequest(company.branch_id)"></a>
		</button>
		<Request
			:class="{'show': showRequest}"
			v-if="company.key === requestId"
			:company="company"
			:handleRequest="handleRequest"
			:requestId="requestId"
		/>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	import Request from "@/components/Request.vue";

	export default {
		methods: {
			handleStoreSelect(storeId) {
				this.$store.dispatch("handleStoreSelect", storeId);
			}
		},
		props: {
			company: {
				type: Object,
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
		name: "ListStore",
		components: {
			Request
		}
	};
</script>
