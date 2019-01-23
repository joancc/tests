/* eslint-disable no-undef*/
import { shallowMount } from '@vue/test-utils';
import ItemCompany from './../ItemCompany.vue';
import ItemCompanyDisabled from './../ItemCompanyDisabled.vue';
describe('ItemCompany test with companyActive equal to true', () => {
    const wrapper = shallowMount(ItemCompany, {
        propsData: {
            companyActive: true
        },
    });
    test('disabled is not present if companyActive property is true', () => {

        expect(wrapper.find('button').is('[disabled]')).toBe(false);
    });
    test('not renders the ItemCompanyDisabled when companyActive is true', () => {
        expect(wrapper.find(ItemCompanyDisabled).exists()).toBe(false);
    });
});
describe('ItemCompany test with companyActive equal to false', () => {
    const wrapper = shallowMount(ItemCompany, {
        propsData: {
            companyActive: false
        },
    });
    test('disabled is present if companyActive property is false', () => {

        expect(wrapper.find('button').is('[disabled]')).toBe(true);
    });
    test('renders the ItemCompanyDisabled when companyActive is false', () => {
        expect(wrapper.find(ItemCompanyDisabled).exists()).toBe(true);
    });
}); 