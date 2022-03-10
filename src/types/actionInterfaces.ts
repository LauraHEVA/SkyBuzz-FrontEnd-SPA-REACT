import { BuzzObject } from "./buzzInterfaces";

export interface SomeActionInterface {
  type: string;
}

export interface LoadAllBuzsActionInterface extends SomeActionInterface {
  buzzs: BuzzObject[];
}

export interface DeleteBuzzActionInterface extends SomeActionInterface {
  id: string;
}
