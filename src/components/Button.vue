<template>
  <div>
    <a class="button has-text-white has-background-report is-report" @click="handleMenu">
      <span class="icon">
        <i class="fas fa-bars"></i>
      </span>
      <span>Menu</span>
    </a>
    <a
      class="button has-text-white has-background-income is-income"
      :class="{'disabled': isDisabled}"
      @click="handleList"
    >
      <span class="icon">
        <i class="fas fa-arrow-circle-right"></i>
      </span>
      <span>Enviar</span>
    </a>

    <div v-if="menu" class="select-branch">
      <div class="outer-20-b">
        <a @click="handleMenu" href="#">< Regresar</a>
      </div>
      <div class="columns">
        <div class="column is-one-third">
          <div class="select-title">
            <div class="icon companies"></div>
            <h4>Empresas</h4>
          </div>
          <div class="item">
            <button class="select-item active">
              <div class="info">
                <p>
                  Empresa no patito S.A de C.V
                  <span class="on"></span>
                  <span>RFC: POASHF12434</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item" disabled>
              <div class="info">
                <span>Empresa no patito S.A de C.V
                  <div class="popover_wrapper">
                    <i class="fas fas fas fa-lock"></i>
                    <div class="push popover_content up">
                      <p class="popover_message">
                        No tienes
                        <strong>permiso</strong> para modificar la información
                      </p>
                    </div>
                  </div>
                  <div class="d-block">RFC: POASHF12434</div>
                </span>
              </div>
              <a class="fas fa-question-circle" @click="handleShowRequest"></a>
            </button>
            <div class="request" :class="{'show': showRequest}">
              <a class="fas fa-question-circle" @click="handleShowRequest"></a>
              <p>¿Solicitar permiso para la Tienda #8009?</p>
              <div>
                <button class="button is-small is-bank">solicitar</button>
              </div>
            </div>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Almacén Sonora Grill
                  <span class="on"></span>
                  <span>Clave: 90078434</span>
                </p>
              </div>
            </button>
          </div>
        </div>

        <div class="column is-one-third is-hidden">
          <div class="select-title">
            <div class="icon warehouses"></div>
            <h4>Almacenes</h4>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Almacén de la Ciudad de México y EDOMEX
                  <span>Clave: 12408416</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item" disabled>
              <div class="info">
                <span>Almacén Sonora Grill
                  <div class="popover_wrapper">
                    <i class="fas fas fas fa-lock"></i>
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
          <div class="item">
            <button class="select-item active">
              <div class="info">
                <p>
                  Almacén ASFSDFAD
                  <span class="on"></span>
                  <span>Clave: 12408416</span>
                </p>
              </div>
            </button>
          </div>
          <hr>
          <div class="select-title">
            <div class="icon offices"></div>
            <h4>Oficinas</h4>
          </div>
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
          <div class="item">
            <button class="select-item" disabled>
              <div class="info">
                <span>Oficinas Pueblos de Santa Fe
                  <div class="popover_wrapper">
                    <i class="fas fas fas fa-lock"></i>
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
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Oficinas Puerto Madero
                  <span class="on"></span>
                  <span>Clave: 12408416</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Oficinas Río Amazonas
                  <span>Clave: 12408416</span>
                </p>
              </div>
            </button>
          </div>
          <hr>
          <div class="select-title">
            <div class="icon stores"></div>
            <h4>Tiendas</h4>
          </div>
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
          <div class="item">
            <button class="select-item" disabled>
              <div class="info">
                <span>Tienda centralizada Cancún A
                  <div class="popover_wrapper">
                    <i class="fas fas fas fa-lock"></i>
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
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Tienda Condesa
                  <span>Clave: 90078434</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Tienda metro chilpancingo
                  <span>Clave: 90078434</span>
                </p>
              </div>
            </button>
          </div>
        </div>

        <div class="column is-hidden is-one-third">
          <div class="select-title">
            <div class="icon location"></div>
            <h4>Ubicación</h4>
          </div>
          <div class="item">
            <button class="select-item active">
              <div class="info">
                <p>
                  Montevideo
                  <span class="on"></span>
                  <span>Clave: 12408416</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item" disabled>
              <div class="info">
                <span>Calzada de Guadalupe CDMX
                  <div class="popover_wrapper">
                    <i class="fas fas fas fa-lock"></i>
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
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Aragón
                  <span>Clave: 90078434</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Indios Verdes
                  <span>Clave: 90078434</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Vallejo
                  <span>Clave: 12408416</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Mazatlán
                  <span class="on"></span>
                  <span>Clave: 90078434</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Río Nazas
                  <span>Clave: 90078434</span>
                </p>
              </div>
            </button>
          </div>
          <div class="item">
            <button class="select-item">
              <div class="info">
                <p>
                  Zona Rosa
                  <span>Clave: 12408416</span>
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {
      isDisabled: true,
      list: [],
      menu: false,
      showRequest: false
    };
  },
  methods: {
    handleList() {
      if (!this.isDisabled) {
        alert("Enviado");
      }
    },
    handleMenu() {
      this.menu = !this.menu;
    },
    handleShowRequest() {
      this.showRequest = !this.showRequest;
    }
  },
  mounted() {
    this.$root.$on("ActiveButton", Name => {
      if (Name.length < 5) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    });
  }
};
</script>
