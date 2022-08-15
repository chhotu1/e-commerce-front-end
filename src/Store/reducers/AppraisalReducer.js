import * as AppraisalTypes from '../actionTypes/AppraisalTypes';
import Forms from '../../Helper/Forms';
const initialValue = {
    title: "",
    start_date: "",
    end_date: "",
    description: "",
    status: "",
    amount:"",
    user:"",
}

const initialState = {
    appraisals: [],
    appraisal: initialValue,
    formError: initialValue,
    success_message: "",
    error_message: "",
    validation_errors: {},
    list_spinner: false,
    create_update_spinner: false
};

const appraisalReducer = function (state = initialState, action) {
    switch (action.type) {
        case AppraisalTypes.SET_APPRAISAL_DEFAULTS:
            return {
                ...state,
                appraisal: { ...state.appraisal },
                success_message: "",
                error_message: "",
                validation_errors: {},
                list_spinner: false,
                create_update_spinner: false
            };
        case AppraisalTypes.LIST_APPRAISALS:
            return {
                ...state,
                list_spinner: true
            };
        case AppraisalTypes.LIST_APPRAISALS_SUCCESS:
            return {
                ...state,
                appraisals: action.data,
                list_spinner: false
            };
        case AppraisalTypes.LIST_APPRAISALS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case AppraisalTypes.CREATE_APPRAISALS:
            return {
                ...state,
                create_update_spinner: true
            };
        case AppraisalTypes.CREATE_APPRAISALS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                appraisal: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case AppraisalTypes.CREATE_APPRAISALS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case AppraisalTypes.SHOW_APPRAISAL:
            return {
                ...state,
                create_update_spinner: true
            };
        case AppraisalTypes.SHOW_APPRAISAL_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                appraisal: { ...action.data.data }
            };
        case AppraisalTypes.SHOW_APPRAISAL_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case AppraisalTypes.EDIT_APPRAISALS:
            return {
                ...state,
                create_update_spinner: true
            };
        case AppraisalTypes.EDIT_APPRAISALS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                appraisal: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case AppraisalTypes.EDIT_APPRAISALS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case AppraisalTypes.DELETE_APPRAISALS:
            return {
                ...state,
                list_spinner: true
            };
        case AppraisalTypes.DELETE_APPRAISALS_SUCCESS:
            let appraisals = state.appraisals;
            appraisals = state.appraisals.filter(item => item._id !== action.id);

            return {
                ...state,
                list_spinner: false,
                appraisals: appraisals,
                success_message: action.message,
                error_message: ''
            };

        case AppraisalTypes.DELETE_APPRAISALS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case AppraisalTypes.RESET_APPRAISAL_FIELDS:
            return {
                ...state,
                appraisal: initialValue
            };
        case AppraisalTypes.HANDLE_APPRAISAL_CHANGE:
            return handleChange(state, action);
        case AppraisalTypes.VALIDATE_APPRAISAL_FORM:
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
        appraisal: { ...state.appraisal, [action.field]: action.data },
        formError: { ...state.formError, [action.field]: Forms.appraisalForm(action.field, action.data) }
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}

export default appraisalReducer;