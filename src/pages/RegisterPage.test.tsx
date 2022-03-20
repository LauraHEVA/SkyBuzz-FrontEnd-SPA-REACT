import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with the text 'Create an account'", async () => {
      const text1 = "Create an account";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const textFound2 = await screen.findByText(/create an account/i);
      const headingFound = screen.getByRole("heading", { level: 3 });

      expect(textFound2).toBeInTheDocument();
      expect(headingFound.textContent).toBe(text1);
    });

    test("Then it should render two buttons with the text 'Log in' and 'Register'", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const linkFound1 = screen.getByRole("button", { name: "Register" });

      expect(linkFound1).toBeInTheDocument();
    });
  });
});
