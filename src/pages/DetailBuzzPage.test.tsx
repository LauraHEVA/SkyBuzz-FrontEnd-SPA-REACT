import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import DetailBuzzPage from "./DetailBuzzPage";

describe("Given a DetailBuzz component", () => {
  describe("When it's rendered with a 6230c7a2f9d0f5ee1f58d6d9 id as params", () => {
    test("Then it should render a button with the text 'New Buzz'", async () => {
      TimeAgo.addLocale(en);
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: true },
        oneBuzz: {
          topic: "general",
          likes: 0,
          comments: [],
          author: {
            name: "Dan",
            username: "Abramov",
            id: "623245decaa7d69f96f10a95",
          },
          text: "React Redux",
          id: "6230c7a2f9d0f5ee1f58d6d9",
          date: "2022-03-12T14:14:10.573Z",
        },
      });

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <DetailBuzzPage />
          </Provider>
        </BrowserRouter>
      );

      const paragraphFound = await screen.findByText(/react redux/i);

      expect(paragraphFound).toBeInTheDocument();
    });
  });
});
