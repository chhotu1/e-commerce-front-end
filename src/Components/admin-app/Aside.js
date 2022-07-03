import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../Assets/images/bg2.jpg';
const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
//   const intl = useIntl();
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          E-commerce
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">New</span>}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> Item</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="Menu"
            icon={<FaRegLaughWink />}
          >
            <MenuItem> 1</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="test"
            icon={<FaHeart />}
          >
            <MenuItem> 1</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
          <SubMenu title="sss" icon={<FaList />}>
            <MenuItem> 1 </MenuItem>
            <MenuItem> 2 </MenuItem>
            <SubMenu title={`$ 3`}>
              <MenuItem> 3.1 </MenuItem>
              <MenuItem> 3.2 </MenuItem>
              <SubMenu title={`$ 3.3`}>
                <MenuItem> 3.3.1 </MenuItem>
                <MenuItem> 3.3.2 </MenuItem>
                <MenuItem> 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
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
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              test.com
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
