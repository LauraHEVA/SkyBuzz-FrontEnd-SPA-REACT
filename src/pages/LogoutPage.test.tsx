import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LogoutPage from "./LogoutPage";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockLocalStorage = {
  removeItem: () => jest.fn(),
  getItem: () => ({ UserToken: "fdsa" }),
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Given a LogoutPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a paragraph with the text 'Create an account' and a heading with 'SkyBuzz'", async () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: true },
      });
      const expectedText = "Are you sure you want to log out?";

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <LogoutPage />
          </Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByRole("heading", { level: 3 });
      expect(foundHeading.textContent).toBe(expectedText);
    });
  });
});
