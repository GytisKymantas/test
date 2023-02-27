import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";

import { quizReducer } from "./quiz";

const combinedReducer = combineReducers({
  quiz: quizReducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
