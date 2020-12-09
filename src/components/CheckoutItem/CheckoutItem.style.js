import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px 0;

  display: flex;
  align-items: center;

  font-size: 22px;

  border-bottom: 1px solid darkgray;
`;

export const ImageWrapper = styled.div`
  width: 23%;
  padding-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    padding: 0 10px;
  }
`;

export const RemoveButton = styled.div`
  width: 8%;

  display: flex;
  justify-content: center;

  cursor: pointer;
`;
