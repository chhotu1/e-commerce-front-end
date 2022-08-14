import * as HolidaysTypes from '../actionTypes/HolidaysTypes';
import Forms from '../../Helper/Forms';
const initialValue = {
    title: "",
    start_date: "",
    end_date: "",
    description: "",
    status: 1,
}

const initialState = {
    holidays: [],
    holiday: initialValue,
    formError: initialValue,
    success_message: "",
    error_message: "",
    validation_errors: {},
    list_spinner: false,
    create_update_spinner: false
};

const holidaysReducer = function (state = initialState, action) {
    switch (action.type) {
        case HolidaysTypes.SET_HOLIDAY_DEFAULTS:
            return {
                ...state,
                holiday: { ...state.holiday },
                success_message: "",
                error_message: "",
                validation_errors: {},
                list_spinner: false,
                create_update_spinner: false
            };
        case HolidaysTypes.LIST_HOLIDAYS:
            return {
                ...state,
                list_spinner: true
            };
        case HolidaysTypes.LIST_HOLIDAYS_SUCCESS:
            return {
                ...state,
                holidays: action.data,
                list_spinner: false
            };
        case HolidaysTypes.LIST_HOLIDAYS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case HolidaysTypes.CREATE_HOLIDAYS:
            return {
                ...state,
                create_update_spinner: true
            };
        case HolidaysTypes.CREATE_HOLIDAYS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                holiday: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case HolidaysTypes.CREATE_HOLIDAYS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case HolidaysTypes.SHOW_HOLIDAY:
            return {
                ...state,
                create_update_spinner: true
            };
        case HolidaysTypes.SHOW_HOLIDAY_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                holiday: { ...action.data.data }
            };
        case HolidaysTypes.SHOW_HOLIDAY_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case HolidaysTypes.EDIT_HOLIDAYS:
            return {
                ...state,
                create_update_spinner: true
            };
        case HolidaysTypes.EDIT_HOLIDAYS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                holiday: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case HolidaysTypes.EDIT_HOLIDAYS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case HolidaysTypes.DELETE_HOLIDAYS:
            return {
                ...state,
                list_spinner: true
            };
        case HolidaysTypes.DELETE_HOLIDAYS_SUCCESS:
            let holidays = state.holidays;
            holidays = state.holidays.filter(item => item._id !== action.id);

            return {
                ...state,
                list_spinner: false,
                holidays: holidays,
                success_message: action.message,
                error_message: ''
            };

        case HolidaysTypes.DELETE_HOLIDAYS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case HolidaysTypes.RESET_HOLIDAY_FIELDS:
            return {
                ...state,
                holiday: initialValue
            };
        case HolidaysTypes.HANDLE_HOLIDAY_CHANGE:
            return handleChange(state, action);
        case HolidaysTypes.VALIDATE_HOLIDAY_FORM:
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
        holiday: { ...state.holiday, [action.field]: action.data },
        formError: { ...state.formError, [action.field]: Forms.holidaysForm(action.field, action.data) }
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}

export default holidaysReducer;