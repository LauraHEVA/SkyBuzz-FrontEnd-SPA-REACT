import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

describe("Given a App Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a footer with three icons as Links", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.queryAllByRole("link");

      expect(links[0]).toBeInTheDocument();
      expect(links[1]).toBeInTheDocument();
      expect(links[2]).toBeInTheDocument();
      expect(links).toHaveLength(3);
    });
  });
});
