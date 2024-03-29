import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import { listHolidays, setHolidayDefaults } from '../../../Store/actions/HolidaysActions';
import { currentUser, } from '../../../Store/actions/UserActions';
import Rows from './Rows';
import { CustomLoader } from '../../../Components/shared';
import Constant from '../../../utils/Constant';

const Holidays = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    useEffect(() => {
        props.setHolidayDefaults();
        props.listHolidays();
        props.currentUser();
    }, [])

    const holidays = props.holidays.holidays;
    const user = props.user.current_user;
    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                    {props.holidays.list_spinner ? <CustomLoader /> : ''}

                    <CardContainer title="Holidays list" link={user?.role === Constant.ADMIN || user?.role === Constant.HR_MANEGER ? Helper.RouteName.HOLIDAYS.ADD : ''} linkTitle={user?.role === Constant.ADMIN || user?.role === Constant.HR_MANEGER ? "Add Holidays" : ''}>

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Start Date</th>
                                    <th>End date</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    {user?.role === Constant.ADMIN || user?.role === Constant.HR_MANEGER ? <th>Action</th> : ''}

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    holidays ? (
                                        holidays.map((item, index) => <Rows key={item._id} holiday={item} index={index} user={user} />)
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
        holidays: state.holidays,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listHolidays: () => dispatch(listHolidays()),
        currentUser: () => dispatch(currentUser()),
        setHolidayDefaults: () => dispatch(setHolidayDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Holidays);
