<template>
	<div class="column is-one-third">
		<div :class="{'is-hidden': isBranchHidden}" v-for="company in companies" :key="company.id">
			<!-- ////////////// ALMACENES ///////////// -->
			<!-- Title -->
			<div class="select-title">
				<div class="icon warehouses"></div>
				<h4>Almacenes</h4>
			</div>
			<div v-if="company.id === branchIdSelected">
				<div v-for="branch in company.branch" :key="branch.id" v-if="branch.type === 'storage'">
					<!-- Active Item -->
					<div class="item" v-if="branch.active">
						<button class="select-item">
							<div class="info">
								<p>
									{{branch.branchName}}
									<span>Clave: {{branch.branchKey}}</span>
								</p>
							</div>
						</button>
					</div>

					<!-- Disabled/Inactive Item -->
					<div class="item" v-if="!branch.active">
						<button class="select-item" disabled>
							<div class="info">
								<span>
									{{branch.branchName}}
									<div class="popover_wrapper">
										<i class="fas fa-lock-alt"></i>
										<div class="push popover_content up">
											<p class="popover_message">
												No tienes
												<strong>permiso</strong> para modificar la información
											</p>
										</div>
									</div>
									<div class="d-block">Clave: {{branch.branchKey}}</div>
								</span>
							</div>
							<a class="fas fa-question-circle" @click="showRequest = true"></a>
						</button>
						<div class="request" :class="{'show': showRequest}">
							<a class="fas fa-question-circle" @click="showRequest = false"></a>
							<p>¿Solicitar permiso para la Tienda #{{branch.branchKey}}?</p>
							<div>
								<button class="button is-small is-bank">solicitar</button>
							</div>
						</div>
					</div>
					<hr>
				</div>
			</div>
			<!-- /////////// END OF ALMACENES /////////// -->
			<!-- ///////////////// OFFICES /////////// -->
			<!-- Title -->
			<div class="select-title">
				<div class="icon offices"></div>
				<h4>Oficinas</h4>
			</div>

			<!-- Offices active item -->
			<div class="item">
				<button class="select-item">
					<div class="info">
						<p>
							Oficinas Sureste
							<span class="on"></span>
							<span>Clave: 12408416</span>
						</p>
					</div>
				</button>
			</div>
			<!-- Offices disabled item -->
			<div class="item">
				<button class="select-item" disabled>
					<div class="info">
						<span>Oficinas Pueblos de Santa Fe
							<div class="popover_wrapper">
								<i class="fas fa-lock-alt"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block">Clave: 90078434</div>
						</span>
					</div>
					<a class="fas fa-question-square"></a>
				</button>
				<div class="request">
					<a class="fas fa-question-square"></a>
					<p>¿Solicitar permiso para la Tienda #8009?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div>
			</div>
			<hr>
			<!-- /////////////////// END OF OFFICES //////////// -->
			<!-- /////////// STORES //////////////////////////// -->
			<!-- Title -->
			<div class="select-title">
				<div class="icon stores"></div>
				<h4>Tiendas</h4>
			</div>
			<!-- Active store -->
			<div class="item">
				<button class="select-item">
					<div class="info">
						<p>
							Tienda Mixcoac
							<span class="on"></span>
							<span>Clave: 12408416</span>
						</p>
					</div>
				</button>
			</div>
			<!-- Disabled Store -->
			<div class="item">
				<button class="select-item" disabled>
					<div class="info">
						<span>Tienda centralizada Cancún A
							<div class="popover_wrapper">
								<i class="fas fa-lock-alt"></i>
								<div class="push popover_content up">
									<p class="popover_message">
										No tienes
										<strong>permiso</strong> para modificar la información
									</p>
								</div>
							</div>
							<div class="d-block">Clave: 90078434</div>
						</span>
					</div>
					<a class="fas fa-question-square"></a>
				</button>
				<div class="request">
					<a class="fas fa-question-square"></a>
					<p>¿Solicitar permiso para la Tienda #8009?</p>
					<div>
						<button class="button is-small is-bank">solicitar</button>
					</div>
				</div>
			</div>
			<!-- END OF STORES -->
		</div>
	</div>
</template>

<script>
	export default {
		name: "branch-column",
		data() {
			return {
				isBranchHidden: true,
				branchIdSelected: null,
				showRequest: false
			};
		},
		mounted() {
			this.$root.$on("branchSelected", variables => {
				this.isBranchHidden = variables.showColumn;
				this.branchIdSelected = variables.branchId;
				console.log(this.branchIdSelected);
			});
		},
		props: ["companies"]
	};
</script>
