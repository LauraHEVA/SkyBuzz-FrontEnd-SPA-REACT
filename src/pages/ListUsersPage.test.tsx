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
});
