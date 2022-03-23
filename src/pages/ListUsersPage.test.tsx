import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import ListUsersPage from "./ListUsersPage";

describe("Given a ListUsers Page component", () => {
  describe("When it's rendered with an array of Users, with a text 'Luis' in one of them, and the user is logged in", () => {
    test("Then it should render a button with the text 'New Buzz'", async () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: true },
        users: [
          {
            buzzs: [],
            name: "Laura",
            username: "Laura0",
            password: "1234",
            id: "623245decaa7d69f96f10a95",
          },
          {
            buzzs: [],
            name: "Luis",
            username: "Luis0",
            password: "1234",
            id: "623392bccaa7d69f96f10aa2",
          },
        ],
      });

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <ListUsersPage />
          </Provider>
        </BrowserRouter>
      );

      const paragraphFound = await screen.findByText(/luis0/i);

      expect(paragraphFound).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an array of 11 Users", () => {
    test("Then it should render the arrow icons to change pages", async () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: true },
        users: [
          {
            buzzs: [],
            name: "Laura",
            username: "Laura0",
            password: "somepassw",
            id: "623245decaa7d69f96f10a95",
          },
          {
            buzzs: [],
            name: "Luis",
            username: "Luis0",
            password: "somepassw",
            id: "623392bccaa7d69f96f10aa2",
          },
          {
            name: "Guillem",
            username: "Guillem0",
            password: "somepassw",
            buzzs: [],
            id: "62361397ae106fd04add2d52",
          },
          {
            name: "Marc",
            username: "Marc0",
            password: "somepassw",
            buzzs: [],
            id: "6236187377a7d0be70451136",
          },
          {
            name: "Matheus",
            username: "Matheus0",
            password: "somepassw",
            buzzs: [],
            id: "6236343a3e8035bb3b01c8a6",
          },
          {
            name: "Pepi",
            username: "Pepi0",
            password: "asdfgwrg",
            buzzs: [],
            id: "6236f1fb6c0cc1b7f4e65b4f",
          },
          {
            name: "Maria",
            username: "Maria0",
            password: "asdfgwrg",
            buzzs: [],
            id: "6236f3f16c0cc1b7f4e65b57",
          },
          {
            name: "ole",
            username: "oleoleoleole",
            password: "asdfgwrg",
            buzzs: [],
            id: "623728c17fcace07ac07f607",
          },
          {
            name: "Sil",
            username: "Sil0",
            password: "asdfgwrg",
            buzzs: [],
            id: "623790b0dfa33dfc6f497aca",
          },
          {
            name: "mario",
            username: "mariogl",
            password: "asasasdfs",
            buzzs: [],
            id: "62387ef5a3a3357a4b3c4255",
          },
          {
            name: "Mario GL",
            username: "Mario0",
            password: "assasG",
            buzzs: [],
            id: "623987643eca94dcdf7ae13a",
          },
        ],
      });
      const dataTest = "pageArrow";

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <ListUsersPage />
          </Provider>
        </BrowserRouter>
      );

      const foundElement = screen.queryAllByTestId(dataTest);

      expect(foundElement).toHaveLength(2);
    });
  });
});
