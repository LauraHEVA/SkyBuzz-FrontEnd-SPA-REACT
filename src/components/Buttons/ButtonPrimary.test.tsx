import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonPrimary from "./ButtonPrimary";

describe("Given ButtonPrimary component", () => {
  describe("When its instantiated", () => {
    test("Then it should render a button with the text 'Buzz It'", () => {
      const text = "Buzz It!";
      const action = jest.fn();

      render(
        <ButtonPrimary className="btn" actionOnClick={action} text={text} />
      );

      const button = screen.getByText(text);
      const buttonRole = screen.getByRole("button");
      userEvent.click(buttonRole);

      expect(button).toBeInTheDocument();
      expect(buttonRole).toBeInTheDocument();
      expect(action).toHaveBeenCalled();
    });
  });
});
