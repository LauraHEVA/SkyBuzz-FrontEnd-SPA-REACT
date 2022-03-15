import { screen, render } from "@testing-library/react";
import ButtonSubmit from "./ButtonSubmit";

describe("Given ButtonSubmit component", () => {
  describe("When its instantiated", () => {
    test("Then it should render a button with the text 'Buzz It'", () => {
      const text = "Buzz It!";
      const action = jest.fn();

      render(
        <ButtonSubmit className="btn" actionOnClick={action} text={text} />
      );

      const button = screen.getByText(text);

      expect(button).toBeInTheDocument();
    });
  });
});
