import styled from 'styled-components';
import { ReactComponent as BagIcon } from './../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  height: 100%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BagIconContainer = styled(BagIcon)`
  height: 30px;
  width: 30px;
`;

export const ItemsCount = styled.span`
  position: absolute;
  bottom: 4px;

  font-size: 13px;
  font-weight: bold;
`;
