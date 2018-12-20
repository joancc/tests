<template>
	<div class="column is-one-third">
		<div class="select-title">
			<div class="icon companies"></div>
			<h4>Empresas</h4>
		</div>
		<div class="item" v-for="company in companies" :key="company.id">
			<div v-if="company.active">
				<button class="select-item">
					<div class="info">
						<p>
							{{company.name}}
							<span class="on"></span>
							<span v-if="company.rfc !== null">RFC: {{company.rfc}}</span>
							<span v-if="company.clave !== null">Clave: {{company.clave}}</span>
						</p>
					</div>
				</button>
			</div>
			<div v-if="!company.active">
				<button class="select-item" disabled>
					<div class="info">
						<span>
							{{company.name}}
							<div class="popover_wrapper">
								<i class="fas fa-lock"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block" v-if="company.rfc !== null">RFC: {{company.rfc}}</div>
							<div class="d-block" v-if="company.clave !== null">RFC: {{company.clave}}</div>
						</span>
					</div>
					<a class="fas fa-question-circle" @click="showRequest = true"></a>
				</button>
				<div class="request" :class="{'show': showRequest}">
					<a class="fas fa-question-circle" @click="showRequest = false"></a>
					<p>¿Solicitar permiso para la Tienda {{company.name}}?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "company-column",
		data() {
			return {
				showRequest: false,
				companies: [
					{
						id: 1,
						name: "no patito S.A de C.V",
						rfc: "POASHF12434",
						clave: null,
						active: true
					},
					{
						id: 2,
						name: "Empresa no patito S.A de C.V",
						rfc: "POASHF12434",
						clave: null,
						active: false
					},
					{
						id: 3,
						name: "Almacén Sonora Grill",
						rfc: null,
						clave: "90078434",
						active: true
					}
				]
			};
		}
	};
</script>

<style>
	.popover_content.up {
		right: -140px !important;
	}
</style>
