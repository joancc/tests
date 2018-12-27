import { createLocalVue, mount } from "@vue/test-utils";
import {
  getQueriesForElement,
  prettyDOM,
  wait,
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
  it("Updates active company correctly", () => {
    const { wrapper } = render(BranchPicker);

    expect(wrapper.vm.companies[0].selected).toBe(true);
    wrapper.vm.handleSelectedItem(wrapper.vm.companies[2].id);
    expect(wrapper.vm.companies[0].selected).toBe(false);
    expect(wrapper.vm.companies[2].selected).toBe(true);
  });
  it("It always has ONE and only ONE active company", () => {
    const { wrapper } = render(BranchPicker);
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
  it("it highlights the currently selected item", async () => {
    const { getByText, wrapper } = render(BranchPicker);

    const item3Name = wrapper.vm.companies[2].name;
    const item3 = getByText(item3Name);

    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).toContain("Empresa");

    await fireEvent.click(item3);

    const activeItem2 = wrapper.find(".active");
    expect(activeItem2.text()).toContain("Almacén");
  });
});
