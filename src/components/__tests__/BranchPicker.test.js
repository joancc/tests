
import {
  createLocalVue,
  mount
} from "@vue/test-utils";
import {
  getQueriesForElement,
  prettyDOM,
  wait,
  fireEvent
} from "dom-testing-library";
import Vuex from "vuex";
import { state, mutations, actions, getters } from '@/store.js';
import BranchPicker from "../BranchPicker.vue";

function render(component, options) {
  const localVue = createLocalVue();
  localVue.use(Vuex);


  const store = new Vuex.Store({ state, mutations, actions, getters });
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

describe("BranchPicker", () => {
  it("It properly renders companies.", async () => {
    const {
      wrapper,
      getByText,
      debug
    } = render(BranchPicker);
    const commit = jest.fn();
    expect(getByText("Empresas")).toBeTruthy();
    await actions.getCompaniesFromServer({ commit })
      .then(resp => console.log(resp));
    expect(getByText('Artículos para el hogar SA de CV')).toBeTruthy();
  });
});

