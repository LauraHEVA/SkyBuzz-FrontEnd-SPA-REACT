import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import HomePage from "./HomePage";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a NavBar with three icons as Links", () => {
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

  describe("When it's rendered with an array of Buzzs, with a text 'React Redux' in one of them", () => {
    test("Then it should render a paragraph with the text 'React Redux'", async () => {
      TimeAgo.addLocale(en);
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const textFound = await screen.findByText(/react redux/i);

      expect(textFound).toBeInTheDocument();
    });
  });
});
