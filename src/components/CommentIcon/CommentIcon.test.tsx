import { render, screen } from "@testing-library/react";
import CommentIcon from "./CommentIcon";

describe("Given CommentIcon component", () => {
  describe("When its rendered", () => {
    test("Then it should display a comment icon", () => {
      const dataTest = "comment";

      render(<CommentIcon />);

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
