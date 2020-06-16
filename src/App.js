import React from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Region from "./components/Region";


const initialState = {
  countryList: [],
  filterbyRegion: [],
  filterbyName: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "FILTER_BY_REGION": {
      const filterbyRegion = state.countryList.filter(
        (country) => country.region === action.payload
      );
      return { ...state, filterbyRegion };
    }
    case "FILTER_BY_NAME": {
      const filterbyName = state.countryList.filter((country) =>
        country.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );

      return { ...state, filterbyName };
    }

    default: {
      return state;
    }
  }
}

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
