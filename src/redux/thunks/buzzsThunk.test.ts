import {
  addNewBuzzThunk,
  deleteBuzzThunk,
  incrementLikesThunk,
  loadAllBuzzsThunk,
  loadDetailBuzzThunk,
} from "./buzzsThunk";

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
    test("Then it should call dispatch with the deleteBuzzAction as parameter", async () => {
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

describe("Given an addBuzzThunk", () => {
  describe("When it's called with a new buzz to create", () => {
    test("Then it should call dispatch with the addBuzzAction as parameter", async () => {
      const newBuzzToAdd = {
        author: {
          name: "LauHater",
          id: "623245decaa7d69f96f10a95",
          username: "Laura0",
        },
        text: "We are the champions",
        topic: "general",
        date: "2022-03-15T12:41:30.606Z",
        likes: 0,
        comments: [],
        id: "6230897a6de0d0453487ef80",
      };
      const expectedAction = {
        type: "add-new-buzz",
        buzz: newBuzzToAdd,
      };
      const dispatch = jest.fn();

      const addThunk = addNewBuzzThunk(newBuzzToAdd);
      await addThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given an incrementLikesThunk", () => {
  describe("When it's called with a new buzz to create", () => {
    test("Then it should call dispatch with the addBuzzAction as parameter", async () => {
      const newBuzzToLike = {
        author: "Mia Wallace",
        text: "I hate uncomfortable silences",
        topic: "general",
        date: "2022-03-15T13:41:30.606Z",
        likes: 0,
        comments: [],
        id: "6230c7a2f9d0f5ee1f58d6d9",
      };
      const expectedAction = {
        type: "increment-likes",
        id: "6230c7a2f9d0f5ee1f58d6d9",
      };
      const dispatch = jest.fn();

      const likeThunk = incrementLikesThunk(newBuzzToLike.id);
      await likeThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given an loadDetailBuzzThunk", () => {
  describe("When it's called with an id", () => {
    test("Then it should call dispatch with the details object buzz in response", async () => {
      const buzzToLoad = {
        topic: "general",
        likes: 0,
        comments: [],
        author: {
          name: "Dan",
          username: "Abramov",
          id: "623245decaa7d69f96f10a95",
        },
        text: "React Redux",
        id: "6230c7a2f9d0f5ee1f58d6d9",
        date: "2022-03-12T14:14:10.573Z",
      };
      const expectedAction = {
        type: "load-detail-buzz",
        buzz: buzzToLoad,
      };
      const dispatch = jest.fn();

      const loadDetailThunk = loadDetailBuzzThunk(buzzToLoad.id);
      await loadDetailThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
