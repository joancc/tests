/* eslint-disable no-undef */
import { mount, shallowMount } from '@vue/test-utils';
import CompaniesComponent from './../CompaniesComponent.vue';
import ItemCompany from './../ItemCompany.vue';

describe('Companies test', () => {
    const wrapper = mount(CompaniesComponent)
    test("calls handleClick when click on message", () => {
        const spy = spyOn(wrapper.vm, "messageBranches");

        const el = wrapper.find(".item company").trigger("click");
        expect(wrapper.vm.messageBranches).toBeCalled();
    });
});
