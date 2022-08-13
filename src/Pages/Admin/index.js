import React, { useState } from 'react'
import Aside from '../../Components/admin-app/Aside';
import TopNav from '../../Components/admin-app/TopNav';
import Notification from '../../Components/admin-app/dashboard/Notification';
// import Sidebar from '../../Components/admin-app/Sidebar';
// import Helper from './../../Helper'

import Box from '../../Components/admin-app/dashboard/Box';
// import Clock from '../../Components/admin-app/dashboard/Clock';
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
        <Box/>
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


