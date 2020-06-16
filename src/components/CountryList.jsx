import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  border: 1px solid red;
  justify-content: center;
  padding: 4em 2em;
`;

function CountryList() {
  const dispatch = useDispatch();

  const countryList = useSelector((state) => {
    if (state.filterbyName.length > 0) {
      return state.filterbyName;
    }

    if (state.filterbyRegion.length > 0) {
      return state.filterbyRegion;
    }

    return state.countryList;
  });

  //console.log("Estado", countryList);
  //const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("Hubo un error", err.message);
      });
  }, []);

  return (
    <CountryListStyled>
      {countryList.map(({ id, name, flag, population, region, capital }) => {
        return (
          <Country
            key={id}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
