import { BuzzsArrayProps } from "../../types/buzzInterfaces";
import actionsType from "./actionsType";

export const loadAllBuzzsAction = (
  buzzs: BuzzsArrayProps
): LoadAllBuzsActionInterface => ({
  type: actionsType.loadAllBuzzs,
  buzzs,
});

export const deleteBuzzAction = (id: string) => ({
  type: actionsType.deleteBuzz,
  id,
});

interface SomeActionInterface {
  type: string;
}

interface LoadAllBuzsActionInterface extends SomeActionInterface {
  buzzs: BuzzsArrayProps;
}
