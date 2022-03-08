import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Given a Header Component", () => {
  describe("When it receives the text 'World'", () => {
    test("Then it should render a title with the text 'World'", () => {
      const text = "World";

      render(<Header title={text} />);

      const foundTitle = screen.queryByRole("heading", { text: text });

      expect(foundTitle).toBeInTheDocument();
    });
  });
});
