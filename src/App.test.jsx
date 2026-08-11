import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("App Test", () => {
  render(<App />);

  it("EmailFramework component renders", () => {
    const emailFramework = screen.getByTestId("email-framework");
    expect(emailFramework).toBeInTheDocument();
  });

  it("Form component renders", () => {
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
  });

  it("Email Background input renders with the initial default value", async () => {
    const containerInput = screen.getByLabelText("Email Background");
    expect(containerInput).toHaveValue("#F6F5F3");
  });

  it("Hero Background input renders with the initial default value", async () => {
    const containerInput = screen.getByLabelText("Hero Background");
    expect(containerInput).toHaveValue("#FFFFFF");
  });

  it("Sub Background input renders with the initial default value", async () => {
    const containerInput = screen.getByLabelText("Sub Background");
    expect(containerInput).toHaveValue("#FFFFFF");
  });
});
