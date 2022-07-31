import * as UserTypes from '../actionTypes/UserTypes';
import Forms from '../../Helper/Forms';
const initialValue = {
    name: "",
    email: "",
    password: "",
    role: "",
    date_of_birth: "",
    experience: "",
    specialist: "",
    parmanent_address: "",
    current_address: "",
    parmanent_state: "",
    parmanent_city: "",
    parmanent_country: "",
    parmanent_pincode: "",
    current_state: "",
    current_city: "",
    current_country: "",
    current_pincode: "",
    adhar_no: "",
    pain_no: "",
    father_mobile_no: "",
    phone: "",
    other_phone: "",
    friend_phone: "",
    photo: "",
    status: "",
    image_name:"",
    access_token: "",
    image_url:"",
}

const initialState = {
    users: [],
    user: initialValue,
    formError: initialValue,
    success_message: "",
    error_message: "",
    validation_errors: {},
    list_spinner: false,
    create_update_spinner: false
};

const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case UserTypes.SET_USER_DEFAULTS:
            return {
                ...state,
                user: { ...state.user },
                success_message: "",
                error_message: "",
                validation_errors: {},
                list_spinner: false,
                create_update_spinner: false
            };
        case UserTypes.LIST_USERS:
            return {
                ...state,
                list_spinner: true
            };
        case UserTypes.LIST_USERS_SUCCESS:
            return {
                ...state,
                users: action.data,
                list_spinner: false
            };
        case UserTypes.LIST_USERS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case UserTypes.CREATE_USERS:
            return {
                ...state,
                create_update_spinner: true
            };
        case UserTypes.CREATE_USERS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                user: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case UserTypes.CREATE_USERS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case UserTypes.SHOW_USER:
            return {
                ...state,
                create_update_spinner: true
            };
        case UserTypes.SHOW_USER_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                user: { ...action.data.data }
            };
        case UserTypes.SHOW_USER_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case UserTypes.EDIT_USERS:
            return {
                ...state,
                create_update_spinner: true
            };
        case UserTypes.EDIT_USERS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                user: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case UserTypes.EDIT_USERS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case UserTypes.DELETE_USERS:
            return {
                ...state,
                list_spinner: true
            };
        case UserTypes.DELETE_USERS_SUCCESS:
            let users = state.users;
            users = state.users.filter(item => item._id !== action.id);

            return {
                ...state,
                list_spinner: false,
                users: users,
                success_message: action.message,
                error_message: ''
            };

        case UserTypes.DELETE_USERS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case UserTypes.RESET_USER_FIELDS:
            return {
                ...state,
                user:initialValue
            };
        case UserTypes.HANDLE_USER_CHANGE:
            return handleChange(state, action);
        case UserTypes.VALIDATE_USER_FORM:
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
        user: { ...state.user, [action.field]: action.data },
        formError: { ...state.formError, [action.field]: Forms.userForm(action.field, action.data) }
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}

export default userReducer;