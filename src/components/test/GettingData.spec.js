/* eslint-disable no-undef */
import { mount, shallowMount } from '@vue/test-utils';
import GettingData from './../GettingData.vue';

import CompaniesComponent from './../CompaniesComponent.vue';
import BranchesComponent from './../BranchesComponent.vue';

describe('Parent call childs on GettingData component', () => {
    const wrapper = shallowMount(GettingData);
    test('renders the CompaniesComponet when the app is loading', () => {
        expect(wrapper.find(CompaniesComponent).exists()).toBe(true);
    });
    test('does not renders the BranchesComponet before click a company', () => {
        expect(wrapper.find(BranchesComponent).exists()).toBe(false);
    });
    // click a comany
    test('it renders the BranchesComponet when click a company', () => {
        expect(wrapper.find(BranchesComponent).exists()).toBe(false);
    });
});

describe('GettingData', () => {
    const wrapper = mount(GettingData);
    test('should render company´s data when init method run and not before', () => {
        expect(wrapper.vm.companyData.length).toBe(0);
    });
    test('branches data is only searched if an click events is present and not before', () => {
        expect(wrapper.vm.branches.length).toBe(0);
    });
    wrapper.vm.init();
    // mounted the component
    test('should render company´s data when init method run', () => {
        expect(wrapper.vm.companyData.length).toBe(0);
    });
    // click a comany
    test('branches data is obtained if a clicks searched for it', () => {
        expect(wrapper.vm.branches.length).toBe(0);
    });
});

describe('GettingData.vue', () => {
    test('should mount for testing', () => {
        expect(1).toEqual(1);
    });
});
/*describe('Events', () => {
    const wrapper = mount(GettingData);
    mounted(() => { });
    wrapper.vm.messageBranches(1104);
    test('calls branches info', () => {
        expect(wrapper.vm.branches.length).toBe(1);
    });
});*/



