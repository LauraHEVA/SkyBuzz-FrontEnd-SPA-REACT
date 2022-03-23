import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

describe("Given a Header Component", () => {
  describe("When it receives the text 'World'", () => {
    test("Then it should render a title with the text 'World'", () => {
      const text = "World";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header title={text} />
          </BrowserRouter>
        </Provider>
      );

      const foundTitle = screen.getByRole("heading");

      expect(foundTitle.textContent).toBe(text);
    });
  });

  describe("When the user is logged in", () => {
    test("Then it should render a link with the text 'Log Out'", () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: true },
      });
      const text = "Log Out";

      render(
        <Provider store={storeMock}>
          <BrowserRouter>
            <Header title={text} />
          </BrowserRouter>
        </Provider>
      );

      const linkFounded = screen.getByRole("link", { name: text });

      expect(linkFounded).toBeInTheDocument();
    });
  });

  describe("When the user is logged out", () => {
    test("Then it should render a link with the text 'Log In'", () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: false },
      });
      const text = "Log In";

      render(
        <Provider store={storeMock}>
          <BrowserRouter>
            <Header title={text} />
          </BrowserRouter>
        </Provider>
      );

      const foundLink = screen.getByRole("link", { name: text });

      expect(foundLink).toBeInTheDocument();
    });
  });
});
