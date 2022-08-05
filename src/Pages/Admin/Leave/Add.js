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
import { setLeaveDefaults, checkLeaveValidation, handleLeaveChange, addLeave, resetLeaveFields } from '../../../Store/actions/LeaveActions';

const Add = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    let navigate = useNavigate();
    useEffect(()=>{
        props.setLeaveDefaults();
        props.resetLeaveFields();
    },[])

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        props.handleLeaveChange(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formObject = Helper.Forms.validateForm(
            props.leave.leave,
            props.leave.formError,
            Helper.Forms.leaveForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkLeaveValidation(formObject);
            return false;
        }

        props.addLeave(props.leave.leave, function (res) {
            if (res.data.status === true) {
                navigate(Helper.RouteName.LEAVE.MAIN);
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
                    <CardContainer title="Add new leave" backLink={Helper.RouteName.LEAVE.MAIN}>
                        <Form onSubmit={handleSubmit}>
                            <Forms handleChange={handleChange} formErrors={props.leave.formError} leave={props.leave.leave} />
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
        leave: state.leave
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLeaveChange: (field, value) => dispatch(handleLeaveChange(field, value)),
        checkLeaveValidation: (value) => dispatch(checkLeaveValidation(value)),
        setLeaveDefaults: () => dispatch(setLeaveDefaults()),
        resetLeaveFields: () => dispatch(resetLeaveFields()),
        addLeave: (payload, cb) => dispatch(addLeave(payload, cb)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)((Add));
