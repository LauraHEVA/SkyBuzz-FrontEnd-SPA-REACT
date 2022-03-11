import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a h1 element with the text 'Buzzs'", () => {
      const expectedText = "Buzzs";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByText(expectedText);

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a footer with three icons as Links", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.queryAllByRole("link");

      expect(links[0]).toBeInTheDocument();
      expect(links[1]).toBeInTheDocument();
      expect(links[2]).toBeInTheDocument();
      expect(links).toHaveLength(3);
    });

    test("Then it should render a button with the text 'New Buzz' inside", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const buttonNewBuzz = screen.getByRole("button");

      expect(buttonNewBuzz).toBeInTheDocument();
      expect(buttonNewBuzz.textContent).toBe("New Buzz");
    });
  });
});
