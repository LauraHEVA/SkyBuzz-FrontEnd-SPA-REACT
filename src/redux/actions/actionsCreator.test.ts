import { BuzzsArrayProps } from "../../interfaces/buzzInterfaces";
import { loadAllBuzzsAction } from "./actionsCreator";

describe("Given a loadAllBuzzs Action", () => {
  describe("When it receives an array with buzzs", () => {
    test("Then it should return an action object with type 'load-all-buzzs'", () => {
      const buzzs: BuzzsArrayProps = {
        buzzs: [
          {
            category: "general",
            likes: 0,
            comments: [1],
            author: "Madonna",
            text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
            date: "2022-03-08T19:21:30.764Z",
            id: "324k2l",
          },
          {
            category: "general",
            likes: 0,
            comments: [1],
            author: "Freddie",
            text: "Freddie is writting a very long, and also short, and repeated message and he is always copying Madonna's messages",
            date: "2022-03-08T19:21:30.764Z",
            id: "324k2l",
          },
        ],
      };

      const expectedAction = {
        type: "load-all-buzzs",
        buzzs,
      };

      const action = loadAllBuzzsAction(buzzs);

      expect(action).toEqual(expectedAction);
    });
  });
});
