import { HiArrowLeft } from 'react-icons/hi';
import { LinkStyle } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <LinkStyle to={to}>
      <HiArrowLeft />
      {children}
    </LinkStyle>
  );
};
