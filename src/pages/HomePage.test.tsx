import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import HomePage from "./HomePage";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a NavBar with three icons as Links", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const links = screen.queryAllByRole("link");

      expect(links[0]).toBeInTheDocument();
      expect(links[1]).toBeInTheDocument();
      expect(links[2]).toBeInTheDocument();
      expect(links).toHaveLength(3);
    });
  });

  describe("When it's rendered with an array of Buzzs, with a text 'React Redux' in one of them", () => {
    test("Then it should render a paragraph with the text 'React Redux'", async () => {
      TimeAgo.addLocale(en);
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const textFound = await screen.findByText(/react redux/i);

      expect(textFound).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user is logged in", () => {
    test("Then it should render a button with the text 'New Buzz'", async () => {
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

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const buttonFound = await screen.findByText(/new buzz/i);

      expect(buttonFound).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an array of 11 buzzs", () => {
    test("Then it should render the arrow icons to change pages", async () => {
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
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "623ae7ce2c2779aaa8df6b38",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "324k2lBcad",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "324k2lasfwd",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "324kabcde",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "324k2l1234",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "32412445d",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "324kabcdddde",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "324k2laaaaa34",
          },
          {
            author: {
              name: "Guillem",
              username: "Guillem0",
              id: "62361397ae106fd04add2d52",
            },
            text: "Yo sinceramente no lo tengo en apuntes y ya esta perdidisimo en el mar del olvido",
            topic: "resources",
            date: "2022-03-23T09:26:38.590Z",
            likes: 0,
            isComment: false,
            comments: [],
            id: "3241244fffff5d",
          },
        ],
      });
      const dataTest = "pageArrow";

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const foundElement = screen.queryAllByTestId(dataTest);

      expect(foundElement).toHaveLength(2);
    });
  });
});
