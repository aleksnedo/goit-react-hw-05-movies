import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SectionTitle = styled.p`
  margin: 20px 0;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const LinkStyle = styled(Link)`
  color: #2662bd;
`;
