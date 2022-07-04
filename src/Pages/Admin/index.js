import React, { useState } from 'react'

import Aside from '../../Components/admin-app/Aside';
import TopNav from '../../Components/admin-app/TopNav';
import Sidebar from '../../Components/admin-app/Sidebar';
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
        <p>welcome</p>
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


