import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  font-size: 16px;
  font-weight: 800;
  padding-left: 24px;
  list-style-type: decimal;
`;

export const MovieLink = styled(Link)`
  color: #2662bd;
`;

export const MovieName = styled.h2`
  padding: 4px;
`;
