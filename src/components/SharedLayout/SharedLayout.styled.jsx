import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px 18px;
  border-radius: 10px;
  text-decoration: none;
  color: #000000;
  font-weight: 600;

  &.active {
    color: #ffffff;
    background-color: #2662bd;
  }
`;

export const Container = styled.div`
  padding: 30px;
`;

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Nav = styled.nav`
  display: flex;

  /* padding: 15px 0; */
`;
