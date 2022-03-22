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
          password:
            "$2b$10$dMTNK.KOdxL0WAa5v57J4eaRc/1HUGSmr5KSPC4PT17z.HqIOtoHK",
          id: "623245decaa7d69f96f10a95",
        },
        {
          buzzs: [],
          name: "Luis",
          username: "Luis0",
          password:
            "$2b$10$BPQhi4DUZ6S0uVyHFkcB.OouOgGfrtSGEBtMchaME1mgQVSj9W8.u",
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
