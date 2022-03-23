import { loadAllUsersThunk } from "./usersThunk";

describe("Given a loadAllUsersThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      const users = [
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
      ];

      const expectedAction = {
        type: "load-all-users",
        users: users,
      };

      await loadAllUsersThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
