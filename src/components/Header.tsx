import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import { avatar } from '../assets';

const Header = () => {
  // expand variants - false, 'sm', 'md', 'lg', 'xl', 'xxl'
  const expand = 'sm';
  const styles = { marginLeft: 'auto', marginRight: 'auto', marginBottom: 20 };

  return (
    <Navbar bg="dark" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'white' }}>
          React Redux Saga
        </Navbar.Brand>
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
              React Redux Saga
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Link to="/" style={{ ...styles, textDecoration: 'none', color: 'black' }}>
                Posts
              </Link>
              <Link to="/about-me" style={{ ...styles, textDecoration: 'none', color: 'black' }}>
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
