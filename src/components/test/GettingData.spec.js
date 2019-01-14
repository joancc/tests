/* eslint-disable no-undef */
import { mount, shallowMount } from '@vue/test-utils';
import GettingData from './../GettingData.vue';
import axios from "axios";

import CompaniesComponent from './../CompaniesComponent.vue';
import BranchesComponent from './../BranchesComponent.vue';

describe('GettingData test', () => {
    test('Has a mounted hook', () => {
        expect(typeof GettingData.mounted).toBe('function');
    });
    // Evaluate the results of functions in
    // the raw component options
    test('sets the correct default data', () => {
        const defaultData = GettingData.data();
        expect(defaultData.branches.length).toBe(0);
        expect(defaultData.companyData.length).toBe(0);
    });
    /* Inspect the component instance on mount
    test('correctly gets branches array', async () => {
        const wrapper = mount(CompaniesComponent);
        let authenticationPromise = await axios.post("https://api-test.gestionix.com/api/v3/users/authentication", {
            user: "qa@gestionix.com",
            password: "gestionix"
        });
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + authenticationPromise.data.access_token;
        let urlBranch = "https://api-test.gestionix.com/api/v3/branch_offices/?";

        axios.defaults.headers.common["Company"] = 1104;

        let branchesPromise = await axios.get(urlBranch, {});
        console.log(branchesPromise.data);
    });*/
});

describe('Parent call childs on GettingData component', () => {
    const wrapper = shallowMount(GettingData);
    test('renders the CompaniesComponet when the app is loading', () => {
        expect(wrapper.find(CompaniesComponent).exists()).toBe(true);
    });
    test('does not renders the BranchesComponet before click a company', () => {
        expect(wrapper.find(BranchesComponent).exists()).toBe(false);
    });
    // click a company adapt to be true
    test('it renders the BranchesComponet when click a company', () => {
        expect(wrapper.find(BranchesComponent).exists()).toBe(false);
    });
});




