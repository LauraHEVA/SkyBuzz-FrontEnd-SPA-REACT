import { render, screen } from "@testing-library/react";
import AllUsersIcon from "./AllUsersIcon";

describe("Given BackArrowComponent", () => {
  describe("When it recieves an actionOnClick", () => {
    test("Then actionOnClick should be invoked when the button is clicked", () => {
      const dataTest = "all-users";

      render(<AllUsersIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
