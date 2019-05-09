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
import Vuex from "vuex";
import BranchPicker from '../BranchPicker.vue';

function render(component, options, storeOptions) {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store(storeOptions);

    const wrapper = mount(component, {
        localVue,
        attachToDocument: true,
        ...options,
        store
    });

    return {
        wrapper,
        ...getQueriesForElement(wrapper.element),
        debug: () => console.log(prettyDOM(wrapper.element))
    };
}
describe("BranchPicker", () => {
    const branches = [
        {
            branch_id: 144,
            type: "Store",
            name: "San Juan",
            active: true
        },
        {
            branch_id: 4687,
            type: "Shop",
            name: "Fer_Pruebas_test",
            active: true
        },
        {
            branch_id: 4706,
            type: "Shop",
            name: "David Test",
            active: true
        },
        {
            branch_id: 145,
            type: "Shop",
            name: "Coyoacán",
            active: true
        }
    ];
    let getters = {
        companiesFromServer: () => [
            {
                company_id: 17,
                active: true,
                status: true,
                emitter: {
                    id: 11,
                    tax_id: "JAR1106038RA",
                    business_name: "Soluciones Eléctricas",
                    commercial_name: "Soluciones Eléctricas Ibarra Updated S.A. de C.V."
                }
            }
        ],
        branchList: () => branches,
        showStoreColumn: () => true
    };
    let actions = {
        getCompaniesFromServer: jest.fn(),
        handleCompanySelect: jest.fn(id => id)
    };

    let storeOptions = {
        getters,
        actions
    };
    fit("calls store action getCompaniesFromServer when the component is rendered", async () => {
        const { wrapper, getByText } = render(BranchPicker, {}, storeOptions);
        expect(getByText("Empresas")).toBeTruthy();
    });
});
