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
import { setHolidayDefaults, checkHolidayValidation, handleHolidayChange, addHoliday, resetHolidayFields } from '../../../Store/actions/HolidaysActions';
import { CustomLoader } from '../../../Components/shared';

const Add = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    let navigate = useNavigate();
    useEffect(() => {
        props.setHolidayDefaults();
        props.resetHolidayFields();
    }, [])

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        props.handleHolidayChange(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formObject = Helper.Forms.validateForm(
            props.holidays.holiday,
            props.holidays.formError,
            Helper.Forms.holidaysForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkHolidayValidation(formObject);
            toast.info("Please fill the required fields", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored",
            })
            return false;
        }
        props.addHoliday(props.holidays.holiday, function (res) {
            if (res.data.status === true) {
                navigate(Helper.RouteName.HOLIDAYS.MAIN);
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
                {props.holidays.create_update_spinner?(<CustomLoader/>):''}
                <div className='container'>
                    <CardContainer title="Add new holidays" backLink={Helper.RouteName.HOLIDAYS.MAIN}>
                        <Form onSubmit={handleSubmit}>
                            <Forms handleChange={handleChange} formErrors={props.holidays.formError} holiday={props.holidays.holiday} />
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
        holidays: state.holidays
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleHolidayChange: (field, value) => dispatch(handleHolidayChange(field, value)),
        checkHolidayValidation: (value) => dispatch(checkHolidayValidation(value)),
        setHolidayDefaults: () => dispatch(setHolidayDefaults()),
        resetHolidayFields: () => dispatch(resetHolidayFields()),
        addHoliday: (payload, cb) => dispatch(addHoliday(payload, cb)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)((Add));
