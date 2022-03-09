import { BuzzsProps } from "../../interfaces/buzzInterfaces";
import actionsType from "./actionsType";

export const loadAllBuzzs = (buzzs: BuzzsProps) => ({
  type: actionsType.loadAllBuzzs,
  buzzs,
});
