<template>
	<div class="request">
		<a class="fas fa-question-circle" @click="handleRequest(requestId)"></a>
		<p>¿Solicitar permiso para la Tienda?</p>
		<div>
			<button class="button is-small is-bank">solicitar</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "activeRequest",
		computed: {
			...mapGetters(["requestId"])
		},
		methods: {
			handleRequest(id) {
				this.$store.dispatch("handleRequest", id);
			}
		}
	};
</script>

