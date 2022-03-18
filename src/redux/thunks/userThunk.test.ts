import { loginUserThunk } from "./userThunk";

describe("Given a loginUserThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with the loginUser action", async () => {
      const user = {
        username: "Laura0",
        password: "Laura1234",
        id: "623245decaa7d69f96f10a95",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGF1cmEiLCJpZCI6IjYyMzI0NWRlY2FhN2Q2OWY5NmYxMGE5NSIsImlhdCI6MTY0NzYxOTA0MSwiZXhwIjoxNjQ4MjIzODQxfQ.Q6iChFgPKYzRRNsc-qf0J6kAggZfzsQ9ZBUZgYK0o4w",
      };
      const expectedAction = {
        type: "login-user",
        user: user,
      };
      const dispatch = jest.fn();

      const loginThunk = loginUserThunk(user);
      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
