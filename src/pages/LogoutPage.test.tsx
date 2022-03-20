import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import LogoutPage from "./LogoutPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a LogoutPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a paragraph with the text 'React Redux'", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogoutPage />
          </Provider>
        </BrowserRouter>
      );

      const textFound1 = await screen.findByText(/create an account/i);
      const textFound2 = await screen.findByText(/skybuzz/i);

      expect(textFound1).toBeInTheDocument();
      expect(textFound2).toBeInTheDocument();
    });
  });
});
