import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import BuzzDetail from "./BuzzDetail";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given BuzzDetail Component", () => {
  describe("When its rendered with a message 'Typescript I Hate U' and the user clicks on it", () => {
    test("Then it should display paragraph with the text 'Typescript I Hate U' and navigate to the detail page", () => {
      const textMessage = "Typescript I Hate U";
      const buzzFake = {
        topic: "general",
        likes: 0,
        comments: [],
        author: {
          name: "LauHater",
          id: "623245decaa7d69f96f10a95",
          username: "Laura0",
        },
        text: "Typescript I Hate U",
        id: "324k2l",
        date: new Date().toDateString(),
      };
      TimeAgo.addLocale(en);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BuzzDetail
              buzz={buzzFake}
              onClickTrash={() => {}}
              onClickHeart={() => {}}
            />
          </Provider>
        </BrowserRouter>
      );

      const foundText = screen.getByText(textMessage);

      expect(foundText).toBeInTheDocument();
    });
  });

  describe("When its rendered with a buzz that has a comment with the text 'Pulp Fiction' in the array of comments", () => {
    test("Then it should display a paragraph with the text 'Pulp Fiction'", () => {
      const textMessage = "Pulp Fiction";
      const buzzFake = {
        topic: "general",
        likes: 0,
        comments: [
          {
            author: {
              name: "Laura",
              username: "Laura0",
              id: "623245decaa7d69f96f10a95",
            },
            text: "Pulp Fiction",
            topic: "general",
            likes: 0,
            date: "2022-03-21T23:40:07.555Z",
            id: "62390cd7815f7c4c0b411f6f",
          },
        ],
        author: {
          name: "LauHater",
          id: "623245decaa7d69f96f10a95",
          username: "Laura0",
        },
        text: "Typescript I Hate U",
        id: "324k2l",
        date: new Date().toDateString(),
      };
      TimeAgo.addLocale(en);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <BuzzDetail
              buzz={buzzFake}
              onClickTrash={() => {}}
              onClickHeart={() => {}}
            />
          </Provider>
        </BrowserRouter>
      );

      const foundText = screen.getByText(textMessage);

      expect(foundText).toBeInTheDocument();
    });
  });
});
