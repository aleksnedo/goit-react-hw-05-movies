import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  :hover {
    color: #2662bd;
  }
`;
