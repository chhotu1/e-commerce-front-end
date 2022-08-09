import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Helper from '../../../Helper';
import { listNotifications, setNotificationDefaults } from '../../../Store/actions/NotificationActions';

const Notification = (props) => {
    const style = {
        background: '#128508',
        color: '#ffffff',
        width:'90%'
    };

    useEffect(() => {
        props.setNotificationDefaults();
        props.listNotifications();
    }, [])

    const notifications = props.notification.notifications;
    return (
        <div style={style}>
            <marquee width="100%" direction="left" height="40px">
                {notifications && notifications.map((item,index)=>{
                    return(
                        <label key={index}>
                            {item?.title} <img alt='' src={Helper.Icons.news}/> 
                        </label>
                    )
                })}
            </marquee>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    return {
        notification: state.notification
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listNotifications: () => dispatch(listNotifications()),
        setNotificationDefaults: () => dispatch(setNotificationDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

