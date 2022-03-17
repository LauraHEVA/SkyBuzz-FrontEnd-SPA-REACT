import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

describe("Given a App Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a h1 element with the text 'SkyBuzz'", () => {
      const expectedText = "SkyBuzz";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByRole("heading", { level: 1 });

      expect(foundHeading.textContent).toBe(expectedText);
    });
  });
});
