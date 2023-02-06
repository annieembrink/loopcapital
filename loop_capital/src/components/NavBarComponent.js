import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Image from 'next/image'
import * as Icon from 'react-bootstrap-icons';
import Link from "next/link";


function NavBarComponent() {
  const router = useRouter();
const currentRoute = router.pathname;
  
  return (
    <>

      {['lg'].map((expand) => (
        <Navbar key={expand} bg="none" expand={expand} variant="dark" className="mb-3" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/"><Image width={70} height={70} src='/images/loop_capital.png' className='logo-header' alt='loopcapital' /></Navbar.Brand>
            <Navbar.Toggle className="hamburger_icon" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              className="offcanvas_container"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="offcanvas_header">
                <Offcanvas.Title href="/" id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image width={70} height={70} src='/images/loop_capital.png' className='logo-header' alt='loopcapital' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 offcanvas_container_link">
                  <Nav.Link href="/" className={currentRoute === "/" ? "active"  : ""}>Home</Nav.Link>
                  <Nav.Link href="/portfolio" className={currentRoute === "/portfolio" ? "active"  : ""}>Portfolio</Nav.Link>
                  <Nav.Link href="/contact" className={currentRoute === "/contact" ? "active"  : ""}>Contact</Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/company/loop-capital-ab/?trk=similar-pages"><Icon.Linkedin className="mobilemenu_icon"/></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarComponent;


