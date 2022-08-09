import React, { useState, useEffect } from 'react'
const Clock = () => {
    const [currentCount, setCount] = useState(1);
    const [isStartTimer, setStartTimer] = useState(false)
    const timer = () => setCount(currentCount + 1);

    useEffect(() => {
        if (isStartTimer) {
            if (currentCount <= 0) {
                return;
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        }

    },
        [currentCount, isStartTimer]
    );

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
