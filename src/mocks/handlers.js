import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_PUBLIC_API}buzzs/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Dan",
          text: "React Redux",
          id: "324k2l",
          date: Date.parse("2022-03-11T12:22:36.899Z"),
        },
        {
          category: "general",
          likes: 0,
          comments: [1],
          author: "Dan",
          text: "React Redux",
          id: "324k2l",
          date: Date.parse("2022-03-11T12:22:36.899Z"),
        },
      ])
    );
  }),
];
