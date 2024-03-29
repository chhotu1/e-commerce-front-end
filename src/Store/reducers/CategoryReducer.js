import {
    LIST_CATEGORIES,
    LIST_CATEGORIES_SUCCESS,
    LIST_CATEGORIES_FAILURE,
    CREATE_CATEGORIES,
    CREATE_CATEGORIES_SUCCESS,
    CREATE_CATEGORIES_FAILURE,
    SHOW_CATEGORY,
    SHOW_CATEGORY_SUCCESS,
    SHOW_CATEGORY_FAILURE,
    EDIT_CATEGORIES,
    EDIT_CATEGORIES_SUCCESS,
    EDIT_CATEGORIES_FAILURE,
    DELETE_CATEGORIES,
    DELETE_CATEGORIES_SUCCESS,
    DELETE_CATEGORIES_FAILURE,
    SET_CATEGORY_DEFAULTS,
    HANDLE_CATEGORY_TITLE,
    LIST_ALL_CATEGORIES,
    VALIDATE_CATEGORY_FORM
} from '../actionTypes/CategoryTypes';
import Helper from '../../Helper';
const initialState = {
    categories: [],        // used in listing page
    all_categories: [],    // used in dropdowns
    category: {
        id: "",
        title: "",
        image_url: "",
        image_name:""
    },
    formError: {
        title: '',
    },
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false,
    create_update_spinner: false
};

const categoryReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY_DEFAULTS:
            return {
                ...state,
                category: { ...state.category },
                success_message: "",
                error_message: "",
                validation_errors: null,
                list_spinner: false,
                create_update_spinner: false
            };
        case HANDLE_CATEGORY_TITLE:
            return handleChange(state, action);
        // return {
        //     ...state,
        //     category: { ...state.category, title: action.data }
        // };
        case VALIDATE_CATEGORY_FORM:
            return handleCheckFormValidation(state, action);
        case LIST_CATEGORIES:
            return {
                ...state,
                list_spinner: true
            };
        case LIST_CATEGORIES_SUCCESS:

            return {
                ...state,
                categories: action.data,
                list_spinner: false
            };
        case LIST_CATEGORIES_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case LIST_ALL_CATEGORIES:
            return {
                ...state,
                all_categories: action.data
            };
        case CREATE_CATEGORIES:
            return {
                ...state,
                create_update_spinner: true
            };
        case CREATE_CATEGORIES_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                category: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case CREATE_CATEGORIES_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case SHOW_CATEGORY:
            return {
                ...state,
                create_update_spinner: true
            };
        case SHOW_CATEGORY_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                category: action.data.data
            };
        case SHOW_CATEGORY_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case EDIT_CATEGORIES:
            return {
                ...state,
                create_update_spinner: true
            };
        case EDIT_CATEGORIES_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                category: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case EDIT_CATEGORIES_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case DELETE_CATEGORIES:
            return {
                ...state,
                list_spinner: true
            };
        case DELETE_CATEGORIES_SUCCESS:
            let cats = state.categories;
            cats = state.categories.filter(item => item._id !== action.id);
            return {
                ...state,
                list_spinner: false,
                categories: cats,
                success_message: action.message,
                error_message: ''
            };
        case DELETE_CATEGORIES_FAILURE:

            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        default:
            return state;
    }
};

function handleChange(state, action) {
    return {
        ...state,
        category: { ...state.category, [action.field]: action.data },
        formError: { ...state.formError, [action.field]: Helper.Forms.categoryForm(action.field, action.data) }
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}


export default categoryReducer;