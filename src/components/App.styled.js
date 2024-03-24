import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: ${p => p.theme.colors.main};
  font-weight: 700;
  font-size: 18px;

  &.active {
    color: ${p => p.theme.colors.buttonActive};
  }
`;
