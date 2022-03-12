import { render, screen } from "@testing-library/react";
import HeartIcon from "./HeartIcon";

describe("Given HeartIcon component", () => {
  describe("When its rendered", () => {
    test("Then it should display a heart icon", () => {
      const dataTest = "heart";

      render(<HeartIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
