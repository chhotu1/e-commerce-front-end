import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import { listNotifications, setNotificationDefaults } from '../../../Store/actions/NotificationActions';
import Rows from './Rows';
import { CustomLoader } from '../../../Components/shared';

const Notification = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    useEffect(() => {
        props.setNotificationDefaults();
        props.listNotifications();
    }, [])

    const notifications = props.notification.notifications;
    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                {props.notification.list_spinner?<CustomLoader/>:''}

                    <CardContainer title="Notification list" link={Helper.RouteName.NOTIFICATION.ADD} linkTitle="New Notification">

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    notifications ? (
                                        notifications.map((item, index) => <Rows key={item._id} notification={item} index={index} />)
                                    ) : null
                                }
                            </tbody>
                        </Table>
                    </CardContainer>
                </div>
            </div>
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
