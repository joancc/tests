/* eslint-disable no-undef */
import { createLocalVue, mount } from "@vue/test-utils";
import { getQueriesForElement, prettyDOM } from "dom-testing-library";
import Vuex from "vuex";
import Vue from "vue";
import BranchPicker from "../BranchPicker.vue";

function render(component, options) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
    ...options
  });

  return {
    wrapper,
    ...getQueriesForElement(wrapper.element),
    debug: () => console.log(prettyDOM(wrapper.element))
  };
}

Vue.use(Vuex);
describe("actions", () => {
  let actions;
  let store;
  let getters;
  beforeEach(() => {
    (getters = {
      companiesList: () => [
        {
          company_id: 17,
          active: true,
          emitter: {
            id: 11,
            tax_id: "JAR1106038RA",
            business_name: "Soluciones Eléctricas",
            commercial_name: "Soluciones Eléctricas Ibarra Updated S.A. de C.V."
          }
        }
      ]
    }),
      (actions = {
        getCompaniesList: jest.fn()
      }),
      (store = new Vuex.Store({
        getters,
        actions
      }));
  });
  test("calls store action getCompaniesList when the componenet", () => {
    const { getByText } = render(BranchPicker, { store });
    expect(actions.getCompaniesList).toHaveBeenCalled();
    expect(getByText("Soluciones Eléctricas")).toBeTruthy();
  });
});

/*describe("BranchPicker", () => {
  test("Updates active company correctly", () => {
    const { wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[2].id);
    expect(wrapper.vm.companies[0].selected).toBe(false);
    expect(wrapper.vm.companies[2].selected).toBe(true);
  });

  test("It always has ONE and only ONE active company", () => {
    const { wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[0].id);
    let trueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].selected) {
        trueCount++;
      }
    }
    expect(trueCount).toEqual(1);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[2].id);
    let secondTrueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].selected) {
        secondTrueCount++;
      }
    }
    expect(secondTrueCount).toEqual(1);
  });

  test("it highlights the currently selected company", async () => {
    const { getByText, wrapper } = render(BranchPicker);

    const oneCompany = wrapper.vm.companies[0];
    wrapper.vm.handleSelectedItem(oneCompany.id);
    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).toContain(oneCompany.name);

    const anotherCompany = wrapper.vm.companies[2];
    const companyName = getByText(anotherCompany.name);

    await fireEvent.click(companyName);

    const activeItem2 = wrapper.find(".active");
    expect(activeItem2.text()).toContain(anotherCompany.name);
  });

  test("branches shown when the company is selected", async () => {
    const { getByText, wrapper } = render(BranchPicker);
    const oneCompany = wrapper.vm.companies[0];
    const companyName = getByText(oneCompany.name);

    await fireEvent.click(companyName);
    const oneBranch = oneCompany.branches[0];
    expect(getByText(oneBranch.name)).toBeTruthy();

    const anotherBranch = oneCompany.branches[3];
    expect(getByText(anotherBranch.name)).toBeTruthy();
  });

  test("it renders the disabled companies correctly", () => {
    const { wrapper } = render(BranchPicker);
    let disabledCount = 0;
    wrapper.vm.companies.forEach(company => {
      if (company.active === false) {
        disabledCount++;
      }
    });
    const disabledCompanies = wrapper.findAll("button:disabled");
    expect(disabledCompanies.length).toEqual(disabledCount);
  });

  test("locations shown when the branch is selected", async () => {
    const { getByText, wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[0].id);
    const selectedBranch = wrapper.vm.branches[0];
    await fireEvent.click(getByText(selectedBranch.name));
    expect(getByText(selectedBranch.locations[0].name)).toBeTruthy();
  });

  test("Request is shown for disabled companies", () => {
    const { wrapper, getByText, debug } = render(BranchPicker);

    expect(wrapper).not.toContain("Solicitar permiso para");
    wrapper.vm.handleSelectedRequest(wrapper.vm.companies[0].id);
    const disabledCompany = wrapper.findAll(".fa-question-circle");
    const companyKey = wrapper.vm.companies[0].rfc;
    disabledCompany.at(0).trigger("click");
    expect(
      getByText(`¿Solicitar permiso para la Tienda ${companyKey}?`)
    ).toBeTruthy();
  });
});*/
