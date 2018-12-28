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
    const {
      wrapper
    } = render(BranchPicker);

    expect(wrapper.vm.companies[0].active).toBe(true);
    wrapper.vm.handleCompanySelect(wrapper.vm.companies[2].key);
    expect(wrapper.vm.companies[0].active).toBe(false);
    expect(wrapper.vm.companies[2].active).toBe(true);
  });
  it("It always has ONE and only ONE active company", () => {
    const {
      wrapper
    } = render(BranchPicker);

    let trueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].active) {
        trueCount++;
      }
    }
    expect(trueCount).toEqual(1);

    wrapper.vm.handleCompanySelect(wrapper.vm.companies[2].key);

    let secondTrueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].active) {
        secondTrueCount++;
      }
    }
    expect(secondTrueCount).toEqual(1);
  });
  it("it highlights the currently selected item", async () => {
    const {
      getByText,
      wrapper,
      debug
    } = render(BranchPicker);

    const item3Name = wrapper.vm.companies[2].name;
    const item3 = getByText(item3Name);

    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).toContain("Alpha");

    await fireEvent.click(item3);

    const activeItem2 = wrapper.find(".active");
    expect(activeItem2.text()).toContain("Gamma");
  });
  it("It renders stores according to company selected", async () => {
    const {
      getByText,
      wrapper,
      debug
    } = render(BranchPicker);
    const companyName = wrapper.vm.companies[0].name;
    const itemSelected = getByText(companyName);
    await fireEvent.click(itemSelected);
    const storeListed = wrapper.vm.companies[0].stores[0].name;
    expect(storeListed).toContain('Store1');
  });
  it("It adds class active item selected", async () => {
    const {
      getByText,
      wrapper,
      debug
    } = render(BranchPicker);
    const companyName = wrapper.vm.companies[0].name;
    const companySelected = getByText(companyName);
    wrapper.vm.handleCompanySelect(companyName.key);
    await fireEvent.click(companySelected);
    let activeButtons = wrapper.findAll('.active');

    const storeName = wrapper.vm.stores[0].name;
    const storeListed = getByText(storeName);
    wrapper.vm.handleStoreSelect(storeListed.key);
    await fireEvent.click(storeListed);

    activeButtons = wrapper.findAll('.active');
    expect(activeButtons.length).toBe(2);

    const storeSelected = wrapper.findAll('.active').at(1);
    expect(storeSelected.text()).toContain('Store1');

  });
  // it('It shows and hide columns when Cerrar is clicked', async () => {
  //   const {
  //     getByText,
  //     wrapper,
  //     debug
  //   } = render(BranchPicker);
  //   const closeBtn = wrapper.find('a');
  //   wrapper.vm.handleCloseColumns();
  //   debug();
  // });
});