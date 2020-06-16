import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Search = () => {
  const dispatch = useDispatch();
  const filterbyName = useSelector((state) => state.filterbyName);

  const onKeyPress = (e) => {
    dispatch({
      type: "FILTER_BY_NAME",
      payload: e.target.value,
    });
  };

  return (
    <input
      type="text"
      name="name"
      placeholder="Enter a name of country"
      onKeyUp={(e) => onKeyPress(e)}
    />
  );
};

export default Search;
