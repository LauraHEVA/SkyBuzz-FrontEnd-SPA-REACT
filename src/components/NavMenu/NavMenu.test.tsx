import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./NavMenu";

describe("Given a NavMenu Component", () => {
  describe("When it's rendered", () => {
    test("Then it should display three icons as Links", () => {
      render(
        <BrowserRouter>
          <NavMenu />
        </BrowserRouter>
      );

      const links = screen.queryAllByRole("link");

      expect(links[0]).toBeInTheDocument();
      expect(links[1]).toBeInTheDocument();
      expect(links[2]).toBeInTheDocument();
      expect(links).toHaveLength(3);
    });
  });
});
