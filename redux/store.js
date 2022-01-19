import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers";

const middlewares = [thunk];

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };
    return nextState;
  } else {
    return allReducers(state, action);
  }
};

const initStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export const wrapper = createWrapper(initStore);
