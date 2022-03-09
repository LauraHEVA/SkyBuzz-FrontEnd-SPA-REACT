import { BuzzsArrayProps } from "../../types/buzzInterfaces";
import actionsType from "./actionsType";

export const loadAllBuzzsAction = (
  buzzs: BuzzsArrayProps
): LoadAllBuzsActionInterface => ({
  type: actionsType.loadAllBuzzs,
  buzzs,
});

interface SomeActionInterface {
  type: string;
}

interface LoadAllBuzsActionInterface extends SomeActionInterface {
  buzzs: BuzzsArrayProps;
}
