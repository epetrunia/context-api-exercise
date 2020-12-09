import styled, { css } from 'styled-components';

const mainColor = 'black';
const subColor = 'gray';

const shrinkLabel = css`
  color: ${mainColor};
  font-size: 17px;
  bottom: 30px;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 40px 0;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${mainColor};
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }
`;

export const FormInputContainer = styled.input`
  width: 100%;

  font-size: 20px;
  color: ${subColor};

  border: none;
  border-bottom: 1px solid ${subColor};
  background: none;
  background-color: white;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabel};
  }
`;

export const InputLabel = styled.label`
  font-size: 20px;
  color: ${subColor};

  position: absolute;
  left: 5px;
  bottom: 5px;

  transition: 0.3s ease;
  pointer-events: none;

  &.shrink {
    ${shrinkLabel};
  }
`;
