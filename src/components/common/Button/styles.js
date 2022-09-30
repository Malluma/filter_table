import styled from "styled-components";

import {
  primaryColor
} from "../../../styles/variables.styles";


export const Button = styled.button`
  font-size: calc(10px + 1vmin);
  font-weight: bold;
  border: none;
  border-radius: 22px;
  text-decoration: none;
  background: ${primaryColor};
  color: white;
  padding: 2vh 1.5vw 2vh 1vw;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    opacity: 0.5;
  }
`;

