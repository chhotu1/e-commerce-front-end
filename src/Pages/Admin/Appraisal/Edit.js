import React, { useEffect, useState } from 'react';
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
import { setAppraisalDefaults, checkAppraisalValidation, handleAppraisalChange, resetAppraisalFields, showAppraisal, editAppraisal } from '../../../Store/actions/AppraisalActions';
import { CustomLoader } from '../../../Components/shared';
import { listUsers } from '../../../Store/actions/UserActions';

const Edit = (props) => {
    const [toggled, setToggled] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false)
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    let navigate = useNavigate();
    let params = useParams();
    useEffect(() => {
        props.setAppraisalDefaults();
        props.showAppraisal(params.id);
        
    }, [params])

    useEffect(()=>{
        props.listUsers();
    },[])

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        props.handleAppraisalChange(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formObject = Helper.Forms.validateForm(
            props.appraisal.appraisal,
            props.appraisal.formError,
            Helper.Forms.appraisalForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkAppraisalValidation(formObject);
            return false;
        }
        setIsSpinner(true)
        props.editAppraisal(props.appraisal.appraisal, params.id, function (res) {
            setIsSpinner(false)
            if (res.data.status === true) {
                navigate(Helper.RouteName.APPRAISAL.MAIN);
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

    let users = props.user.users;

    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                    {isSpinner ? (<CustomLoader />) : ''}
                    <CardContainer title="Add new appraisal" backLink={Helper.RouteName.APPRAISAL.MAIN}>
                        <Form onSubmit={handleSubmit}>
                            <Forms handleChange={handleChange} users={users} formErrors={props.appraisal.formError} appraisal={props.appraisal.appraisal} />
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
        appraisal: state.appraisal,
        user: state.user,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAppraisalChange: (field, value) => dispatch(handleAppraisalChange(field, value)),
        checkAppraisalValidation: (value) => dispatch(checkAppraisalValidation(value)),
        setAppraisalDefaults: () => dispatch(setAppraisalDefaults()),
        resetAppraisalFields: () => dispatch(resetAppraisalFields()),
        editAppraisal: (payload, id, cb) => dispatch(editAppraisal(payload, id, cb)),
        showAppraisal: (id) => dispatch(showAppraisal(id)),
        listUsers: () => dispatch(listUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)((Edit));
