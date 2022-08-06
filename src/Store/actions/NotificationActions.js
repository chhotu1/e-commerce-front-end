import * as NotificationTypes from '../actionTypes/NotificationTypes';
import NotificationServices from '../../Helper/Services/NotificationServices';
/**
 * set NOTIFICATION defaults
 */
function setNotificationDefaults() {

    return function (dispatch, getState) {
        dispatch({
            type: NotificationTypes.SET_NOTIFICATION_DEFAULTS
        });
    }
}

/**
 * list NOTIFICATION action
 */
function listNotifications() {

    return function (dispatch, getState) {
        dispatch({
            type: NotificationTypes.LIST_NOTIFICATIONS
        });
        NotificationServices.list().then(response => {
            dispatch({
                type: NotificationTypes.LIST_NOTIFICATIONS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: NotificationTypes.LIST_NOTIFICATIONS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add NOTIFICATION action
 */
function addNotification (title, cb) {

    return function(dispatch, getState) {

        dispatch({
            type: NotificationTypes.CREATE_NOTIFICATIONS
        });
        NotificationServices.add(title).then(response => {
            dispatch({
                type: NotificationTypes.CREATE_NOTIFICATIONS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: NotificationTypes.CREATE_NOTIFICATIONS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show NOTIFICATION action
 */
function showNotification(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: NotificationTypes.SHOW_NOTIFICATION
        });

        NotificationServices.showOne(id).then(response => {
            dispatch({
                type: NotificationTypes.SHOW_NOTIFICATION_SUCCESS,
                data: response.data
            });
            // fun(response)
        }).catch(error => {
            dispatch({
                type: NotificationTypes.SHOW_NOTIFICATION_FAILURE,
                error: error.response.data
            });
        });
    }
}



/**
 * edit NOTIFICATION action
 */
function editNotification(payload, id, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: NotificationTypes.EDIT_NOTIFICATIONS
        });

        NotificationServices.edit(payload, id).then(response => {
            dispatch({
                type: NotificationTypes.EDIT_NOTIFICATIONS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: NotificationTypes.EDIT_NOTIFICATIONS_FAILURE,
                error: error.response.data
            })
        });
    }
}


function deleteNotification(id,fun)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: NotificationTypes.DELETE_NOTIFICATIONS
        });
        NotificationServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: NotificationTypes.DELETE_NOTIFICATIONS_SUCCESS,
                    message: response.data.message,
                    id: id
                });
            }else{
                dispatch({
                    type: NotificationTypes.DELETE_NOTIFICATIONS_FAILURE,
                    error:response.data
                })
            }
            fun(response)
        }).catch(error => {
            dispatch({
                type: NotificationTypes.DELETE_NOTIFICATIONS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * handle NOTIFICATION change
 *
 * fires on any field change of the NOTIFICATION object
 */
function handleNotificationChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: NotificationTypes.HANDLE_NOTIFICATION_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * reset NOTIFICATION fields action
 */
function resetNotificationFields() {

    return function (dispatch, getState) {

        dispatch({
            type: NotificationTypes.RESET_NOTIFICATION_FIELDS
        });
    }
}

function checkNotificationValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: NotificationTypes.VALIDATE_NOTIFICATION_FORM,
            data: value
        });
    };
}

export {
    checkNotificationValidation,
    setNotificationDefaults,
    listNotifications,
    addNotification,
    showNotification,
    editNotification,
    deleteNotification,
    handleNotificationChange,
    resetNotificationFields,
};