import Buzz from "./Buzz";
import { render, screen } from "@testing-library/react";

describe("Given a Buzz Component", () => {
  describe("When it receives a buzz with the text 'Queen is awesome'", () => {
    test("Then it should render a paragraph with the text 'Queen is awesome'", () => {
      const buzz = {
        category: "general",
        likes: 0,
        comments: [],
        author: "Freddie",
        text: "Queen is awesome",
        date: "2022-03-08T19:21:30.764Z",
        id: "324k2l",
      };

      const text = "Queen is awesome";

      render(<Buzz buzz={buzz} />);

      const foundMessageText = screen.getByText(text);

      expect(foundMessageText).toBeInTheDocument();
    });
  });

  describe("When it receives a buzz with the author 'Freddie'", () => {
    test("Then it should render a span with the letters 'FR' inside", () => {
      const buzz = {
        category: "general",
        likes: 0,
        comments: [],
        author: "Freddie",
        text: "Queen is awesome",
        date: "2022-03-08T19:21:30.764Z",
        id: "324k2l",
      };
      const text = "FR";

      render(<Buzz buzz={buzz} />);
      const foundSpanInitials = screen.getByText(text);

      expect(foundSpanInitials).toBeInTheDocument();
    });
  });
});
