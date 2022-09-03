import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Helper from '../../../Helper';
import { latestTimer, setTimerDefaults, addTimer } from '../../../Store/actions/TimerActions';
import { timerDateFormate } from '../../../utils/CommonFunction';

const Clock = (props) => {
    const [currentCount, setCount] = useState(1);
    const [isStartTimer, setStartTimer] = useState(false)
    const timer = () => setCount(currentCount + 1);
    useEffect(() => {
        props.setTimerDefaults();

        props.latestTimer(function (response) {
            if (response.data.status === true) {
                let data = response.data.data;
                let created_at = data.created_at;
                getTimerSecond(created_at, data?.status, data?.total_second)
                if (data.status === true) {
                    setStartTimer(true);
                }
            }
        })

    }, [])

    useEffect(() => {
        if (isStartTimer) {
            Helper.StorageService.setClockTimer(currentCount);
            Helper.StorageService.setIsClockTimer('true');
            if (currentCount <= 0) {
                return;
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        }
    }, [currentCount, isStartTimer]);


    function convertHMS(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
        let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return hours + ':' + minutes + ':' + seconds;
    }

    const getTimerSecond = (latest_date, status, stopTimer = 0) => {

        var date1 = new Date(timerDateFormate(new Date()));
        var date2 = new Date(timerDateFormate(latest_date));
        var oneDay = 24 * 60 * 60 * 1000;
        var diffDays = Math.abs((date1.getTime() - date2.getTime()) / (oneDay));
        var start = new Date(latest_date);
        const today = new Date();
        const minutes = parseInt(Math.abs(today.getTime() - start.getTime()) / (1000 * 60) % 60);
        // const seconds = parseInt(Math.abs(today.getTime() - start.getTime()) / (1000) % 60);

        if (diffDays !== 0 && status === false) {
            setCount(1);
        }
        if (diffDays === 0 && status === true) {
            setCount(minutes * 60)
        }
        if (diffDays === 0 && status === false) {
            setCount(stopTimer)
        }
        if (diffDays !== 0 && status === true) {
            setCount(minutes * 60);
        }
    }

    const start = () => {
        setStartTimer(!isStartTimer)
        let payload = {
            status: !isStartTimer,
            total_hours: convertHMS(currentCount),
            total_second: parseInt(currentCount),
        }
        props.addTimer(payload, function (response) {
            if (response.data.status === true) {
                // console.log(response,'isStartTimer');
            }
        });
    }

    return (
        <div className='clock-container'>
            <button onClick={start} className={isStartTimer ? 'clock-btn stop' : 'clock-btn start'} type="button">{convertHMS(currentCount)}</button>
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
        latestTimer: (fun) => dispatch(latestTimer(fun)),
        setTimerDefaults: () => dispatch(setTimerDefaults()),
        addTimer: (payload, cb) => dispatch(addTimer(payload, cb)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
