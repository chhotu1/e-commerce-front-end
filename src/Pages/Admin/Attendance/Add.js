import React, { useEffect, useState } from 'react';
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
import UserServices from '../../../Helper/Services/UserServices';
import AttendenceServices from '../../../Helper/Services/AttendenceServices';
import { CustomLoader } from '../../../Components/shared';

const Add = (props) => {
    const [toggled, setToggled] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUser();
    }, [])

    const handleChange = (checkedData, userId) => {
        let userData = [...users];
        let index = userData.findIndex((e) => e.user_id === userId);
        if (index !== -1) {
            userData[index]['present'] = checkedData;
            setUsers(userData);
        }
    }

    const getUser = () => {
        setIsSpinner(true)
        UserServices.list().then(response => {
            if (response.data.status === true) {
                let record = response.data.data;
                if (record.length !== 0) {
                    let userData = [];
                    record.map((e) => {
                        userData.push({ name: e.name, user_id: e._id, present: true, image_url: e.image_url })
                    });
                    setUsers(userData);
                }
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
            setIsSpinner(false)
        }).catch(error => {
            setIsSpinner(false)
            if (error.response) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSpinner(true)
        let payload = [];
        users.map((e) => {
            payload.push({ user_id: e.user_id, present: e.present });
        })
        AttendenceServices.add(payload).then(response => {
            setIsSpinner(false)
            if (response.data.status === true) {
                navigate(Helper.RouteName.ATTENDENCE.MAIN);
                toast.success("New Record Added Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        }).catch(error => {
            setIsSpinner(false)
            if (error.response) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        })
    }

    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                {isSpinner?<CustomLoader/>:''}
                <div className='container'>
                    <CardContainer title="Attendence" backLink={Helper.RouteName.ATTENDENCE.MAIN}>
                        <Form onSubmit={handleSubmit}>
                            <Forms users={users} handleChange={handleChange} formErrors={props.leave.formError} leave={props.leave.leave} />
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
