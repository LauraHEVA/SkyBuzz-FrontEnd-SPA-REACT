import { rest } from "msw";
import {
  BuzzListTest,
  reponseComment,
  userLogged,
  userRegistered,
} from "./mockedObjects";

export const handlers = [
  rest.get(`${process.env.REACT_APP_PUBLIC_API}buzzs/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        buzzs: [
          {
            topic: "general",
            likes: 0,
            comments: [],
            author: {
              name: "Dan",
              username: "Danilovic",
              id: "623245decaa7d69f96f10a95",
            },
            text: "React Redux",
            id: "324k2lA",
            date: "2022-03-12T14:14:10.573Z",
          },
          {
            topic: "general",
            likes: 0,
            comments: [],
            author: {
              name: "Dan",
              username: "Danilovic",
              id: "623245decaa7d69f96f10a95",
            },
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

  rest.delete(
    `${process.env.REACT_APP_PUBLIC_API}buzzs/123456`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),

  rest.post(`${process.env.REACT_APP_PUBLIC_API}buzzs/new`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(BuzzListTest[0]));
  }),

  rest.patch(
    `${process.env.REACT_APP_PUBLIC_API}buzzs/6230c7a2f9d0f5ee1f58d6d9/like`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(`Buzz liked correctly`));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_PUBLIC_API}users/login`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(userLogged.response));
    }
  ),

  rest.get(
    `${process.env.REACT_APP_PUBLIC_API}buzzs/6230c7a2f9d0f5ee1f58d6d9`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          buzz: {
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
          },
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_PUBLIC_API}users/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(userRegistered.response));
    }
  ),

  rest.get(`${process.env.REACT_APP_PUBLIC_API}users/all`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
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
        ],
      })
    );
  }),

  rest.put(
    `${process.env.REACT_APP_PUBLIC_API}buzzs/6230c7a2f9d0f5ee1f58d6d9/comment`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(reponseComment.response));
    }
  ),
];
