
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Image from 'next/image'
import { Icon } from '@iconify/react';
import Link from "next/link";


function NavBarComponent() {
  return (
    <>
      <Navbar bg="none" expand="lg" fixed="top" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image width={70} height={70} src='/images/loop_capital.png' className='logo-header' alt='loopcapital' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse  id="navbarScroll" className="end mobilemenu">
            <Nav
              className="me-end my-2 my-lg-0 end mobilemenu_link"
              // style={{ height: '100vw', width: '100vh' }}
              navbarScroll
             
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/company/loop-capital-ab/?trk=similar-pages"><Icon icon="akar-icons:linkedin-box-fill" width="25" className="mobilemenu_icon"/></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBarComponent;