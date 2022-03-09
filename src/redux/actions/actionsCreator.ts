import { BuzzsArrayProps } from "../../types/buzzInterfaces";
import actionsType from "./actionsType";

export const loadAllBuzzsAction = (buzzs: BuzzsArrayProps) => ({
  type: actionsType.loadAllBuzzs,
  buzzs,
});
