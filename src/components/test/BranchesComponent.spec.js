/* eslint-disable no-undef */
import { mount, shallowMount } from '@vue/test-utils';
import BranchesComponent from './../BranchesComponent.vue';
import ItemCompany from './../ItemCompany.vue';

describe('Branches component test', () => {
    const wrapper = mount(BranchesComponent, {
        propsData: {
            isBranch: [
                {
                    "branch_id": 1778,
                    "type": "Store",
                    "name": "Patito",
                    "active": true
                }
            ]
        }
    })
    test('The component Item Company only exists if there are some data from branches', () => {
        expect(wrapper.find(ItemCompany).exists()).toBe(true);
    });
});