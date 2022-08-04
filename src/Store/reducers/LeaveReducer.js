import * as LeaveTypes from '../actionTypes/LeaveTypes';
import Forms from '../../Helper/Forms';
const initialValue = {
    title: "",
    start_date: "",
    end_date: "",
    leave_type: "",
    description: "",
    status: 2,
}

const initialState = {
    leaves: [],
    leave: initialValue,
    formError: initialValue,
    success_message: "",
    error_message: "",
    validation_errors: {},
    list_spinner: false,
    create_update_spinner: false
};

const leaveReducer = function (state = initialState, action) {
    switch (action.type) {
        case LeaveTypes.SET_LEAVE_DEFAULTS:
            return {
                ...state,
                leave: { ...state.leave },
                success_message: "",
                error_message: "",
                validation_errors: {},
                list_spinner: false,
                create_update_spinner: false
            };
        case LeaveTypes.LIST_LEAVES:
            return {
                ...state,
                list_spinner: true
            };
        case LeaveTypes.LIST_LEAVES_SUCCESS:
            return {
                ...state,
                leaves: action.data,
                list_spinner: false
            };
        case LeaveTypes.LIST_LEAVES_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case LeaveTypes.CREATE_LEAVES:
            return {
                ...state,
                create_update_spinner: true
            };
        case LeaveTypes.CREATE_LEAVES_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                leave: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case LeaveTypes.CREATE_LEAVES_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case LeaveTypes.SHOW_LEAVE:
            return {
                ...state,
                create_update_spinner: true
            };
        case LeaveTypes.SHOW_LEAVE_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                leave: { ...action.data.data }
            };
        case LeaveTypes.SHOW_LEAVE_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case LeaveTypes.EDIT_LEAVES:
            return {
                ...state,
                create_update_spinner: true
            };
        case LeaveTypes.EDIT_LEAVES_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                leave: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case LeaveTypes.EDIT_LEAVES_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case LeaveTypes.DELETE_LEAVES:
            return {
                ...state,
                list_spinner: true
            };
        case LeaveTypes.DELETE_LEAVES_SUCCESS:
            let leaves = state.leaves;
            leaves = state.leaves.filter(item => item._id !== action.id);

            return {
                ...state,
                list_spinner: false,
                leaves: leaves,
                success_message: action.message,
                error_message: ''
            };

        case LeaveTypes.DELETE_LEAVES_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case LeaveTypes.RESET_LEAVE_FIELDS:
            return {
                ...state,
                leave: initialValue
            };
        case LeaveTypes.HANDLE_LEAVE_CHANGE:
            return handleChange(state, action);
        case LeaveTypes.VALIDATE_LEAVE_FORM:
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
        leave: { ...state.leave, [action.field]: action.data },
        formError: { ...state.formError, [action.field]: Forms.leaveForm(action.field, action.data) }
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}

export default leaveReducer;