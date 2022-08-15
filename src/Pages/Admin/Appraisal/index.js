import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import { listAppraisal, setAppraisalDefaults } from '../../../Store/actions/AppraisalActions';
import Rows from './Rows';
import { CustomLoader } from '../../../Components/shared';

const Appraisal = (props) => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    useEffect(() => {
        props.setAppraisalDefaults();
        props.listAppraisal();
    }, [])

    const appraisals = props.appraisal.appraisals;
    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                    {props.appraisal.list_spinner ? <CustomLoader /> : ''}

                    <CardContainer title="Appraisal list" link={Helper.RouteName.APPRAISAL.ADD} linkTitle={ "Add Appraisal"}>

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Start Date</th>
                                    <th>End date</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appraisals ? (
                                        appraisals.map((item, index) => <Rows key={item._id} appraisal={item} index={index} />)
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
        appraisal: state.appraisal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listAppraisal: () => dispatch(listAppraisal()),
        setAppraisalDefaults: () => dispatch(setAppraisalDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appraisal);
