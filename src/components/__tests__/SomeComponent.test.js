import { mount } from "@vue/test-utils";
import "jest-dom/extend-expect";
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  wait
} from "dom-testing-library";

import Buttons from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Main from "@/App.vue";

describe("App.vue", () => {
  const wrapper = mount(Main);
  test("Renders children", () => {
    const children = wrapper.vm.$children;
    expect(children.length).toBe(2);
  });

  test("button change to active when the input is valid", () => {
    const inputChild = wrapper.find(Input);
    const button = wrapper.find("a:last-child");
    expect(button.classes("disabled")).toBe(true);
    inputChild.vm.$emit("ActiveButton");
    expect(button.classes()).not.toBe("disabled");
  });
});

describe("Buttons.vue", () => {
  const wrapper = mount(Buttons);

  test("there are two buttons", () => {
    const buttons = wrapper.findAll(".button");
    expect(buttons.length).toBe(2);
  });

  test("the button is disabled by default", () => {
    const button = wrapper.find("a:last-child");
    expect(button.classes("disabled")).toBe(true);
  });
});

describe("Input.vue", () => {
  test("Renders props message when passed", () => {
    const msg = "defaul message";
    const wrapper = mount(Input, { propsData: { msg } });
    expect(wrapper.find("h1").text()).toBe(msg);
  });

  test("Classes change when name is ", () => {
    const wrapper = mount(Input);
    const input = wrapper.find("input");
    expect(input.is("input")).toBe(true);
    input.setValue("Palmidia");
    expect(input.classes("error")).toBe(true);
    input.setValue("Montserratt");
    expect(input.classes("valid")).toBe(true);
  });

  test("Emitted event active button", () => {
    const wrapper = mount(Input);
    const name = "mario";
    wrapper.vm.$emit("ActiveButton", name.length);
    expect(wrapper.emitted().ActiveButton).toBeTruthy();
  });
});
