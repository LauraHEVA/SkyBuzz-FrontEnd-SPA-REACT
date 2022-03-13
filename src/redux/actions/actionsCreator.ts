import {
  AddNewBuzzActionInterface,
  DeleteBuzzActionInterface,
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

export const deleteBuzzAction = (id: string): DeleteBuzzActionInterface => ({
  type: actionsType.deleteBuzz,
  id,
});

export const addNewBuzzAction = (
  buzz: BuzzBasic
): AddNewBuzzActionInterface => ({
  type: actionsType.addBuzz,
  buzz,
});
