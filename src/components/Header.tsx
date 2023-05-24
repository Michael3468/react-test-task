import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import { avatar } from '../assets';

const Header = () => {
  // expand variants - false, 'sm', 'md', 'lg', 'xl', 'xxl'
  const expand = 'md';
  const padding = 10;
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: `0 ${padding}px`,
  };
  const caption = 'React Redux Saga';

  const handleClick = () => {
    const closeButton = document.querySelector('.btn-close') as HTMLButtonElement;
    closeButton?.click();
  };

  return (
    <Navbar bg="dark" expand={expand} className="mb-3">
      <Container fluid>
        <Link to="/" className="navbar-brand" style={{ color: 'white', paddingLeft: padding }}>
          {caption}
        </Link>
        <Navbar.Toggle
          style={{ borderColor: 'white', marginRight: padding }}
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
            <Nav className="justify-content-end flex-grow-1">
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
              <div style={{ ...styles, display: 'flex', alignItems: 'center' }}>
                <img
                  src={avatar}
                  alt="avatar"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                  }}
                />
                <span className="ms-3" style={{ color: 'black' }}>
                  Mikhail
                </span>
              </div>

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
