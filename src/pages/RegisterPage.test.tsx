import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import LoginPage from "./LoginPage";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a paragraph with the text 'Create an account'", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const textFound2 = await screen.findByText(/create an account/i);

      expect(textFound2).toBeInTheDocument();
    });

    test("Then it should render a link with the text 'Log in'", async () => {
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
  });
});
