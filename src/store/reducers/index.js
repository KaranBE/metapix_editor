import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  subCategories: subCategoriesReducer,
});

export default rootReducer;
