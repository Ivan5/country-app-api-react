import React from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Region from "./components/Region";
import reducer from "./reducer";

const initialState = {
  countryList: [],
  filterbyRegion: [],
  filterbyName: [],
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Region />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
