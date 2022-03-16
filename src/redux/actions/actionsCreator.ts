import {
  AddNewBuzzActionInterface,
  ActionWithIdInterface,
  LoadAllBuzsActionInterface,
} from "../../types/actionInterfaces";
import { BuzzBasic, BuzzObject } from "../../types/buzzInterfaces";
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

export const loadDetailBuzzAction = (id: string): ActionWithIdInterface => ({
  type: actionsType.loadDetailBuzz,
  id,
});
