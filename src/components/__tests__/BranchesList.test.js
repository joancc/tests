/* eslint-disable no-undef */
import { createLocalVue, mount } from "@vue/test-utils";
import { getQueriesForElement, prettyDOM } from "dom-testing-library";
import Vuex from "vuex";
import BranchesList from "../BranchesList.vue";

function render(component, options, storeOptions) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(storeOptions);

  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
    ...options,
    store
  });

  return {
    wrapper,
    ...getQueriesForElement(wrapper.element),
    debug: () => console.log(prettyDOM(wrapper.element))
  };
}

describe("BranchList.vue", () => {
  let state = {};
  let getters = {
    companyBranches: () => [
      {
        branch_id: 198,
        type: "Shop",
        name: "Fl_Tda1",
        active: true
      },
      {
        branch_id: 18,
        type: "Shop",
        name: "ALMACEN GENERAL",
        active: true
      }
    ]
  };
  let actions = {
    getActiveItem: jest.fn(id => id)
  };

  let storeOptions = {
    actions,
    getters
  };

  test("calls store action getCompaniesList when the component is rendered", () => {
    const { getByText, debug } = render(BranchesList, {}, storeOptions);
    expect(getByText("Almacenes")).toBeTruthy();
    //expect(getByText("Soluciones Eléctricas")).toBeTruthy();
  });
});
