import React,{useState} from 'react'

import Sidebar from '../../Components/portfolio/sidebar';

const ChhotuPortfolio = () => {

    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
         <Sidebar handleToggleSidebar={handleToggleSidebar} toggled={toggled}/>
         <div>
         </div>
        </div>
    )
}

export default ChhotuPortfolio
