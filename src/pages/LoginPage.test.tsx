import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a paragraph with the text 'React Redux'", async () => {
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
  });
});
