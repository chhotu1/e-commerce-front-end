import React, { useState } from 'react';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
const Profle = () => {
    const [toggled,setToggled] = useState(false);
    const handleToggleSidebar =(value)=>{
        setToggled(value)
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
                    <CardContainer title="Profile">
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='profile-image-container'>
                                    <img alt='' src={Helper.Images.user2}/>
                                    <p>Chhotu sow</p>
                                    <label>Software developer</label>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className='profile-content'>
                                    <label className='label-name'>Name : </label>
                                    <p className='label-value'>Chhotu kumar</p>
                                    <label className='label-name'>Email : </label>
                                    <p className='label-value'>Chhotu@gmail.com</p>
                                    <label className='label-name'>Phone : </label>
                                    <p className='label-value'>9087654323</p>
                                    <label className='label-name'>Address : </label>
                                    <p className='label-value'>Gaya bihar</p>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </div>
        </div>
    )
}

export default Profle
