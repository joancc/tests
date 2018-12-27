import { createLocalVue, mount } from "@vue/test-utils";
import {
  getQueriesForElement,
  prettyDOM,
  fireEvent
} from "dom-testing-library";

import BranchPicker from "../BranchPicker.vue";

function render(component, options) {
  const localVue = createLocalVue();
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

describe("BranchPicker", () => {
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

  test("it changes the selected propety when the branch is active", () => {
    const { wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[0].id);
    expect(wrapper.vm.branches[0].selected).toBe(false);

    wrapper.vm.handleSelectedBranch(wrapper.vm.branches[0].id);
    expect(wrapper.vm.branches[0].selected).toBe(true);
  });

  test("locations shown when the branch is selected", async () => {
    const { getByText, wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[0].id);
    const selectedBranch = wrapper.vm.branches[0];
    await fireEvent.click(getByText(selectedBranch.name));
    expect(getByText(selectedBranch.locations[0].name)).toBeTruthy();
  });
});
