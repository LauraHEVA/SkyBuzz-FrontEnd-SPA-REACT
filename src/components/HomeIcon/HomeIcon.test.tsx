import { render, screen } from "@testing-library/react";
import HomeIcon from "./HomeIcon";

describe("Given HomeIcon component", () => {
  describe("When its rendered", () => {
    test("Then it should display a home icon", () => {
      const dataTest = "home";

      render(<HomeIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
