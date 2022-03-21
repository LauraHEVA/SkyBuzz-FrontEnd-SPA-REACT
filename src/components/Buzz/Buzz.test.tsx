import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Buzz from "./Buzz";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

describe("Given Buzz Component", () => {
  describe("When its rendered with a message 'Typescript I Hate U'", () => {
    test("Then it should display paragraph with the text 'Typescript I Hate U'", () => {
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
            <Buzz
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
