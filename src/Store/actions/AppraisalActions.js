import * as AppraisalTypes from '../actionTypes/AppraisalTypes';
import AppraisalServices from '../../Helper/Services/AppraisalServices';
/**
 * set APPRAISAL defaults
 */
function setAppraisalDefaults() {

    return function (dispatch, getState) {
        dispatch({
            type: AppraisalTypes.SET_APPRAISAL_DEFAULTS
        });
    }
}

/**
 * list APPRAISAL action
 */
function listAppraisal() {

    return function (dispatch, getState) {
        dispatch({
            type: AppraisalTypes.LIST_APPRAISALS
        });
        AppraisalServices.list().then(response => {
            dispatch({
                type: AppraisalTypes.LIST_APPRAISALS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: AppraisalTypes.LIST_APPRAISALS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add APPRAISAL action
 */
function addAppraisal (title, cb) {

    return function(dispatch, getState) {

        dispatch({
            type: AppraisalTypes.CREATE_APPRAISALS
        });
        AppraisalServices.add(title).then(response => {
            dispatch({
                type: AppraisalTypes.CREATE_APPRAISALS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: AppraisalTypes.CREATE_APPRAISALS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show APPRAISAL action
 */
function showAppraisal(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: AppraisalTypes.SHOW_APPRAISAL
        });

        AppraisalServices.showOne(id).then(response => {
            dispatch({
                type: AppraisalTypes.SHOW_APPRAISAL_SUCCESS,
                data: response.data
            });
            // fun(response)
        }).catch(error => {
            dispatch({
                type: AppraisalTypes.SHOW_APPRAISAL_FAILURE,
                error: error.response.data
            });
        });
    }
}



/**
 * edit APPRAISAL action
 */
function editAppraisal(payload, id, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: AppraisalTypes.EDIT_APPRAISALS
        });

        AppraisalServices.edit(payload, id).then(response => {
            dispatch({
                type: AppraisalTypes.EDIT_APPRAISALS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: AppraisalTypes.EDIT_APPRAISALS_FAILURE,
                error: error.response.data
            })
        });
    }
}


function deleteAppraisal(id,fun)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: AppraisalTypes.DELETE_APPRAISALS
        });
        AppraisalServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: AppraisalTypes.DELETE_APPRAISALS_SUCCESS,
                    message: response.data.message,
                    id: id
                });
            }else{
                dispatch({
                    type: AppraisalTypes.DELETE_APPRAISALS_FAILURE,
                    error:response.data
                })
            }
            fun(response)
        }).catch(error => {
            dispatch({
                type: AppraisalTypes.DELETE_APPRAISALS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * handle APPRAISAL change
 *
 * fires on any field change of the APPRAISAL object
 */
function handleAppraisalChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: AppraisalTypes.HANDLE_APPRAISAL_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * reset APPRAISAL fields action
 */
function resetAppraisalFields() {

    return function (dispatch, getState) {

        dispatch({
            type: AppraisalTypes.RESET_APPRAISAL_FIELDS
        });
    }
}

function checkAppraisalValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: AppraisalTypes.VALIDATE_APPRAISAL_FORM,
            data: value
        });
    };
}

export {
    checkAppraisalValidation,
    setAppraisalDefaults,
    listAppraisal,
    addAppraisal,
    showAppraisal,
    editAppraisal,
    deleteAppraisal,
    handleAppraisalChange,
    resetAppraisalFields,
};