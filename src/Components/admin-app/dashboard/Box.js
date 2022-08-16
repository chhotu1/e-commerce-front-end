import React, { useEffect, useState } from 'react'
import {
    FaArrowCircleRight, FaUserFriends, FaCalendarAlt, FaBirthdayCake, FaClock, FaUser
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Helper from '../../../Helper';
import DashboardServices from '../../../Helper/Services/DashboardServices';

const Box = () => {
    const [dashboard,setDashboard] =useState({});
    useEffect(()=>{
        getDashboardData();
    },[])

    const getDashboardData = () => {
        DashboardServices.dashboard().then(response => {
            if (response.data.status === true) {
                let record = response.data.data;
                setDashboard(record);
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        }).catch(error => {
            if (error.response) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        })
    }

    const DashboardMenu = [
        { id: 2, count: dashboard?.total_leave?dashboard?.total_leave:0, title: 'Leave', url: Helper.RouteName.LEAVE.MAIN, color: 'info', icon: <FaUserFriends /> },
        { id: 3, count: dashboard?.total_holiday?dashboard?.total_holiday:0, title: 'Holidays', url: Helper.RouteName.HOLIDAYS.MAIN, color: 'success', icon: <FaCalendarAlt /> },
        // { id: 4, count: 0, title: 'Timer', url: Helper.RouteName.TIMER.MAIN, color: 'primary', icon: <FaClock /> },
        { id: 5, count: dashboard?.total_attendence?dashboard?.total_attendence:0, title: 'Attendence', url: Helper.RouteName.ATTENDENCE.MAIN, color: 'danger', icon: <FaUser /> },
        // { id: 6, count: 0, title: 'Birthday wishes', url: Helper.RouteName.ADMIN, color: 'danger', icon: <FaBirthdayCake /> },
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
