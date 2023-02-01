import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import imagesReducer from "./redux/images";
import singleImageReducer from "./redux/singleImage";

const reducer = combineReducers({
  images: imagesReducer,
  singleImage: singleImageReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));
export default store;
