import { shallowMount } from "@vue/test-utils";
import LoginButton from "@/components/LoginButton.vue";

describe("LoginButton", () => {
  it("renders a button with the correct text", () => {
    const wrapper = shallowMount(LoginButton);
    const button = wrapper.find("button");

    expect(button.text()).toBe("Login");
  });

  it("emits a login event when clicked", () => {
    const wrapper = shallowMount(LoginButton);
    const button = wrapper.find("button");

    button.trigger("click");

    expect(wrapper.emitted("login")).toBeTruthy();
  });
});
