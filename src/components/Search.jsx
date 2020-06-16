import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const SearchStyled = styled.label`
  display: inline-flex;
  background: #fff;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;

  input {
    flex: 1;
    border: none;
    height: 48;
    line-height: 48px;
    font-size: 0.7em;
    outline: 0;
    &::-webkit-input-placeholder {
      color: red;
    }
  }
`;

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
    <SearchStyled>
      <input
        type="text"
        name="name"
        placeholder="Enter a name of country"
        onChange={(e) => onKeyPress(e)}
      />
    </SearchStyled>
  );
};

export default Search;
