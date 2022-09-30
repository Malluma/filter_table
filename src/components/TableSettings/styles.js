import styled from "styled-components";

import {
  colorMain, colorMainLight, colorMainDark, primaryColor
} from "../../styles/variables.styles";

export const Dropdown = styled.select`
  color: ${colorMain};
  font-family: inherit;
  font-size: calc(9px + 1vmin);
  display: block;
  margin: 0;
  border: 1px solid ${colorMainLight};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1vh 0.5vw;
  margin-bottom: 1.5vh;
  text-indent: 5px;
  appearance: none;
  width: 100%;
  background-color: white;

  &:hover,
  &:focus {
    border: 1px solid ${colorMainDark};
    outline: none;
  }

  &::placeholder {
    color: ${colorMainLight};
  }

  &_focus {
    border: 1px solid ${colorMainDark};
  }
`;

export const Input = styled.input`
  color: ${colorMain};
  font-family: inherit;
  font-size: calc(9px + 1vmin);
  display: block;
  margin: 0;
  border: 1px solid ${colorMainLight};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1vh 0.5vw;
  margin-bottom: 1.5vh;

  &:hover,
  &:focus {
    border: 1px solid ${colorMainDark};
    outline: none;
  }

  &::placeholder {
    color: ${colorMainLight};
  }

  &_focus {
    border: 1px solid ${colorMainDark};
  }
`;

export const FilterWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 2vh;
`;

export const FilterLabel = styled.div`
  font-size: calc(9px + 1vmin);
  color: ${primaryColor};
  font-weight: bold;
  margin-right: 1vw;
  align-self: center;
`;

export const FilterField = styled.div`
  margin-right: 1vw;
  width: 15vw;
`;

export const FilterType = styled.div`
  margin-right: 1vw;
  width: 10vw;
`;

export const FilterValue = styled.div`
  margin-right: 1vw;
`;

export const TableHead = styled.thead`
  color: white;
  font-weight: bold;
  padding: 3rem;
`;

export const TableCell = styled.td`
  background: lightgray;
  padding: 1rem;
`;

export const Reference = styled.div`
  font-size: 0.9rem;
  color: ${colorMainLight};
  margin-bottom: 2vh;
`;
