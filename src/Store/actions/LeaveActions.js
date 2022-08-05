import * as LeaveTypes from '../actionTypes/LeaveTypes';
import LeaveServices from '../../Helper/Services/LeaveServices';
/**
 * set LEAVE defaults
 */
function setLeaveDefaults() {

    return function (dispatch, getState) {
        dispatch({
            type: LeaveTypes.SET_LEAVE_DEFAULTS
        });
    }
}

/**
 * list LEAVE action
 */
function listLeaves() {

    return function (dispatch, getState) {
        dispatch({
            type: LeaveTypes.LIST_LEAVES
        });
        LeaveServices.list().then(response => {
            dispatch({
                type: LeaveTypes.LIST_LEAVES_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: LeaveTypes.LIST_LEAVES_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add LEAVE action
 */
function addLeave (title, cb) {

    return function(dispatch, getState) {

        dispatch({
            type: LeaveTypes.CREATE_LEAVES
        });
        LeaveServices.add(title).then(response => {
            dispatch({
                type: LeaveTypes.CREATE_LEAVES_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: LeaveTypes.CREATE_LEAVES_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show LEAVE action
 */
function showLeave(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: LeaveTypes.SHOW_LEAVE
        });

        LeaveServices.showOne(id).then(response => {
            dispatch({
                type: LeaveTypes.SHOW_LEAVE_SUCCESS,
                data: response.data
            });
            // fun(response)
        }).catch(error => {
            dispatch({
                type: LeaveTypes.SHOW_LEAVE_FAILURE,
                error: error.response.data
            });
        });
    }
}



/**
 * edit LEAVE action
 */
function editLeave(payload, id, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: LeaveTypes.EDIT_LEAVES
        });

        LeaveServices.edit(payload, id).then(response => {
            dispatch({
                type: LeaveTypes.EDIT_LEAVES_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: LeaveTypes.EDIT_LEAVES_FAILURE,
                error: error.response.data
            })
        });
    }
}


function deleteLeave(id,fun)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: LeaveTypes.DELETE_LEAVES
        });
        LeaveServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: LeaveTypes.DELETE_LEAVES_SUCCESS,
                    message: response.data.message,
                    id: id
                });
            }else{
                dispatch({
                    type: LeaveTypes.DELETE_LEAVES_FAILURE,
                    error:response.data
                })
            }
            fun(response)
        }).catch(error => {
            dispatch({
                type: LeaveTypes.DELETE_LEAVES_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * handle LEAVE change
 *
 * fires on any field change of the LEAVE object
 */
function handleLeaveChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: LeaveTypes.HANDLE_LEAVE_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * reset LEAVE fields action
 */
function resetLeaveFields() {

    return function (dispatch, getState) {

        dispatch({
            type: LeaveTypes.RESET_LEAVE_FIELDS
        });
    }
}

function checkLeaveValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: LeaveTypes.VALIDATE_LEAVE_FORM,
            data: value
        });
    };
}

export {
    checkLeaveValidation,
    setLeaveDefaults,
    listLeaves,
    addLeave,
    showLeave,
    editLeave,
    deleteLeave,
    handleLeaveChange,
    resetLeaveFields,
};