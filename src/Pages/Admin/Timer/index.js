import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import { listTimers, setTimerDefaults } from '../../../Store/actions/TimerActions';
import Rows from './Rows';
import { CustomLoader } from '../../../Components/shared';

const Timer = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    useEffect(() => {
        props.setTimerDefaults();
        props.listTimers();
    }, [])

    const timers = props.timer.timers;
    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                {props.timer.list_spinner?<CustomLoader/>:''}

                    <CardContainer title="Timer list">

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    <th>Created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    timers ? (
                                        timers.map((item, index) => <Rows key={item._id} timer={item} index={index} />)
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
        timer: state.timer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listTimers: () => dispatch(listTimers()),
        setTimerDefaults: () => dispatch(setTimerDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
