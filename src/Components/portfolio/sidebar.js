import React from 'react'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import {
    FaGithub, FaCalendarAlt,FaUser,FaFile,FaHome
} from 'react-icons/fa';

import chhotu from './chhotu.jpg'
const Sidebar = (props) => {
    const { handleToggleSidebar, toggled } = props;
    return (

        <ProSidebar
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div className='sidebarheader'
                >
                    <img alt='' src={chhotu} style={{width:150,height:150,borderRadius:100}}/>
                    <h3 className='pt-3'>Chhotu Sow</h3>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaHome />}
                        suffix={<span className="badge red">New</span>}
                    >
                        Dashboard
                    </MenuItem>
                </Menu>

                <Menu iconShape="circle">
                    <MenuItem icon={<FaUser />}>About</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaFile />}>Resume</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaCalendarAlt />}>Portfolio</MenuItem>
                </Menu>

            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://e-commerce-lake-five.vercel.app/portfolio"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            Chhotu
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>

    )
}



export default Sidebar
