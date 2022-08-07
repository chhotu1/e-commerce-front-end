import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import { currentUser, setUserDefaults } from '../../../Store/actions/UserActions';
const Profle = (props) => {
    const [toggled,setToggled] = useState(false);
    const handleToggleSidebar =(value)=>{
        setToggled(value)
    }

    useEffect(()=>{
        props.currentUser();
    },[])
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
                    <CardContainer title="Profile">
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='profile-image-container'>
                                    <img alt='' src={user?.image_url?user?.image_url:Helper.Images.user2}/>
                                    <p>Chhotu sow</p>
                                    <label>Software developer</label>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className='profile-content'>
                                    <label className='label-name'>Name : </label>
                                    <p className='label-value'>{user?.name}</p>
                                    <label className='label-name'>Email : </label>
                                    <p className='label-value'>{user?.email}</p>
                                    <label className='label-name'>Phone : </label>
                                    <p className='label-value'>{user?.phone} {user?.other_phone?<>({user?.other_phone})</>:''}</p>
                                    <label className='label-name'>Address : </label>
                                    <p className='label-value'>{user?.address}</p>

                                    <label className='label-name'>Date of birth : </label>
                                    <p className='label-value'>{user?.date_of_birth}</p>
                                    <label className='label-name'>Experience : </label>
                                    <p className='label-value'>{user?.experience}</p>
                                    <label className='label-name'>Father mobile no : </label>
                                    <p className='label-value'>{user?.father_mobile_no}</p>
                                    <label className='label-name'>friend phone : </label>
                                    <p className='label-value'>{user?.friend_phone}</p>
                                    <label className='label-name'>Pain no : </label>
                                    <p className='label-value'>{user?.pain_no}</p>
                                    <label className='label-name'>adhar no : </label>
                                    <p className='label-value'>{user?.adhar_no}</p>
                                </div>
                            </div>
                        </div>
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
        setUserDefaults: () => dispatch(setUserDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profle);
