import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {
  FaTachometerAlt, FaGem, FaGithub,
   FaRegLaughWink
} from 'react-icons/fa';
import sidebarBg from '../../Assets/images/bg2.jpg';
import { Link } from 'react-router-dom';
import Helper from '../../Helper'
import withRouter from '../shared/withRouter';
import { currentUser, setUserDefaults } from '../../Store/actions/UserActions';
import Constant from '../../utils/Constant';
const Aside = (props) => {
  let { toggled, handleToggleSidebar } = props;
  const handleLogout = () => {
    localStorage.clear();
    const { navigate } = props.router;
    navigate(Helper.RouteName.LOGIN);
  }

  useEffect(() => {
    props.currentUser();
  }, [])
  const user = props?.user?.user;

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
        </Menu>
        {user?.role === Constant.ADMIN || user?.role === Constant.HR_MANEGER ?
        <Menu iconShape="circle">
        <SubMenu
            title="Admin"
            icon={<FaRegLaughWink />}
          >
             <MenuItem icon={<FaGem />}>  <Link to={Helper.RouteName.ADMIN.USER.MAIN}>Users</Link></MenuItem>
            <MenuItem icon={<FaGem />}> <Link to={Helper.RouteName.NOTIFICATION.MAIN}>Notification</Link></MenuItem>
          </SubMenu>
        </Menu>: ''}
        <Menu iconShape="circle">
        <SubMenu
            title="General"
            icon={<FaRegLaughWink />}
          >
            <MenuItem> <Link to={Helper.RouteName.LEAVE.MAIN}>Leave</Link></MenuItem>
          </SubMenu>
          {/* <SubMenu
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


const mapStateToProps = (state, ownProps) => {

  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(currentUser()),
    setUserDefaults: () => dispatch(setUserDefaults())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Aside));
