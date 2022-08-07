import * as UserTypes from '../actionTypes/UserTypes';

import UserServices from '../../Helper/Services/UserServices';


/**
 * set user defaults
 */
function setUserDefaults() {

    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.SET_USER_DEFAULTS
        });
    }
}

/**
 * list Users action
 */
function listUsers() {

    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.LIST_USERS
        });
        UserServices.list().then(response => {
            dispatch({
                type: UserTypes.LIST_USERS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: UserTypes.LIST_USERS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add user action
 */
function addUser (title, cb) {

    return function(dispatch, getState) {

        dispatch({
            type: UserTypes.CREATE_USERS
        });
        UserServices.add(title).then(response => {
            dispatch({
                type: UserTypes.CREATE_USERS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: UserTypes.CREATE_USERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show user action
 */
function showUser(id,fun)
{
    return function (dispatch, getState) {

        dispatch({
            type: UserTypes.SHOW_USER
        });

        UserServices.showOne(id).then(response => {
            dispatch({
                type: UserTypes.SHOW_USER_SUCCESS,
                data: response.data
            });
            fun(response)
        }).catch(error => {
            console.log(error,'===============')
            dispatch({
                type: UserTypes.SHOW_USER_FAILURE,
                error: error.response.data
            });
        });
    }
}

function currentUser()
{
    return function (dispatch, getState) {

        dispatch({
            type: UserTypes.CURRENT_USER
        });

        UserServices.profile().then(response => {
            dispatch({
                type: UserTypes.CURRENT_USER_SUCCESS,
                data: response.data
            });
            
        }).catch(error => {
            console.log(error,'----------------------')
            dispatch({
                type: UserTypes.CURRENT_USER_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * edit user action
 */
function editUser(payload, id, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: UserTypes.EDIT_USERS
        });

        UserServices.edit(payload, id).then(response => {
            dispatch({
                type: UserTypes.EDIT_USERS_SUCCESS,
                data: response.data
            });
            cb(response);
        }).catch(error => {
            dispatch({
                type: UserTypes.EDIT_USERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * delete user action
 */
// function deleteUser(id,fun)
// {
//     return function (dispatch, getState) {


//         dispatch({
//             type: UserTypes.DELETE_USERS
//         });


//         UserServices.remove(id).then(response => {
//             dispatch({
//                 type: UserTypes.DELETE_USERS_SUCCESS,
//                 message: response.data.message,
//                 id: id
//             });
//         }).catch(error => {
//             dispatch({
//                 type: UserTypes.DELETE_USERS_FAILURE,
//                 error: error.response.data
//             })
//         });
//     }
// }

function deleteUser(id,fun)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: UserTypes.DELETE_USERS
        });
        UserServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: UserTypes.DELETE_USERS_SUCCESS,
                    message: response.data.message,
                    id: id
                });
            }else{
                dispatch({
                    type: UserTypes.DELETE_USERS_FAILURE,
                    error:response.data
                })
            }
            fun(response)
        }).catch(error => {
            dispatch({
                type: UserTypes.DELETE_USERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * handle user change
 *
 * fires on any field change of the user object
 */
function handleUserChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: UserTypes.HANDLE_USER_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * reset user fields action
 */
function resetUserFields() {

    return function (dispatch, getState) {

        dispatch({
            type: UserTypes.RESET_USER_FIELDS
        });
    }
}

function checkUserValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.VALIDATE_USER_FORM,
            data: value
        });
    };
}

export {
    checkUserValidation,
    setUserDefaults,
    listUsers,
    addUser,
    showUser,
    editUser,
    deleteUser,
    handleUserChange,
    resetUserFields,
    currentUser
};