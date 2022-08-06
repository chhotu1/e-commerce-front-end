import React, {  useEffect, useState } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import Forms from './Forms'
import { setNotificationDefaults, checkNotificationValidation, handleNotificationChange, addNotification, resetNotificationFields } from '../../../Store/actions/NotificationActions';

const Add = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    let navigate = useNavigate();
    useEffect(()=>{
        props.setNotificationDefaults();
        props.resetNotificationFields();
    },[])

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        props.handleNotificationChange(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formObject = Helper.Forms.validateForm(
            props.notification.notification,
            props.notification.formError,
            Helper.Forms.notificationForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkNotificationValidation(formObject);
            return false;
        }

        props.addNotification(props.notification.notification, function (res) {
            if (res.data.status === true) {
                navigate(Helper.RouteName.NOTIFICATION.MAIN);
                toast.success("New Record Added Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            } else {
                toast.warning(res.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        });
    }

    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                    <CardContainer title="Add new notification" backLink={Helper.RouteName.NOTIFICATION.MAIN}>
                        <Form onSubmit={handleSubmit}>
                            <Forms handleChange={handleChange} formErrors={props.notification.formError} notification={props.notification.notification} />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
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
        handleNotificationChange: (field, value) => dispatch(handleNotificationChange(field, value)),
        checkNotificationValidation: (value) => dispatch(checkNotificationValidation(value)),
        setNotificationDefaults: () => dispatch(setNotificationDefaults()),
        resetNotificationFields: () => dispatch(resetNotificationFields()),
        addNotification: (payload, cb) => dispatch(addNotification(payload, cb)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)((Add));
