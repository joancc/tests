<template>
	<div class="item">
		<button class="select-item" :class="{ active: company.active }" v-if="company.status" @click="handleCompanySelect(company.key)">
			<div class="info">
				<p>
					{{ company.name }}
					<span class="on"></span>
					<span>RFC: {{ company.key }}</span>
				</p>
			</div>
		</button>
		<button class="select-item" disabled v-if="!company.status">
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
					<div class="d-block">RFC: {{company.key}}</div>
				</span>
			</div>
			<a class="fas fa-question-circle" @click="handleRequest(company.key)"></a>
		</button>
		<Request :class="{'show': showRequest}" v-if="company.key === requestId" :company="company" :handleRequest="handleRequest" :requestId="requestId"/>
	</div>
</template>
<script>
	import Request from "@/components/Request.vue";

	export default {
		props: {
			company: {
				type: Object,
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
		name: "ListItem",
		components: {
			Request
		}
	};
</script>
