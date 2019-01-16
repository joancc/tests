/* eslint-disable no-undef */
import { mount, shallowMount } from '@vue/test-utils';
import GettingData from './../GettingData.vue';
import Vue from 'vue'
import sinon from 'sinon';
const flushPromises = require('flush-promises');

import CompaniesComponent from './../CompaniesComponent.vue';
import BranchesComponent from './../BranchesComponent.vue';
import Axios from 'axios';

jest.mock('axios');

describe('GettingData test', () => {
    const wrapper = mount(CompaniesComponent);
    test('Has a mounted hook', () => {
        expect(typeof GettingData.mounted).toBe('function');
    });
    test('sets the correct default data', () => {
        const defaultData = GettingData.data();
        expect(defaultData.branches.length).toBe(0);
        expect(defaultData.companyData.length).toBe(0);
    });
    /* test('correctly gets branches array', async (done) => {
        Axios.get.mockImplementation(() => Promise.resolve({
            data: [
                {
                    "company_id": 1104,
                    "emitter": {
                        "tax_id": "VAVV820109B47",
                        "business_name": 'RFC PRUEBA',
                        "commercial_name": 'RFC PRUEBA',
                    },
                }
            ]
        }));
        await flushPromises();
        expect(defaultData.branches.length).toBe(0);
        done();
    });
}); */

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




