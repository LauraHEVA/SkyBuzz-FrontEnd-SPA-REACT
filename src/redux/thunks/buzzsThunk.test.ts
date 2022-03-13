import { deleteBuzzThunk, loadAllBuzzsThunk } from "./buzzsThunk";

describe("Given a loadAllBuzzsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadAllBuzzsThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteBuzzThunk", () => {
  describe("When it's called with an existent id", () => {
    test("Then it should call dispatch with de deleteBuzzAction as parameter", async () => {
      const id = "324k2lB";
      const expectedAction = {
        type: "delete-one-buzz",
        id: id,
      };
      const dispatch = jest.fn();

      const deleteThunk = deleteBuzzThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called with an unexistent id", () => {
    test("Then it shouldn't call dispatch", async () => {
      const id = "123456";
      const dispatch = jest.fn();

      const deleteThunk = deleteBuzzThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
