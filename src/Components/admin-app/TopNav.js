import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Helper from '../../Helper';
import Clock from './dashboard/Clock';

const TopNav = ({ handleToggleSidebar }) => {
    const isTimer = Helper.StorageService.getIsClockTimer();
    return (
        <div>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
            <div className='top-menu'>
                <Nav className="justify-content-end" activeKey="/home">
                    <NavDropdown title="User" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1" as={Link} to={Helper.RouteName.PROFILE}>Profile</NavDropdown.Item>
                        {/* <NavDropdown.Item eventKey="4.2" as={Link} to={Helper.RouteName.PROFILE}>View Profile</NavDropdown.Item> */}
                        <NavDropdown.Item eventKey="4.3" as={Link} to={Helper.RouteName.CHANGE_PASSWORD}>Change Password</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Setting</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item as="li" className={isTimer==='true'?'stop':'start'}>
                        <Clock/>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}

export default TopNav
