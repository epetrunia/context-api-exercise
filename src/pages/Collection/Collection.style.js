import styled from 'styled-components';

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h1`
  font-size: 37px;
  text-align: center;
  margin: 25px 0;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`;
