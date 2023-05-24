import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import { avatar } from '../assets';

const Header = () => {
  // expand variants - false, 'sm', 'md', 'lg', 'xl', 'xxl'
  const expand = 'md';
  const styles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
  };
  const caption = 'React Redux Saga';

  const handleClick = () => {
    const closeButton = document.querySelector('.btn-close') as HTMLButtonElement;
    closeButton?.click();
  };

  return (
    <Navbar bg="dark" expand={expand} className="mb-3">
      <Container fluid>
        <Link to="/" className="navbar-brand" style={{ color: 'white' }}>
          {caption}
        </Link>
        <Navbar.Toggle
          style={{ borderColor: 'white' }}
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              {caption}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Link
                to="/"
                onClick={handleClick}
                style={{ ...styles, textDecoration: 'none', color: 'black' }}
              >
                Posts
              </Link>
              <Link
                to="/about-me"
                onClick={handleClick}
                style={{ ...styles, textDecoration: 'none', color: 'black' }}
              >
                About Me
              </Link>
              {/* TODO: userInfo component */}
              <img
                src={avatar}
                alt="avatar"
                style={{ ...styles, width: 50, height: 50, borderRadius: '50%' }}
              />
              <a style={styles} href="mailto:mikhail3468@yandex.ru">
                mikhail3468@yandex.ru
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
