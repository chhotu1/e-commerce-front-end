import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Helper from '../../Helper';
import { useNavigate } from 'react-router-dom';
const TopNav = ({ handleToggleSidebar }) => {
    const navigate =useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
      }
    return (
        <div>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
            <div className='top-menu'>
                <Nav className="justify-content-end" activeKey="/home">
                    <NavDropdown title="User" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1" as={Link} to={Helper.RouteName.PROFILE}>Profile</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3" as={Link} to={Helper.RouteName.CHANGE_PASSWORD}>Change Password</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4" onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
            </div>
        </div>
    )
}

export default TopNav
