import * as TimerTypes from '../actionTypes/TimerTypes';
import TimerServices from '../../Helper/Services/TimerServices';
/**
 * set TIMER defaults
 */
function setTimerDefaults() {

    return function (dispatch, getState) {
        dispatch({
            type: TimerTypes.SET_TIMER_DEFAULTS
        });
    }
}

/**
 * list TIMER action
 */
function listTimers() {

    return function (dispatch, getState) {
        dispatch({
            type: TimerTypes.LIST_TIMERS
        });
        TimerServices.list().then(response => {
            dispatch({
                type: TimerTypes.LIST_TIMERS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: TimerTypes.LIST_TIMERS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add TIMER action
 */
function addTimer (payload, cb) {

    return function(dispatch, getState) {

        dispatch({
            type: TimerTypes.CREATE_TIMERS
        });
        TimerServices.add(payload).then(response => {
            dispatch({
                type: TimerTypes.CREATE_TIMERS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: TimerTypes.CREATE_TIMERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show TIMER action
 */
function showTimer(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: TimerTypes.SHOW_TIMER
        });

        TimerServices.showOne(id).then(response => {
            dispatch({
                type: TimerTypes.SHOW_TIMER_SUCCESS,
                data: response.data
            });
            // fun(response)
        }).catch(error => {
            dispatch({
                type: TimerTypes.SHOW_TIMER_FAILURE,
                error: error.response.data
            });
        });
    }
}

function latestTimer(fun)
{
    return function (dispatch, getState) {

        dispatch({
            type: TimerTypes.LATEST_SHOW_TIMER
        });

        TimerServices.latestTimer().then(response => {
            dispatch({
                type: TimerTypes.LATEST_SHOW_TIMER_SUCCESS,
                data: response.data
            });
            fun(response)
        }).catch(error => {
            
            dispatch({
                type: TimerTypes.LATEST_SHOW_TIMER_FAILURE,
                error: error.response.data
            });
        });
    }
}



/**
 * edit TIMER action
 */
function editTimer(payload, id, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: TimerTypes.EDIT_TIMERS
        });

        TimerServices.edit(payload, id).then(response => {
            dispatch({
                type: TimerTypes.EDIT_TIMERS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: TimerTypes.EDIT_TIMERS_FAILURE,
                error: error.response.data
            })
        });
    }
}


function deleteTimer(id,fun)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: TimerTypes.DELETE_TIMERS
        });
        TimerServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: TimerTypes.DELETE_TIMERS_SUCCESS,
                    message: response.data.message,
                    id: id
                });
            }else{
                dispatch({
                    type: TimerTypes.DELETE_TIMERS_FAILURE,
                    error:response.data
                })
            }
            fun(response)
        }).catch(error => {
            dispatch({
                type: TimerTypes.DELETE_TIMERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * handle TIMER change
 *
 * fires on any field change of the TIMER object
 */
function handleTimerChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: TimerTypes.HANDLE_TIMER_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * reset TIMER fields action
 */
function resetTimerFields() {

    return function (dispatch, getState) {

        dispatch({
            type: TimerTypes.RESET_TIMER_FIELDS
        });
    }
}

function checkTimerValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: TimerTypes.VALIDATE_TIMER_FORM,
            data: value
        });
    };
}

export {
    checkTimerValidation,
    setTimerDefaults,
    listTimers,
    addTimer,
    showTimer,
    editTimer,
    deleteTimer,
    handleTimerChange,
    resetTimerFields,
    latestTimer
};