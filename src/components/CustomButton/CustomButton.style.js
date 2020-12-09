import styled, { css } from 'styled-components';

const ButtonMainStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    outline: 1px solid black;
  }
`;

const GoogleButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #2d6cd1;
  }
`;

const InvertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleButtonStyles;
  }
  return props.inverted ? InvertedButtonStyles : ButtonMainStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 150px;
  width: auto;
  padding: 0px 35px;

  font-size: 18px;

  display: flex;
  justify-content: center;

  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  text-align: canter;
  line-height: 50px;
  letter-spacing: 0.5px;
  outline: none;

  cursor: pointer;

  ${getButtonStyles}
`;
