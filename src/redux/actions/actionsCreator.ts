import { BuzzsArray } from "../../interfaces/buzzInterfaces";
import actionsType from "./actionsType";

export const loadAllBuzzsAction = (buzzs: BuzzsArray) => ({
  type: actionsType.loadAllBuzzs,
  buzzs,
});
