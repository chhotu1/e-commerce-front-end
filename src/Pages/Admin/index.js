import React, { useState } from 'react'
import Aside from '../../Components/admin-app/Aside';
import TopNav from '../../Components/admin-app/TopNav';
import Notification from '../../Components/admin-app/dashboard/Notification';
// import Sidebar from '../../Components/admin-app/Sidebar';
// import Helper from './../../Helper'
import {
FaArrowRight,FaUserFriends,FaCalendarAlt,FaBirthdayCake
} from 'react-icons/fa';
const Admin = () => {
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
      <Aside
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <div className='admin-content'>
        <TopNav handleToggleSidebar={handleToggleSidebar} />
        <Notification />

        <div className='dashboard-content p-4'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-12">
                <div className="bg-primary small-box">
                  <div className="inner">
                    <h3>122</h3>
                    <p>User</p>
                  </div>
                  <div className={"iconButton"}>
                    <FaUserFriends />
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a className={"small_box_footer"}>More info
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="bg-success small-box">
                  <div className="inner">
                    <h3>12</h3>
                    <p>Leave</p>
                  </div>
                  <div className={"iconButton"}>
                    <FaUserFriends />
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a className={"small_box_footer"}>More info
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="bg-danger small-box">
                  <div className="inner">
                    <h3>122</h3>
                    <p>Holiday</p>
                  </div>
                  <div className={"iconButton"}>
                    <FaCalendarAlt />
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a className={"small_box_footer"}>More info
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="bg-info small-box">
                  <div className="inner">
                    <h3>122</h3>
                    <p>Birthday wises</p>
                  </div>
                  <div className={"iconButton"}>
                    <FaBirthdayCake />
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag"></i>
                  </div>
                  <a className={"small_box_footer"}>More info
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <Sidebar>
  //     <p>ss</p>
  //   </Sidebar>
  // )
}

export default Admin


