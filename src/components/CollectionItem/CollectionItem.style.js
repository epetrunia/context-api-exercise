import styled from 'styled-components';
import CustomButton from '../CustomButton';

export const CollectionItemContainer = styled.div` 
height: 450px;
width: 22vw;

margin-bottom: 15px;

position: relative;
display: flex;
flex-direction: column;
align-items: center;

&:hover {
  .image {
    opacity: 0.8;
  }

button {
    display: flex;
    opacity: 0.9;
    text-align: center;
  }`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
`;

export const FooterName = styled.span`
  width: 80%;
`;

export const FooterPrice = styled.span`
  width: 20%;
  text-align: end;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  bottom: 70px;
  display: none;
`;
