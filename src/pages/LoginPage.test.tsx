import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a paragraph with the text 'sign in and start buzzing' and 'create an account'", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const textFound1 = await screen.findByText(/sign in and start buzzing/i);
      const textFound2 = await screen.findByText(/create an account/i);

      expect(textFound1).toBeInTheDocument();
      expect(textFound2).toBeInTheDocument();
    });

    test("Then it should render two buttons with the text 'Log in' and 'Register'", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const linkFound1 = screen.getByRole("button", { name: "Log in" });
      const linkFound2 = screen.getByRole("button", { name: "Register" });
      expect(linkFound1).toBeInTheDocument();
      expect(linkFound2).toBeInTheDocument();
    });

    test("Then it should render a heading with the text 'Sign in and start buzzing'", async () => {
      const text1 = "Sign in and start buzzing";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const headingFound = screen.getByRole("heading", {
        level: 3,
      });
      expect(headingFound.textContent).toBe(text1);
    });
  });
});
