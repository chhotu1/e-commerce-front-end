import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavDropdown } from 'react-bootstrap';
import Aside from './Aside';
const Sidebar = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };
    return (
        <div>
            <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
                <Aside
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <main>
                    <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                        <FaBars />
                    </div>
                    <div className='top-menu'>
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default Sidebar
