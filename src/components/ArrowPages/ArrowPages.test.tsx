import { render, screen } from "@testing-library/react";
import ArrowPages from "./ArrowPages";

describe("Given ArrowPages Component", () => {
  describe("When its rendered", () => {
    test("Then it should display two arrows", () => {
      const dataTest = "pageArrow";
      const action = jest.fn();

      render(
        <ArrowPages actionOnClick={action} disabled={false} showSide={false} />
      );

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
