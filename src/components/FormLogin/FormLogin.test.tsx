import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import FormLogin from "./FormLogin";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a formLogin component", () => {
  describe("When it's rendered and the button Register is clicked", () => {
    test("It should call navigate method", () => {
      const textButton = "Register";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormLogin />
          </Provider>
        </BrowserRouter>
      );

      const buttonFounded = screen.getByText(textButton);
      userEvent.click(buttonFounded);

      expect(mockNavigate).toHaveBeenCalled();
      expect(buttonFounded).toBeInTheDocument();
    });
    describe("When it's rendered and the button Log in is clicked", () => {
      test("It should display a button with the text 'Log in", () => {
        const textButton = "Log in";

        render(
          <BrowserRouter>
            <Provider store={store}>
              <FormLogin />
            </Provider>
          </BrowserRouter>
        );

        const buttonFounded = screen.getByText(textButton);

        expect(buttonFounded).toBeInTheDocument();
      });
    });

    test("It should display a form with two inputs to writte a message", () => {
      const textButton = "Log in";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormLogin />
          </Provider>
        </BrowserRouter>
      );

      const foundElement1 = screen.queryByTestId("inputUsername");
      const foundElement2 = screen.queryByTestId("inputPassword");

      userEvent.type(foundElement1, "Luisito");
      userEvent.type(foundElement2, "Luisito1234");

      const buttonFounded = screen.getByText(textButton);
      userEvent.click(buttonFounded);

      expect(foundElement1).toBeInTheDocument();
      expect(foundElement2).toBeInTheDocument();

      expect(foundElement1).toHaveValue("Luisito");
      expect(foundElement2).toHaveValue("Luisito1234");
    });
  });
});
