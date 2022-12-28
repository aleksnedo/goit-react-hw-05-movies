import { Outlet } from 'react-router-dom';
import { Link, Container, Header, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
