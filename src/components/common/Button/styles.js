import styled from "styled-components";

import {
  primaryColor, primaryColorDark
} from "../../../styles/variables.styles";


export const Button = styled.button`
  font-size: calc(10px + 1vmin);
  font-weight: bold;
  border: none;
  border-radius: ${props => props.circle? '50%' : '22px'};
  text-decoration: none;
  background: ${props => props.current? primaryColorDark : primaryColor};
  color: white;
  margin-right: ${props => props.circle? '1vw': '0'};
  padding: ${props => props.circle? '1em': '1vh 1.5vw 1vh 1vw'};
  width: ${props => props.circle? '2em': 'unset'};
  height: ${props => props.circle? '1.5em': 'unset'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    color: black;
    outline: none; 
  }
`;