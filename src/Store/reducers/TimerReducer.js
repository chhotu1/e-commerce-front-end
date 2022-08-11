import * as TimerTypes from '../actionTypes/TimerTypes';
const initialValue = {
    total_hours: "",
    status:false,
    total_second:'',
}

const initialState = {
    timers: [],
    timer: initialValue,
    latest_timer: initialValue,
    formError: initialValue,
    success_message: "",
    error_message: "",
    validation_errors: {},
    list_spinner: false,
    create_update_spinner: false
};

const timerReducer = function (state = initialState, action) {
    switch (action.type) {
        case TimerTypes.SET_TIMER_DEFAULTS:
            return {
                ...state,
                timer: { ...state.timer },
                success_message: "",
                error_message: "",
                validation_errors: {},
                list_spinner: false,
                create_update_spinner: false
            };
        case TimerTypes.LIST_TIMERS:
            return {
                ...state,
                list_spinner: true
            };
        case TimerTypes.LIST_TIMERS_SUCCESS:
            return {
                ...state,
                timers: action.data,
                list_spinner: false
            };
        case TimerTypes.LIST_TIMERS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case TimerTypes.CREATE_TIMERS:
            return {
                ...state,
                create_update_spinner: true
            };
        case TimerTypes.CREATE_TIMERS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                timer: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case TimerTypes.CREATE_TIMERS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case TimerTypes.SHOW_TIMER:
            return {
                ...state,
                create_update_spinner: true
            };
        case TimerTypes.SHOW_TIMER_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                timer: { ...action.data.data }
            };
        case TimerTypes.SHOW_TIMER_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };

        case TimerTypes.LATEST_SHOW_TIMER:
            return {
                ...state,
                create_update_spinner: true
            };
        case TimerTypes.LATEST_SHOW_TIMER_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                latest_timer: { ...action.data.data }
            };
        case TimerTypes.LATEST_SHOW_TIMER_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };

        case TimerTypes.EDIT_TIMERS:
            return {
                ...state,
                create_update_spinner: true
            };
        case TimerTypes.EDIT_TIMERS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                timer: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case TimerTypes.EDIT_TIMERS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case TimerTypes.DELETE_TIMERS:
            return {
                ...state,
                list_spinner: true
            };
        case TimerTypes.DELETE_TIMERS_SUCCESS:
            let timers = state.timers;
            timers = state.timers.filter(item => item._id !== action.id);

            return {
                ...state,
                list_spinner: false,
                timers: timers,
                success_message: action.message,
                error_message: ''
            };

        case TimerTypes.DELETE_TIMERS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case TimerTypes.RESET_TIMER_FIELDS:
            return {
                ...state,
                timer: initialValue
            };
        case TimerTypes.HANDLE_TIMER_CHANGE:
            return handleChange(state, action);
        case TimerTypes.VALIDATE_TIMER_FORM:
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
        timer: { ...state.timer, [action.field]: action.data },
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}

export default timerReducer;