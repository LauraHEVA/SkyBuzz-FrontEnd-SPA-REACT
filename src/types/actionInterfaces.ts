import { BuzzBasic, BuzzObject } from "./buzzInterfaces";
import { LoginData, UserData } from "./userInterfaces";

export interface SomeActionInterface {
  type: string;
}

export interface LoadAllBuzsActionInterface extends SomeActionInterface {
  buzzs: BuzzObject[];
}

export interface ActionWithIdInterface extends SomeActionInterface {
  id: string;
}

export interface AddNewBuzzActionInterface extends SomeActionInterface {
  buzz: BuzzBasic;
}

export interface LoadOneBuzzActionInterface extends SomeActionInterface {
  buzz: BuzzObject;
}

export interface LoginUserActionInterface extends SomeActionInterface {
  userData: UserData | LoginData;
}

export interface CommentBuzzActionInterface extends SomeActionInterface {
  buzzComment: BuzzObject;
  id: string;
}
