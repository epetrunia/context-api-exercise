import styled from 'styled-components';
import CustomButton from './../CustomButton';

export const CartDropdownContainer = styled.div`
  height: 380px;
  width: 260px;
  padding: 20px;

  position: absolute;
  top: 90px;
  right: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border: 1px solid black;
  z-index: 1;
  overflow-y: scroll;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyCartMessage = styled.span`
  font-size: 20px;
  margin-top: 100px;
`;

export const DropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
