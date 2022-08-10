import React, { useState, useEffect } from 'react'
import Helper from '../../../Helper';
const Clock = () => {
    const [currentCount, setCount] = useState(1);
    const [isStartTimer, setStartTimer] = useState(false)
    const timer = () => setCount(currentCount + 1);

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
    },[currentCount, isStartTimer]);

    useEffect(()=>{
        let cTimer = Helper.StorageService.getClockTimer();
        let isCtimer = Helper.StorageService.getIsClockTimer();
        if(cTimer && isCtimer && cTimer!==null && isCtimer!==null){
            if(isStartTimer===false){
                setCount(parseInt(cTimer))
            }
            setStartTimer(true);
        }
    },[])

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

    useEffect(()=>{
        //Wed Aug 10 2022 07:22:03 GMT+0530 (India Standard Time)
        var start = new Date('Wed Aug 10 2022 07:38:24 GMT+0530 (India Standard Time)');
        // console.log(start.getSeconds(),'===============')
        const today = new Date();
        // console.log(today,'===============')
        // const endDate = new Date(startDate.setDate(startDate.getDate() + 7));
        // const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
        // const hours = parseInt(Math.abs(endDate - today) / (1000 * 60 * 60) % 24);
        const minutes = parseInt(Math.abs(today.getTime() - start.getTime()) / (1000 * 60) % 60);
        const seconds = parseInt(Math.abs(today.getTime() - start.getTime()) / (1000) % 60);
        console.log(minutes,'minute',minutes*60,'ssssssssssssssssssss',seconds)

    },[])

    const start = () => {
        setStartTimer(!isStartTimer)
    }

    return (
        <div className='clock-container'>
            <button onClick={start} className={isStartTimer?'clock-btn stop':'clock-btn start'} type="button">{convertHMS(currentCount)}</button>
        </div>
    )
}

export default Clock
