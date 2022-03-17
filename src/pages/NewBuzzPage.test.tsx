import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import NewBuzzPage from "./NewBuzzPage";

describe("Given a NewBuzzPage component", () => {
  describe("When it's rendered", () => {
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
