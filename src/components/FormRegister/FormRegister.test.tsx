import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import FormRegister from "./FormRegister";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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

    test("It should display a link with the text 'Log In'", () => {
      const text = "Log In";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormRegister />
          </Provider>
        </BrowserRouter>
      );

      const foundLink = screen.getByRole("link", { name: text });

      expect(foundLink).toBeInTheDocument();
    });
  });

  describe("When the user writte 'Marta', 'Marta0' and 'Marta1234' at user, username and password inputs", () => {
    test("It should fill the inputs with the value 'Marta', 'Marta0' and 'Marta1234'", () => {
      const userText = "Marta";
      const usernameText = "Marta0";
      const passwordText = "Marta1234";
      const textButton = "Register";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormRegister />
          </Provider>
        </BrowserRouter>
      );

      const foundElement1 = screen.queryByTestId("inputName");
      const foundElement2 = screen.queryByTestId("inputUsername");
      const foundElement3 = screen.queryByTestId("inputPassword");

      userEvent.type(foundElement1 as HTMLElement, userText);
      userEvent.type(foundElement2 as HTMLElement, usernameText);
      userEvent.type(foundElement3 as HTMLElement, passwordText);

      const buttonFounded = screen.getByText(textButton);
      userEvent.click(buttonFounded);

      expect(foundElement1).toHaveValue(userText);
      expect(foundElement2).toHaveValue(usernameText);
      expect(foundElement3).toHaveValue(passwordText);
      expect(buttonFounded).not.toBeDisabled();
    });
  });
});
