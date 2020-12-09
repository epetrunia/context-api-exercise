import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  position: relative;

  margin: 0 8px 16px;

  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  cursor: pointer;

  &:hover .backgroundImage {
    transform: scale(1.1);
  }

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }

  &.large {
    height: 360px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 0.8s ease-in-out;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.7);

  h1 {
    margin-bottom: 6px;

    font-weight: bold;
    font-size: 22px;
    color: #4a4a4a;
  }

  span {
    font-weight: lighter;
    font-size: 16px;
  }
`;
