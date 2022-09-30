import styled from "styled-components";

import {
  colorMainLight, primaryColor
} from "../../styles/variables.styles";

export const Table = styled.table`
  font-size: calc(9px + 1vmin);
  width: 75vw;
  border: 1px solid ${colorMainLight};
  border-radius: 10px;
  padding: 1rem;
`;

export const TableHead = styled.thead`
  color: white;
  font-weight: bold;
`;

export const SortBtn = styled.button`
  font-size: inherit;
  background: none;
  width: 100%;
  border: none;
  color: white;
  font-weight: bold;
  text-align: start;
  cursor: pointer;
  &:hover, &:focus{
    color: black;
    outline: none;
  }
`;

export const TableHeadCell = styled.td`
  background: ${primaryColor};
  padding: 0.5rem;
`;