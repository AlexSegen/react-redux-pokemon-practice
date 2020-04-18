import { combineReducers } from "redux";
import games_shop from "./gameShopReducer";
import buscador from './buscadorReducer';

const rootReducers = combineReducers({
  games_shop,
  buscador
});

export default rootReducers;
