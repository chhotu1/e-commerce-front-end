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
import { FaTachometerAlt, FaGem, FaGithub, FaRegLaughWink } from 'react-icons/fa';
import sidebarBg from '../../Assets/images/bg2.jpg';
import { Link } from 'react-router-dom';
import Helper from '../../Helper'
import withRouter from '../shared/withRouter';
const Aside = (props) => {
  let { toggled, handleToggleSidebar } = props;
  const handleLogout =()=>{
    localStorage.clear();
    const { navigate } = props.router;
    navigate(Helper.RouteName.LOGIN);
  }
  return (
    <ProSidebar
      image={sidebarBg}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className='sidebarheader'
        >
          <Link to="/">Pixlerlab</Link>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">New</span>}
          >
            <Link to="/admin">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>  <Link to={Helper.RouteName.ADMIN.USER.MAIN}>Users</Link></MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            title="Category"
            icon={<FaRegLaughWink />}
          >
            <MenuItem> <Link to={Helper.RouteName.ADMIN.CATEGORY.MAIN}>List</Link></MenuItem>
            <MenuItem> <Link to={Helper.RouteName.ADMIN.CATEGORY.ADD}>Add</Link></MenuItem>
          </SubMenu>
          <SubMenu
            title="Product"
            icon={<FaRegLaughWink />}
          >
            <MenuItem> <Link to={Helper.RouteName.ADMIN.PRODUCT.MAIN}>List</Link></MenuItem>
            <MenuItem> <Link to={Helper.RouteName.ADMIN.PRODUCT.ADD}>Add</Link></MenuItem>
          </SubMenu>
          {/*
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
          </SubMenu> */}
        </Menu>

        <Menu iconShape="circle">
          <MenuItem icon={<FaGem />} onClick={handleLogout}>Logout</MenuItem>
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
            href="https://www.pixlerlab.com/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              pixlerlab.com
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default withRouter(Aside);
