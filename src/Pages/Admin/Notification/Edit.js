import React, {  useEffect, useState } from 'react';
import {
    useNavigate,
    useParams
} from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import Forms from './Forms'
import { setLeaveDefaults, checkLeaveValidation, handleLeaveChange, resetLeaveFields,showLeave,editLeave } from '../../../Store/actions/LeaveActions';
import { CustomLoader } from '../../../Components/shared';

const Edit = (props) => {
    const [toggled, setToggled] = useState(false);
    const [isSpinner,setIsSpinner] = useState(false)
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    let navigate = useNavigate();
    let params = useParams();
    useEffect(()=>{
      props.setLeaveDefaults();
      props.showLeave(params.id);
    },[params])
    
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
        setIsSpinner(true)
        props.editLeave(props.leave.leave,params.id, function (res) {
          setIsSpinner(false)
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
                {isSpinner?(<CustomLoader/>):''}
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
        editLeave: (payload,id, cb) => dispatch(editLeave(payload,id, cb)),
        showLeave: (id) => dispatch(showLeave(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)((Edit));
