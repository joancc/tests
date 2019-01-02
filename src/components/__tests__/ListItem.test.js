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

import ListItem from '@/components/ListItem.vue';


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


// describe("ListItem", () => {
//   it('It opens request for disabled item', async () => {
//     const hideRequest = jest.fn((showRequest) => {
//       showRequest = !showRequest;
//     });
//     const handleCompanySelect = jest.fn();
//     const {
//       wrapper,
//       getByText,
//       debug
//     } = render(ListItem, {
//       propsData: {
//         company: {
//           name: "Store3",
//           key: "1234567890",
//           status: false
//         },
//         showRequest: false,
//         requestId: '1234567890',
//         handleRequest: hideRequest,
//         handleCompanySelect: handleCompanySelect
//       }
//     });
//     expect(wrapper).not.toContain('Solicitar permiso para la Tienda');
//     const question = wrapper.find('a');
//     await question.trigger('click');
//     expect(getByText('¿Solicitar permiso para la Tienda Store3?')).toBeTruthy();
//   });
// })