import { render, screen } from "@testing-library/react";
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
});
