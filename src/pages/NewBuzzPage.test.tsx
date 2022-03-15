import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import HomePage from "./HomePage";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import NewBuzzPage from "./NewBuzzPage";

describe("Given a NewBuzzPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a h1 element with the text 'New Buzz'", () => {
      const expectedText = "New Buzz";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewBuzzPage />
          </Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByRole("heading", { name: expectedText });

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a NavBar with three icons as Links", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewBuzzPage />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.queryAllByRole("link");

      expect(links[0]).toBeInTheDocument();
      expect(links[1]).toBeInTheDocument();
      expect(links[2]).toBeInTheDocument();
      expect(links).toHaveLength(3);
    });

    test("Then it should render a button with the text 'Buzz It!' inside", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewBuzzPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonNewBuzz = screen.getByRole("button");

      expect(buttonNewBuzz).toBeInTheDocument();
      expect(buttonNewBuzz.textContent).toBe("Buzz It!");
    });
  });
});
