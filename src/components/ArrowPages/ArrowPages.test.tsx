import { render, screen } from "@testing-library/react";
import ArrowPages from "./ArrowPages";

describe("Given ArrowPages Component", () => {
  describe("When its rendered with showSide false", () => {
    test("Then it should display a right arrow icon", () => {
      const dataTest = "pageArrow";
      const action = jest.fn();

      render(
        <ArrowPages actionOnClick={action} disabled={false} showSide={false} />
      );

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
  describe("When its rendered with showSide true", () => {
    test("Then it should display a left arrow icon", () => {
      const dataTest = "pageArrow";
      const action = jest.fn();

      render(
        <ArrowPages actionOnClick={action} disabled={false} showSide={true} />
      );

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });

  describe("When its rendered with disabled true and showSide true", () => {
    test("Then it should display a left arrow icon disabled", () => {
      const dataTest = "pageArrow";
      const action = jest.fn();

      render(
        <ArrowPages actionOnClick={action} disabled={true} showSide={true} />
      );

      const foundElement = screen.queryByTestId(dataTest);

      expect(foundElement).toBeInTheDocument();
    });
  });
});
