import { ImArrowLeft } from 'react-icons/im';
import { LinkStyle } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <LinkStyle to={to}>
      <ImArrowLeft />
      {children}
    </LinkStyle>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};
