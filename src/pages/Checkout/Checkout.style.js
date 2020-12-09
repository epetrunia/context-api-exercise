import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 30px;
    margin-left: auto;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
`;

export const HeaderBlock = styled.div`
  width: 23%;

  font-size: 20px;
  text-transform: capitalize;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;

  font-size: 36px;
  text-transform: uppercase;
`;

export const Warning = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 25px;
  color: red;
`;
