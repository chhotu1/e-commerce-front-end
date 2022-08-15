import React from 'react'
import {
    FaArrowCircleRight, FaUserFriends, FaCalendarAlt, FaBirthdayCake,FaClock
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Helper from '../../../Helper';
const Box = () => {
    const DashboardMenu = [
        { id: 2, count: 20, title: 'Leave', url: Helper.RouteName.LEAVE.MAIN, color: 'info', icon: <FaUserFriends /> },
        { id: 3, count: 120, title: 'Holidays', url: Helper.RouteName.HOLIDAYS.MAIN, color: 'success', icon: <FaCalendarAlt /> },
        { id: 4, count: 10, title: 'Timer', url: Helper.RouteName.TIMER.MAIN, color: 'primary', icon: <FaClock /> },
        { id: 5, count: 10, title: 'Birthday wishes', url: Helper.RouteName.ADMIN, color: 'danger', icon: <FaBirthdayCake /> },
    ];
    return (
        <div className='dashboard-content p-4'>
            <div className="container-fluid">
                <div className="row">
                    {DashboardMenu.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-12" key={index}>
                                <div className={`bg-${item.color} small-box`}>
                                    <div className="inner">
                                        <h3>{item.count}</h3>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className={"iconButton"}>
                                        {item.icon}
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <Link className="small_box_footer" to={item.url}>
                                    More info
                                        <FaArrowCircleRight />
                                    </Link>
                                   
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Box
