import * as HolidaysTypes from '../actionTypes/HolidaysTypes';
import HolidaysServices from '../../Helper/Services/HolidaysServices';
/**
 * set HOLIDAY defaults
 */
function setHolidayDefaults() {

    return function (dispatch, getState) {
        dispatch({
            type: HolidaysTypes.SET_HOLIDAY_DEFAULTS
        });
    }
}

/**
 * list HOLIDAY action
 */
function listHolidays() {

    return function (dispatch, getState) {
        dispatch({
            type: HolidaysTypes.LIST_HOLIDAYS
        });
        HolidaysServices.list().then(response => {
            dispatch({
                type: HolidaysTypes.LIST_HOLIDAYS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: HolidaysTypes.LIST_HOLIDAYS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add HOLIDAY action
 */
function addHoliday (title, cb) {

    return function(dispatch, getState) {

        dispatch({
            type: HolidaysTypes.CREATE_HOLIDAYS
        });
        HolidaysServices.add(title).then(response => {
            dispatch({
                type: HolidaysTypes.CREATE_HOLIDAYS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: HolidaysTypes.CREATE_HOLIDAYS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show HOLIDAY action
 */
function showHoliday(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: HolidaysTypes.SHOW_HOLIDAY
        });

        HolidaysServices.showOne(id).then(response => {
            dispatch({
                type: HolidaysTypes.SHOW_HOLIDAY_SUCCESS,
                data: response.data
            });
            // fun(response)
        }).catch(error => {
            dispatch({
                type: HolidaysTypes.SHOW_HOLIDAY_FAILURE,
                error: error.response.data
            });
        });
    }
}



/**
 * edit HOLIDAY action
 */
function editHoliday(payload, id, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: HolidaysTypes.EDIT_HOLIDAYS
        });

        HolidaysServices.edit(payload, id).then(response => {
            dispatch({
                type: HolidaysTypes.EDIT_HOLIDAYS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: HolidaysTypes.EDIT_HOLIDAYS_FAILURE,
                error: error.response.data
            })
        });
    }
}


function deleteHoliday(id,fun)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: HolidaysTypes.DELETE_HOLIDAYS
        });
        HolidaysServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: HolidaysTypes.DELETE_HOLIDAYS_SUCCESS,
                    message: response.data.message,
                    id: id
                });
            }else{
                dispatch({
                    type: HolidaysTypes.DELETE_HOLIDAYS_FAILURE,
                    error:response.data
                })
            }
            fun(response)
        }).catch(error => {
            dispatch({
                type: HolidaysTypes.DELETE_HOLIDAYS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * handle HOLIDAY change
 *
 * fires on any field change of the HOLIDAY object
 */
function handleHolidayChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: HolidaysTypes.HANDLE_HOLIDAY_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * reset HOLIDAY fields action
 */
function resetHolidayFields() {

    return function (dispatch, getState) {

        dispatch({
            type: HolidaysTypes.RESET_HOLIDAY_FIELDS
        });
    }
}

function checkHolidayValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: HolidaysTypes.VALIDATE_HOLIDAY_FORM,
            data: value
        });
    };
}

export {
    checkHolidayValidation,
    setHolidayDefaults,
    listHolidays,
    addHoliday,
    showHoliday,
    editHoliday,
    deleteHoliday,
    handleHolidayChange,
    resetHolidayFields,
};