import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./Country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  border: 1px solid red;
  justify-content: center;
  padding: 4em 2em;
`;

function CountryList() {
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all");
  }, []);

  return (
    <CountryListStyled>
      <Country flag="" name="" population="" region="" capital="" />
      <Country flag="" name="" population="" region="" capital="" />
    </CountryListStyled>
  );
}

export default CountryList;
