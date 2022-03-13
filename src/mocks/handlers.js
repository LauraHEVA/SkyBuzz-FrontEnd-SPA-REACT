import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_PUBLIC_API}buzzs/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        buzzs: [
          {
            category: "general",
            likes: 0,
            comments: [],
            author: "Dan",
            text: "React Redux",
            id: "324k2lA",
            date: "2022-03-12T14:14:10.573Z",
          },
          {
            category: "general",
            likes: 0,
            comments: [],
            author: "Dan",
            text: "I Hate Typescript",
            id: "324k2lB",
            date: "2022-03-12T14:14:10.573Z",
          },
        ],
      })
    );
  }),
  rest.delete(
    `${process.env.REACT_APP_PUBLIC_API}buzzs/324k2lB`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),
];
