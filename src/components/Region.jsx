import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Region() {
  const dispatch = useDispatch();
  const filterbyRegion = useSelector((state) => state.filterbyRegion);

  const onChange = (e) => {
    dispatch({
      type: "FILTER_BY_REGION",
      payload: e.target.value,
    });
  };

  return (
    <>
      <select name="region" id="region" onChange={(e) => onChange(e)}>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}

export default Region;
