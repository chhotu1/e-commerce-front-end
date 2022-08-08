import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import { listLeaves, setLeaveDefaults } from '../../../Store/actions/LeaveActions';
import Rows from './Rows';
import { CustomLoader } from '../../../Components/shared';

const Attendance = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    useEffect(() => {
        props.setLeaveDefaults();
        props.listLeaves();
    }, [])

    const leaves = props.leave.leaves;
    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                {props.leave.list_spinner?<CustomLoader/>:''}

                    <CardContainer title="Attendence list" link={Helper.RouteName.ATTENDENCE.ADD} linkTitle="Attendence">

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Start Date</th>
                                    <th>End date</th>
                                    <th>Subject</th>
                                    <th>Leave type</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
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
        leave: state.leave
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listLeaves: () => dispatch(listLeaves()),
        setLeaveDefaults: () => dispatch(setLeaveDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
