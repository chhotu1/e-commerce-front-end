import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import Forms from './Forms'
import {  setLeaveDefaults, checkLeaveValidation, handleLeaveChange,addLeave,resetLeaveFields } from '../../../Store/actions/LeaveActions';

const Add = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    const handleChange = (e) => {
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                            <Forms handleChange={handleChange} formErrors={props.leave.formError} leave={props.leave.leave}/>
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
