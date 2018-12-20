<template>
  <div class="column is-one-third">
    <div :class="{'is-hidden': isHidden}" v-if="companyBranches.length >= 1">
      <div class="select-title">
        <div class="icon warehouses"></div>
        <h4>Almacenes</h4>
      </div>
      <div class="item" v-for="branch in companyBranches[0].warehouses" :key="branch.id">
        <button
          class="select-item"
          v-if="branch.active === true"
          @click="passBranchId(branch.locations)"
        >
          <div class="info">
            <p>
              {{branch.name}}
              <span class="on"></span>
              <span>Clave: {{branch.key}}</span>
            </p>
          </div>
        </button>
        <div v-if="branch.active === false">
          <button class="select-item" disabled>
            <div class="info">
              <span>
                {{branch.name}}
                <div class="popover_wrapper">
                  <i class="fas fas fas fa-lock"></i>
                  <div class="push popover_content up">
                    <p class="popover_message">
                      No tienes
                      <strong>permiso</strong> para modificar la información
                    </p>
                  </div>
                </div>
                <div class="d-block">Clave: {{branch.key}}</div>
              </span>
            </div>
            <a class="fas fa-question-circle"></a>
          </button>
          <div class="request">
            <a class="fas fa-question-circle"></a>
            <p>¿Solicitar permiso para la Tienda #8009?</p>
            <div>
              <button class="button is-small is-bank">solicitar</button>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="select-title">
        <div class="icon offices"></div>
        <h4>Oficinas</h4>
      </div>
      <div class="item" v-for="branch in companyBranches[0].offices" :key="branch.id">
        <button class="select-item" v-if="branch.active === true">
          <div class="info">
            <p>
              {{branch.name}}
              <span class="on"></span>
              <span>Clave: {{branch.key}}</span>
            </p>
          </div>
        </button>
        <div v-if="branch.active === false">
          <button class="select-item" disabled>
            <div class="info">
              <span>
                {{branch.name}}
                <div class="popover_wrapper">
                  <i class="fas fas fas fa-lock"></i>
                  <div class="push popover_content up">
                    <p class="popover_message">
                      No tienes
                      <strong>permiso</strong> para modificar la información
                    </p>
                  </div>
                </div>
                <div class="d-block">Clave: {{branch.key}}</div>
              </span>
            </div>
            <a class="fas fa-question-circle"></a>
          </button>
          <div class="request">
            <a class="fas fa-question-circle"></a>
            <p>¿Solicitar permiso para la Tienda #8009?</p>
            <div>
              <button class="button is-small is-bank">solicitar</button>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="select-title">
        <div class="icon stores"></div>
        <h4>Tiendas</h4>
      </div>
      <div class="item" v-for="branch in companyBranches[0].stores" :key="branch.id">
        <button class="select-item" v-if="branch.active === true">
          <div class="info">
            <p>
              {{branch.name}}
              <span class="on"></span>
              <span>Clave: {{branch.key}}</span>
            </p>
          </div>
        </button>
        <div v-if="branch.active === false">
          <button class="select-item" disabled>
            <div class="info">
              <span>
                {{branch.name}}
                <div class="popover_wrapper">
                  <i class="fas fas fas fa-lock"></i>
                  <div class="push popover_content up">
                    <p class="popover_message">
                      No tienes
                      <strong>permiso</strong> para modificar la información
                    </p>
                  </div>
                </div>
                <div class="d-block">Clave: {{branch.key}}</div>
              </span>
            </div>
            <a class="fas fa-question-circle"></a>
          </button>
          <div class="request">
            <a class="fas fa-question-circle"></a>
            <p>¿Solicitar permiso para la Tienda #8009?</p>
            <div>
              <button class="button is-small is-bank">solicitar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BranchWarehouses",
  props: ["companySelected", "companyBranches"],
  data() {
    return {
      isHidden: true,
      branchLocations: null
    };
  },
  watch: {
    companySelected() {
      this.isHidden = !this.isHidden;
    }
  },
  methods: {
    passBranchId(locations) {
      console.log(locations);
      this.branchLocations = locations;
    }
  }
};
</script>

