
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import LoginPage from "./page";

describe("Login Page", () => {
  // Test 1
  it("should render the login page", () => {
    render(<LoginPage />);

    expect(
      screen.getByRole("heading", { name: "Welcome Back" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Sign In" })
    ).toBeInTheDocument();
  });

  // Test 2
  it("should display email and password fields", () => {
    render(<LoginPage />);

    expect(
      screen.getByRole("textbox", { name: /Email Address/ })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Password/)
    ).toBeInTheDocument();
  });

  // Test 3
  it("should disable login button when fields are empty", () => {
    render(<LoginPage />);

    expect(
      screen.getByRole("button", { name: "Sign In" })
    ).toBeDisabled();
  });

  // Test 4
  it("should enable login button when email and password are entered", () => {
    render(<LoginPage />);

    fireEvent.change(
      screen.getByRole("textbox", { name: /Email Address/ }),
      { target: { value: "test@example.com" } }
    );

    fireEvent.change(
      screen.getByLabelText(/Password/),
      { target: { value: "password123" } }
    );

    expect(
      screen.getByRole("button", { name: "Sign In" })
    ).toBeEnabled();
  });

  // Test 5
  it("should show loading state when login form is submitted", () => {
    render(<LoginPage />);

    fireEvent.change(
      screen.getByRole("textbox", { name: /Email Address/ }),
      { target: { value: "test@example.com" } }
    );

    fireEvent.change(
      screen.getByLabelText(/Password/),
      { target: { value: "password123" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Sign In" })
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // Test 6
  it("should submit login credentials successfully", async () => {
    const consoleSpy = vi
      .spyOn(console, "log")
      .mockImplementation(() => {});

    render(<LoginPage />);

    fireEvent.change(
      screen.getByRole("textbox", { name: /Email Address/ }),
      { target: { value: "test@example.com" } }
    );

    fireEvent.change(
      screen.getByLabelText(/Password/),
      { target: { value: "password123" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Sign In" })
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1600));
    });

    expect(consoleSpy).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });

    expect(
      screen.getByRole("button", { name: "Sign In" })
    ).toBeEnabled();
  });

  // Test 7
  it("should display forgot password link", () => {
    render(<LoginPage />);

    expect(
      screen.getByRole("link", { name: "Forgot password?" })
    ).toHaveAttribute("href", "/forgot-password");
  });

  // Test 8
  it("should display create account link", () => {
    render(<LoginPage />);

    expect(
      screen.getByRole("link", { name: "Create account" })
    ).toHaveAttribute("href", "/register");
  });
});
