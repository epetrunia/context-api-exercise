import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  height: 77px;
  margin-bottom: 10px;

  display: flex;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const CartItemDescription = styled.div`
  width: 70%;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-size: 18px;
`;
