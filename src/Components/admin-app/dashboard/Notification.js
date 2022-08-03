import React from 'react'
import Helper from '../../../Helper';
const Notification = () => {
    const style = {
        background: '#128508',
        color: '#ffffff',
    };
    return (
        <div style={style}>
            <marquee width="100%" direction="left" height="40px">
                The salary has been released <img alt='' src={Helper.Icons.news}/> 
                The salary has been released <img alt='' src={Helper.Icons.news}/>
                10 days after birthday celebration for Rohan <img alt='' src={Helper.Icons.news}/> 
                The salary has been released <img alt='' src={Helper.Icons.news}/>
                The salary has been released <img alt='' src={Helper.Icons.news}/> 
                The salary has been released <img alt='' src={Helper.Icons.news}/>
                The salary has been released <img alt='' src={Helper.Icons.news}/> 
                The salary has been released <img alt='' src={Helper.Icons.news}/>
            </marquee>
            
        </div>
    )
}

export default Notification
