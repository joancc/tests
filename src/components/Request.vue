<template>
	<div class="request">
		<a class="fas fa-question-circle" @click="handleRequest(company.key)"></a>
		<p>¿Solicitar permiso para la Tienda {{company.name}}?</p>
		<div>
			<button class="button is-small is-bank">solicitar</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "activeRequest",
		props: {
			company: {
				type: Object,
				required: true
			},
			handleRequest: {
				type: Function,
				required: true
			},
			requestId: {
				type: String,
				required: true
			}
		}
	};
</script>

