import {
  AddNewBuzzActionInterface,
  ActionWithIdInterface,
  LoadAllBuzsActionInterface,
  LoadOneBuzzActionInterface,
  SomeActionInterface,
  LoginUserActionInterface,
  CommentBuzzActionInterface,
  LoadAllUsersActionInterface,
} from "../../types/actionInterfaces";
import { BuzzBasic, BuzzObject } from "../../types/buzzInterfaces";
import {
  LoginData,
  RegisterUserData,
  UserData,
} from "../../types/userInterfaces";
import actionsType from "./actionsType";

export const loadAllBuzzsAction = (
  buzzs: BuzzObject[]
): LoadAllBuzsActionInterface => ({
  type: actionsType.loadAllBuzzs,
  buzzs,
});

export const deleteBuzzAction = (id: string): ActionWithIdInterface => ({
  type: actionsType.deleteBuzz,
  id,
});

export const addNewBuzzAction = (
  buzz: BuzzBasic
): AddNewBuzzActionInterface => ({
  type: actionsType.addBuzz,
  buzz,
});

export const incrementLikesAction = (id: string): ActionWithIdInterface => ({
  type: actionsType.incrementLikes,
  id,
});

export const loadDetailBuzzAction = (
  buzz: BuzzObject
): LoadOneBuzzActionInterface => ({
  type: actionsType.loadDetailBuzz,
  buzz,
});

export const cleanBuzzDetailAction = (): SomeActionInterface => ({
  type: actionsType.cleanBuzzDetail,
});

export const loginUserAction = (
  userData: UserData | LoginData
): LoginUserActionInterface => ({
  type: actionsType.loginUser,
  userData: userData,
});

export const logoutUserAction = (): SomeActionInterface => ({
  type: actionsType.logoutUser,
});

export const registerUserAction = (userData: RegisterUserData) => ({
  type: actionsType.registerUser,
  userData: userData,
});

export const commentBuzzAction = (
  buzzComment: BuzzObject
): CommentBuzzActionInterface => ({
  type: actionsType.addBuzz,
  buzzComment,
});

export const loadAllUsersAction = (
  users: UserData[]
): LoadAllUsersActionInterface => ({
  type: actionsType.loadAllUsers,
  users,
});
