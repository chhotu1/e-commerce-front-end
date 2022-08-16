import React, { memo } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RouteName from '../../CustomRoutes/RouteName';
import Helper from '../../Helper'
const Header = () => {
  let token = Helper.StorageService.getAccessToken();
  return (
    <div>
      <Navbar expand="lg" className="px-4" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to={RouteName.HOME}>Pixlerlab</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Nav>
            {token && token !== null ? <Nav.Link as={Link} to={RouteName.ADMIN.MAIN} eventKey={1}>
              Dashboard
            </Nav.Link> : <Nav.Link as={Link} to={"/login"} eventKey={1}>
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default memo(Header)
