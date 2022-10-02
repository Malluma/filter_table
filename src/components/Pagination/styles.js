import styled from "styled-components";

import {
  colorMain, colorMainLight, colorMainDark
} from "../../styles/variables.styles";

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

export const PaginationWrap = styled.div`
  display: flex;
  align-items: baseline;
  //margin-bottom: 2vh;
`;