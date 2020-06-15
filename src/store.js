import { createStore } from "redux";

const initialState = {
  countryList: [],
};

function reducer(state, action) {
  return state;
}

module.export = (store) => createStore(reducer, initialState);
