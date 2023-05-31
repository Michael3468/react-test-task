import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import { avatar } from '../assets';
import { aboutMe, routes, expandVariants } from '../constants';

const Header = () => {
  const expand = expandVariants.md;
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
        <Link
          to={routes.HOME}
          className="navbar-brand"
          style={{ color: 'white', paddingLeft: padding }}
        >
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
                to={routes.HOME}
                onClick={handleClick}
                style={{ ...styles, textDecoration: 'none', color: 'black' }}
              >
                Список постов
              </Link>
              <Link
                to={routes.ABOUT_ME}
                onClick={handleClick}
                style={{ ...styles, textDecoration: 'none', color: 'black' }}
              >
                Обо мне
              </Link>
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
                  Михаил
                </span>
              </div>

              <a style={styles} href={`mailto:${aboutMe.email}`}>
                {aboutMe.email}
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
