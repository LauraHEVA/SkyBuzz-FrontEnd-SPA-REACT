import { render, screen } from "@testing-library/react";
import AllUsersIcon from "./AllUsersIcon";

describe("Given AllUsersIcon Component", () => {
  describe("When its rendered", () => {
    test("Then it should display a users icon", () => {
      const dataTest = "all-users";

      render(<AllUsersIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
