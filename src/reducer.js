export default function reducer(state, action) {
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
