import { render, screen } from "@testing-library/react";
import EditIcon from "./EditIcon";

describe("Given EditIcon component", () => {
  describe("When its rendered", () => {
    test("Then it should display a pencil icon", () => {
      const dataTest = "edit";

      render(<EditIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
