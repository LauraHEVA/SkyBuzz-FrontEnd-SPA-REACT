import { loadAllBuzzsThunk } from "./buzzsThunk";

describe("Given a loadAllBuzzsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadAllBuzzsThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
