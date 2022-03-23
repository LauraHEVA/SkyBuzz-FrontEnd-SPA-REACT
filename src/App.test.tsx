import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

const mockLocalStorage = {
  removeItem: () => jest.fn(),
  getItem: () => ({ UserToken: "fdsa" }),
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Given a App Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a h1 element with the text 'SkyBuzz'", () => {
      const expectedText = "SkyBuzz";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const foundHeading = screen.getByRole("heading", { level: 1 });

      expect(foundHeading.textContent).toBe(expectedText);
    });
  });

  describe("When it's rendered and the user is logged in", () => {
    test("Then it should render a span element with the text 'Log Out'", async () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: true },
        buzzs: [
          {
            topic: "general",
            likes: 0,
            comments: [],
            author: {
              name: "Dan",
              username: "Danilovic",
              id: "623245decaa7d69f96f10a95",
            },
            text: "React Redux",
            id: "324k2lA",
            date: "2022-03-12T14:14:10.573Z",
          },
          {
            topic: "general",
            likes: 0,
            comments: [],
            author: {
              name: "Dan",
              username: "Abramov",
              id: "623245decaa7d69f96f10a95",
            },
            text: "I Hate Typescript",
            id: "324k2lB",
            date: "2022-03-12T14:14:10.573Z",
          },
        ],
      });
      TimeAgo.addLocale(en);

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const textFound = screen.getByRole("heading", { level: 1 });

      expect(textFound.textContent).toBe("SkyBuzz");
    });
  });
});
