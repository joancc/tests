/* eslint-disable no-undef */
import { mount, shallowMount } from '@vue/test-utils';
import BranchesComponent from './../BranchesComponent.vue';
import ItemCompany from './../ItemCompany.vue';

describe('What happen when receibe a prop', () => {
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
    test('the component exist if ther are some data from branches', () => {
        expect(wrapper.find(ItemCompany).exists()).toBe(true);
    });
});