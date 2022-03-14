import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import FormNewBuzz from "./FormNewBuzz";

describe("Given a form component", () => {
  describe("When it's rendered", () => {
    test("It should display a button with the text 'Buzz It!", () => {
      const textButton = "Buzz It!";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormNewBuzz />
          </Provider>
        </BrowserRouter>
      );

      const textFounded = screen.getByText(textButton);

      expect(textFounded).toBeInTheDocument();
    });

    test("It should display a form with an input to writte a message", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormNewBuzz />
          </Provider>
        </BrowserRouter>
      );

      const textboxFounded = screen.getByRole("textbox", {
        name: "Writte your buzz here...",
      });

      expect(textboxFounded).toBeInTheDocument();
    });

    test("It should display a form with an options to select", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormNewBuzz />
          </Provider>
        </BrowserRouter>
      );

      const comboboxFounded = screen.getByRole("combobox", {
        name: "Topic",
      });

      const option1Founded = screen.getByRole("option", {
        name: "General",
      });
      const option2Founded = screen.getByRole("option", {
        name: "Resources",
      });
      const option3Founded = screen.getByRole("option", {
        name: "PlayTime",
      });
      const option4Founded = screen.getByRole("option", {
        name: "Events",
      });
      const option5Founded = screen.getByRole("option", {
        name: "Jobs",
      });
      const allOptions = screen.getAllByRole("option");

      expect(comboboxFounded).toBeInTheDocument();
      expect(option1Founded).toBeInTheDocument();
      expect(option2Founded).toBeInTheDocument();
      expect(option3Founded).toBeInTheDocument();
      expect(option4Founded).toBeInTheDocument();
      expect(option5Founded).toBeInTheDocument();

      expect(allOptions).toHaveLength(5);
    });
  });
});
