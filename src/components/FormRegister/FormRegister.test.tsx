import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import FormRegister from "./FormRegister";

describe("Given a formRegister component", () => {
  describe("When it's rendered", () => {
    test("It should display a button with the text 'Buzz It!", () => {
      const textButton = "Register";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormRegister />
          </Provider>
        </BrowserRouter>
      );

      const textFounded = screen.getByText(textButton);

      expect(textFounded).toBeInTheDocument();
    });

    test("It should display a form with two inputs", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormRegister />
          </Provider>
        </BrowserRouter>
      );

      const textboxFounded = screen.getAllByRole("textbox");

      expect(textboxFounded).toHaveLength(2);
    });
  });
});
