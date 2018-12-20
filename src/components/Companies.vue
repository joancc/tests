<template>
  <div class="columns">
    <div class="column is-one-third">
      <div class="select-title">
        <div class="icon companies"></div>
        <h4>Empresas</h4>
      </div>
      <div class="item" v-for="company in companies" :key="company.id">
        <button class="select-item" v-if="company.active" @click="passId(company.id)">
          <div class="info">
            <p>
              {{company.name}}
              <span class="on"></span>
              <span v-if="company.rfc !== null">RFC: {{company.rfc}}</span>
              <span v-if="company.key !== null">Clave: {{company.key}}</span>
            </p>
          </div>
        </button>

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
                <div class="d-block" v-if="company.key !== null">Clave: {{company.key}}</div>
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
      </div>
    </div>
    <Branches :companySelected="companySelected" :companyBranches="companyBranches"/>
  </div>
</template>

<script>
import Branches from "@/components/Branches.vue";
import companies from "@/data.js";
export default {
  name: "Companies",
  data() {
    return {
      companies: companies,
      showRequest: false,
      menuCompanies: false,
      companySelected: "",
      companyBranches: []
    };
  },
  components: {
    Branches
  },
  methods: {
    passId(id) {
      this.companySelected = id;
      this.companyBranches = companies[id - 1].branches;
    },
    handleShowRequest() {
      this.showRequest = !this.showRequest;
    }
  }
};
</script>

