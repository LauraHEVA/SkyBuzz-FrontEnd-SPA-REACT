import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a h2 element with the text 'Ups...There is nothing in this page'", () => {
      const expectedText = "Ups...There is nothing in this page.";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByRole("heading", { level: 2 });

      expect(foundHeading.textContent).toBe(expectedText);
    });

    test("Then it should render a link element with the text Home Page", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.queryByRole("link", { name: "Home Page" });

      expect(links).toBeInTheDocument();
    });
  });
});
