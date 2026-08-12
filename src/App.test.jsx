import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("emailBg Test", () => {
  render(<App />);

  it("Email BG input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Email Background");
    expect(containerInput).toHaveValue("#F6F5F3");
  });

  it("Email BG input updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Email Background/i });
    fireEvent.input(inputEl, { target: { value: "#000000" } });
    expect(inputEl).toHaveValue("#000000");
  });
});

describe("heroStyles Test", () => {
  render(<App />);

  it("Hero BG input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Hero Background");
    expect(containerInput).toHaveValue("#FFFFFF");
  });

  it("Hero BG input value updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Hero Background/i });
    fireEvent.input(inputEl, { target: { value: "#000000" } });
    expect(inputEl).toHaveValue("#000000");
  });

  it("Hero Badge input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Hero Badge");
    expect(containerInput).toHaveValue("#161313");
  });

  it("Hero Badge input value updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Hero Badge/i });
    fireEvent.input(inputEl, { target: { value: "#111111" } });
    expect(inputEl).toHaveValue("#111111");
  });

  it("Hero Body Copy input is checked with the initial default value", () => {
    const { container } = render(<App />);
    const radioLight = container.querySelector(
      'input[name="heroBodyTextColor"][value="light"]',
    );
    const radioDark = container.querySelector(
      'input[name="heroBodyTextColor"][value="dark"]',
    );
    expect(radioLight).not.toBeChecked();
    expect(radioDark).toBeChecked();
  });

  it("Hero Primary CTA bgColor input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Hero Primary CTA");
    expect(containerInput).toHaveValue("#161313");
  });

  it("Hero Primary CTA bgColor input updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Hero Primary CTA/i });
    fireEvent.input(inputEl, { target: { value: "#222222" } });
    expect(inputEl).toHaveValue("#222222");
  });

  it("Hero Primary CTA TextColor input is checked with the initial default value", () => {
    const { container } = render(<App />);
    const radioLight = container.querySelector(
      'input[name="primaryCtaTextColor"][value="light"]',
    );
    const radioDark = container.querySelector(
      'input[name="primaryCtaTextColor"][value="dark"]',
    );
    expect(radioLight).toBeChecked();
    expect(radioDark).not.toBeChecked();
  });

  it("Hero Secondary CTA bgColor input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Hero Secondary CTA");
    expect(containerInput).toHaveValue("#E0DCD9");
  });

  it("Hero Secondary CTA bgColor input updates to new value", () => {
    const inputEl = screen.getByRole("textbox", {
      name: /Hero Secondary CTA/i,
    });
    fireEvent.input(inputEl, { target: { value: "#333333" } });
    expect(inputEl).toHaveValue("#333333");
  });

  it("Hero Secondary CTA TextColor input is checked with the initial default value", () => {
    const { container } = render(<App />);
    const radioLight = container.querySelector(
      'input[name="secondaryCtaTextColor"][value="light"]',
    );
    const radioDark = container.querySelector(
      'input[name="secondaryCtaTextColor"][value="dark"]',
    );
    expect(radioLight).not.toBeChecked();
    expect(radioDark).toBeChecked();
  });
});

describe("SubStyle Test", () => {
  render(<App />);

  it("Transition Badge input renders with the state default value", () => {
    const InputEl = screen.getByLabelText("Transition Badge");
    expect(InputEl).toHaveValue("#161313");
  });

  it("Transition Badge input updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Transition Badge/i });
    fireEvent.input(inputEl, { target: { value: "#444444" } });
    expect(inputEl).toHaveValue("#444444");
  });

  it("Transition TextColor input is checked with the initial default value", () => {
    const { container } = render(<App />);
    const radioLight = container.querySelector(
      'input[name="secondaryCtaTextColor"][value="light"]',
    );
    const radioDark = container.querySelector(
      'input[name="secondaryCtaTextColor"][value="dark"]',
    );
    expect(radioLight).not.toBeChecked();
    expect(radioDark).toBeChecked();
  });

  it("Sub BG input renders with the state default value", () => {
    const subBgInput = screen.getByLabelText("Sub Background");
    expect(subBgInput).toHaveValue("#FFFFFF");
  });

  it("Sub BG input value updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Sub Background/i });
    fireEvent.input(inputEl, { target: { value: "#000000" } });
    expect(inputEl).toHaveValue("#000000");
  });

  it("Sub Badge input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Sub Badge");
    expect(containerInput).toHaveValue("#161313");
  });

  it("Sub Secondary CTA bgColor input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Sub Secondary CTA");
    expect(containerInput).toHaveValue("#E0DCD9");
  });

  it("Sub Secondary CTA bgColor input value updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Sub Secondary CTA/i });
    fireEvent.input(inputEl, { target: { value: "#666666" } });
    expect(inputEl).toHaveValue("#666666");
  });

  it("Sub Secondary CTA TextColor input updates to new value", () => {
    const inputEl = screen.getByRole("textbox", {
      name: /Sub Secondary CTA/i,
    });
    fireEvent.input(inputEl, { target: { value: "#555555" } });
    expect(inputEl).toHaveValue("#555555");
  });

  it("Sub Secondary CTA TextColor input is checked with the initial default value", () => {
    const { container } = render(<App />);
    const radioLight = container.querySelector(
      'input[name="subSecondaryCtaTextColor"][value="light"]',
    );
    const radioDark = container.querySelector(
      'input[name="subSecondaryCtaTextColor"][value="dark"]',
    );
    expect(radioLight).not.toBeChecked();
    expect(radioDark).toBeChecked();
  });

  it("Sub Tertiary CTA bgColor input renders with the state default value", () => {
    const containerInput = screen.getByLabelText("Sub Tertiary CTA");
    expect(containerInput).toHaveValue("#E0DCD9");
  });

  it("Sub Tertiary CTA bgColor input value updates to new value", () => {
    const inputEl = screen.getByRole("textbox", { name: /Sub Tertiary CTA/i });
    fireEvent.input(inputEl, { target: { value: "#777777" } });
    expect(inputEl).toHaveValue("#777777");
  });

  it("Sub Tertiary CTA TextColor input updates to new value", () => {
    const inputEl = screen.getByRole("textbox", {
      name: /Sub Tertiary CTA/i,
    });
    fireEvent.input(inputEl, { target: { value: "#888888" } });
    expect(inputEl).toHaveValue("#888888");
  });

  it("Sub Tertiary CTA TextColor input is checked with the initial default value", () => {
    const { container } = render(<App />);
    const radioLight = container.querySelector(
      'input[name="subTertiaryCtaTextColor"][value="light"]',
    );
    const radioDark = container.querySelector(
      'input[name="subTertiaryCtaTextColor"][value="dark"]',
    );
    expect(radioLight).not.toBeChecked();
    expect(radioDark).toBeChecked();
  });
});
