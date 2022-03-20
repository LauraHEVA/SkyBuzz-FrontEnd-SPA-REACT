import { loginUserThunk, registerUserThunk } from "./userThunk";

describe("Given a loginUserThunk function", () => {
  describe("When it is called with correct credentials", () => {
    test("Then it should call dispatch with the loginUser action", async () => {
      const user = {
        username: "Laura0",
        password: "Laura1234",
        id: "623245decaa7d69f96f10a95",
        loggedIn: true,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGF1cmEiLCJpZCI6IjYyMzI0NWRlY2FhN2Q2OWY5NmYxMGE5NSIsImlhdCI6MTY0NzYxOTA0MSwiZXhwIjoxNjQ4MjIzODQxfQ.Q6iChFgPKYzRRNsc-qf0J6kAggZfzsQ9ZBUZgYK0o4w",
      };
      const expectedAction = {
        type: "login-user",
        userData: user,
      };
      const dispatch = jest.fn();

      const loginThunk = loginUserThunk(user);
      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a registerUserThunk function", () => {
  describe("When it is called with correct credentials", () => {
    test("Then it should call dispatch with the loginUser action", async () => {
      const userData = {
        name: "Sil",
        username: "Sil0",
        password: "Sil1234",
      };
      const dispatch = jest.fn();
      const expectedResponse = {
        name: "Sil",
        username: "Sil0",
        password:
          "$2b$10$6YGQ8YbSlw1CDfv2oUa8PuakrP8TTRR55eU81YmR3zfQrnEIQA0PC",
        buzzs: [],
        id: "623790b0dfa33dfc6f497aca",
      };
      const expectedAction = {
        type: "register-user",
        userData: expectedResponse,
      };

      const registerThunk = registerUserThunk(userData);
      await registerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
