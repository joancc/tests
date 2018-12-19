import {
  mount
} from "@vue/test-utils";

import SomeComponent from "../SomeComponent.vue";
import App from "../../App.vue";
import Input from "@/components/Input.vue";


describe("SomeComponent.vue", () => {
  const wrapper = mount(SomeComponent);
  it("It has buttons", () => {
    const buttons = wrapper.findAll(".button");
    expect(buttons.length).toBe(2);
  });
  it("First button has class is-report and has text 'Cancelado'", () => {
    const button = wrapper.find("a:first-child");
    expect(button.classes("is-report")).toBe(true);
    expect(button.text()).toBe("Cancelado");
  });
  it("Last button has class is-income and is-outlined", () => {
    const button = wrapper.find("a:last-child");
    expect(button.classes("is-income")).toBe(true);
    expect(button.classes("is-outlined")).toBe(true)
  });
  it('Button change from disabled to valid when input has a valid input', () => {
    const button = wrapper.find('a:last-child');
    expect(button.classes('disabled')).toBe(true);
  });
});

describe('App.vue', () => {
  const wrapper = mount(App);
  it('Renders 2 children components properly', () => {
    const children = wrapper.vm.$children;
    expect(children.length).toBe(2);
  });
  it('Button Class active when input is valid', () => {
    const input = wrapper.find(Input);
    const buttonDisabled = wrapper.find('.disabled');
    expect(buttonDisabled.classes('disabled')).toBe(true);
    input.vm.$emit('changeClass');
    expect(buttonDisabled.classes()).not.toBe('disabled');
  });
})

describe('Input.vue', () => {
  const wrapper = mount(Input);
  it('Change input class when valid', () => {
    const input = wrapper.find('input');
    input.setValue('HHHH')
    expect(input.classes("valid")).toBe(true);
  });
  it('Event emited', () => {
    const str = 'Hola';
    wrapper.vm.$emit('validButton', str.length);
    expect(wrapper.emitted().validButton).toBeTruthy();
  });
});