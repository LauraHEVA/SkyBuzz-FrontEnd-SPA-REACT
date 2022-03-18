import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header Component", () => {
  describe("When it receives the text 'World'", () => {
    test("Then it should render a title with the text 'World'", () => {
      const text = "World";

      render(
        <BrowserRouter>
          <Header title={text} />
        </BrowserRouter>
      );

      const foundTitle = screen.getByRole("heading");

      expect(foundTitle.textContent).toBe(text);
    });
  });
});
