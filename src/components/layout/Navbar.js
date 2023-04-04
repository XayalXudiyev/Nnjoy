import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './navbar.css'

import { Link } from 'react-router-dom';
const NavigationBar = () => {

  return (
    <Navbar className="bg-light text-dark" expand="md" >
      <Container fluid className='px-5 fw-bold '>
        <Navbar.Brand ><Link to="/">NJOOY</Link></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navbar_links flex-grow-1   text-uppercase d-flex align-items-end   top-3 ">
            {/* <Link to="/">logo</Link> */}
            <Link style={{ textDecoration: 'none', color: "black" }} to="/">
              <li>
                Əsas səhifə
              </li>
            </Link>
            <Link style={{ textDecoration: 'none', color: "black" }}  to="/services">
              <li>
                Xidmətlər
              </li>
            </Link>
            <Link style={{ textDecoration: 'none', color: "black" }} to="/portfolio">
              <li>
                Portfolio
              </li>
            </Link>
          </Nav>
          
          <Button variant="secondary "><Link style={{ textDecoration: 'none', color: "white" }} to="/order">Sifarişlər</Link></Button>
          <Button variant="primary ms-5"><Link style={{ textDecoration: 'none', color: "white" }} to="/login">Login</Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

