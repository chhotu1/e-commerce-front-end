import * as NotificationTypes from '../actionTypes/NotificationTypes';
import Forms from '../../Helper/Forms';
const initialValue = {
    title: ""
}

const initialState = {
    notifications: [],
    notification: initialValue,
    formError: initialValue,
    success_message: "",
    error_message: "",
    validation_errors: {},
    list_spinner: false,
    create_update_spinner: false
};

const notificationsReducer = function (state = initialState, action) {
    switch (action.type) {
        case NotificationTypes.SET_NOTIFICATION_DEFAULTS:
            return {
                ...state,
                notification: { ...state.notification },
                success_message: "",
                error_message: "",
                validation_errors: {},
                list_spinner: false,
                create_update_spinner: false
            };
        case NotificationTypes.LIST_NOTIFICATIONS:
            return {
                ...state,
                list_spinner: true
            };
        case NotificationTypes.LIST_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data,
                list_spinner: false
            };
        case NotificationTypes.LIST_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case NotificationTypes.CREATE_NOTIFICATIONS:
            return {
                ...state,
                create_update_spinner: true
            };
        case NotificationTypes.CREATE_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                notification: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case NotificationTypes.CREATE_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case NotificationTypes.SHOW_NOTIFICATION:
            return {
                ...state,
                create_update_spinner: true
            };
        case NotificationTypes.SHOW_NOTIFICATION_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                notification: { ...action.data.data }
            };
        case NotificationTypes.SHOW_NOTIFICATION_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case NotificationTypes.EDIT_NOTIFICATIONS:
            return {
                ...state,
                create_update_spinner: true
            };
        case NotificationTypes.EDIT_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                notification: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case NotificationTypes.EDIT_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case NotificationTypes.DELETE_NOTIFICATIONS:
            return {
                ...state,
                list_spinner: true
            };
        case NotificationTypes.DELETE_NOTIFICATIONS_SUCCESS:
            let notifications = state.notifications;
            notifications = state.notifications.filter(item => item._id !== action.id);

            return {
                ...state,
                list_spinner: false,
                notifications: notifications,
                success_message: action.message,
                error_message: ''
            };

        case NotificationTypes.DELETE_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case NotificationTypes.RESET_NOTIFICATION_FIELDS:
            return {
                ...state,
                notification: initialValue
            };
        case NotificationTypes.HANDLE_NOTIFICATION_CHANGE:
            return handleChange(state, action);
        case NotificationTypes.VALIDATE_NOTIFICATION_FORM:
            return handleCheckFormValidation(state, action);
        default:
            return state;
    }
};

/**
 * handle field change
 */


function handleChange(state, action) {
    return {
        ...state,
        notification: { ...state.notification, [action.field]: action.data },
        formError: { ...state.formError, [action.field]: Forms.notificationForm(action.field, action.data) }
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}

export default notificationsReducer;