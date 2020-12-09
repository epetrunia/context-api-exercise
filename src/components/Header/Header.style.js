import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;

  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px;
`;

export const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  padding: 0 15px;

  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
`;
