/* eslint-disable no-undef*/
import { shallowMount } from '@vue/test-utils';
import CompaniesComponent from './../CompaniesComponent.vue';
import ItemCompany from './../ItemCompany.vue';
import EnterpriseBanner from './../EnterpriseBanner.vue';


describe('Companies test', () => {
    const wrapper = shallowMount(CompaniesComponent, {
        propsData: {
            componentName: 'Empresas',
            componentIcon: 'companies',
            enterpriseData: [
                {
                    "company_id": 1104,
                    "emitter": {
                        "id": 781,
                        "tax_id": "VAVV820109B47",
                        "business_name": "RFC PRUEBA"
                    }
                },
                {
                    "company_id": 842,
                    "emitter": {
                        "id": 383,
                        "tax_id": "COGJ820828G40",
                        "business_name": "QA Gestionix"
                    }
                }
            ]
        },
    });
    test("Calls messageBranches() when click one company and acts if an ID is passed", () => {
        wrapper.vm.messageBranches(1104);
        // expect(typeof (wrapper.emitted().enterpriseBranches[0][0])).toBe('number');
        expect(wrapper.emitted().messageBranches).toBeTruthy;
    });
    test('renders the ItemCompany when there are companies to show', () => {
        expect(wrapper.find(ItemCompany).exists()).toBe(true);
    });
    test('renders the EnterpriseBanner when there are title and icon to show', () => {
        expect(wrapper.find(EnterpriseBanner).exists()).toBe(true);
    });
    test('The click over an item component, go over a messageBranches function', () => {
        wrapper.setMethods({ messageBranches: jest.fn() });
        wrapper.find('.company').trigger('click');
        expect(wrapper.vm.messageBranches).toHaveBeenCalledTimes(1);
    });
});

describe('Companies test without props', () => {
    const wrapper = shallowMount(CompaniesComponent);
    const wrapper2 = shallowMount(ItemCompany);
    test('not renders the ItemCompany when there are not companies to show', () => {
        expect(wrapper.find(ItemCompany).exists()).toBe(false);
    });
    test('disabled property', () => {
        expect(wrapper2.find('button').is('[disabled]')).toBe(true);
    });
}); 
