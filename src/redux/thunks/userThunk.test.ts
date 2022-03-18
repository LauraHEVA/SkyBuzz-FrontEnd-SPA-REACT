import { loginUserThunk } from "./userThunk";

describe("Given a loginUserThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call dispatch with the loginUser action", async () => {
      const user = {
        username: "Laura0",
        password: "Laura1234",
      };
      const dispatch = jest.fn();

      const loginThunk = loginUserThunk(user);
      await loginThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
