import { BuzzObject } from "../../types/buzzInterfaces";
import { deleteBuzzAction, loadAllBuzzsAction } from "./actionsCreator";

describe("Given a loadAllBuzzs Action", () => {
  describe("When it receives an array with buzzs", () => {
    test("Then it should return an action object with type 'load-all-buzzs'", () => {
      const buzzs: BuzzObject[] = [
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Madonna",
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          date: Date.parse("2022-03-11T12:22:36.899Z"),
          id: "324k2l",
        },
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Freddie",
          text: "Freddie is writting a very long, and also short, and repeated message and he is always copying Madonna's messages",
          date: Date.parse("2022-03-11T12:22:36.899Z"),
          id: "324k2l",
        },
      ];
      const expectedAction = {
        type: "load-all-buzzs",
        buzzs,
      };

      const action = loadAllBuzzsAction(buzzs);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteBuzzAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action with type 'delete-one-buzz' and the buzz id as another property", () => {
      const idTodelete = "10";

      const expectedAction = {
        type: "delete-one-buzz",
        id: idTodelete,
      };

      const action = deleteBuzzAction(idTodelete);

      expect(action).toEqual(expectedAction);
    });
  });
});
