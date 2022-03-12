import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TrashIcon from "./TrashIcon";

describe("Given TrashIcon component", () => {
  describe("When its rendered", () => {
    test("Then it should display a trash can icon", () => {
      const dataTest = "trash-can";

      render(<TrashIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });

  describe("When it recieves an actionOnClick", () => {
    test("Then actionOnClick should be invoked when the icon is clicked", () => {
      const action = jest.fn();
      const dataTest = "trash-can";

      render(<TrashIcon onClick={action} />);

      const foundElement = screen.queryByTestId(dataTest);
      userEvent.click(foundElement);

      expect(action).toHaveBeenCalled();
    });
  });
});
