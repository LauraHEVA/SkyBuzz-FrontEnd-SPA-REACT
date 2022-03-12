import { render, screen } from "@testing-library/react";
import UserIcon from "./UserIcon";

describe("Given HeartIcon component", () => {
  describe("When its rendered", () => {
    test("Then it should display a user icon", () => {
      const dataTest = "user";

      render(<UserIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
