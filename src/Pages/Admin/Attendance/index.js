import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import Rows from './Rows';
import { CustomLoader } from '../../../Components/shared';
import AttendenceServices from '../../../Helper/Services/AttendenceServices';
import { toast } from 'react-toastify';
import { currentUser, } from '../../../Store/actions/UserActions';
import Constant from '../../../utils/Constant';
const Attendance = (props) => {
    const [toggled, setToggled] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUser();
        props.currentUser();
    }, [])


    const getUser = () => {
        setIsSpinner(true)
        AttendenceServices.list().then(response => {
            if (response.data.status === true) {
                let record = response.data.data;
                setUsers(record);
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
    const handleDelete = (id) => {
        setIsSpinner(true)
        AttendenceServices.remove(id).then(response => {
            if (response.data.status === true) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
                let usersF = [...users];
                let index = usersF.findIndex(item => item._id === id);
                usersF.splice(index, 1);
                setUsers(usersF)
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
    const current_user = props.user.current_user;
    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                    {isSpinner ? <CustomLoader /> : ''}
                    <CardContainer title="Attendence list" link={current_user?.role === Constant.ADMIN || current_user?.role === Constant.HR_MANEGER ? Helper.RouteName.ATTENDENCE.ADD : ''} linkTitle="Attendence">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Created by</th>
                                    <th>Created at</th>
                                    <th>Status</th>
                                    {current_user?.role===Constant.ADMIN ||current_user?.role===Constant.HR_MANEGER?
                                    <th>Action</th>:''}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users ? (
                                        users.map((item, index) => <Rows current_user={current_user} key={item._id} user={item} index={index} handleDelete={handleDelete} />)
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
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: () => dispatch(currentUser()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
