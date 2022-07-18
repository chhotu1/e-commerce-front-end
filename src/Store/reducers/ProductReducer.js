import * as ProductTypes from '../actionTypes/ProductTypes';
import Helper from '../../Helper';
const initialState = {
    products: [],
    product: {
        id: "",
        title: "",
        slug: "product",
        image: "",
        category_id: "",
        galleries: [],
        price: "",
        discription: "",
        offer: 0,
        offer_price: 0,
        image_url:"",
        image_name:""
    },
    formError: {
        title: "",
        category_id: "",
        price: "",
    },
    success_message: "",
    error_message: "",
    validation_errors: {},
    list_spinner: false,
    create_update_spinner: false
};

const ProductReducer = function (state = initialState, action) {
    let tags = [];
    switch (action.type) {
        case ProductTypes.LIST_PRODUCTS:
            return {
                ...state,
                list_spinner: true
            };
        case ProductTypes.LIST_PRODUCTS_SUCCESS:
            return {
                ...state,
                list_spinner: false,
                products: action.data
            };
        case ProductTypes.LIST_PRODUCTS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error
            };
        case ProductTypes.HANDLE_FIELD_CHANGE:
            return handleFieldChange(state, action);
        case ProductTypes.VALIDATE_PRODUCT_FORM:
            return handleCheckFormValidation(state, action);
        case ProductTypes.CREATE_PRODUCTS:
            return {
                ...state,
                create_update_spinner: true
            };
        case ProductTypes.CREATE_PRODUCTS_SUCCESS:
            tags = action.data.data.tags;

            if (tags) {
                tags = tags.map(x => x['id']);
            } else {
                tags = [];
            }

            action.data.data.tags = tags;

            return {
                ...state,
                create_update_spinner: false,
                product: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case ProductTypes.CREATE_PRODUCTS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case ProductTypes.SHOW_PRODUCT:
            return {
                ...state,
                create_update_spinner: true
            };
        case ProductTypes.SHOW_PRODUCT_SUCCESS:
            tags = action.data.tags;

            if (tags) {
                tags = tags.map(x => x['id']);
            } else {
                tags = [];
            }

            action.data.tags = tags;

            action.data.image = "";

            return {
                ...state,
                create_update_spinner: false,
                product: action.data
            };
        case ProductTypes.SHOW_PRODUCT_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case ProductTypes.EDIT_PRODUCTS:
            return {
                ...state,
                create_update_spinner: true
            };
        case ProductTypes.EDIT_PRODUCTS_SUCCESS:
            tags = action.data.data.tags;

            if (tags) {
                tags = tags.map(x => x['id']);
            } else {
                tags = [];
            }

            action.data.data.tags = tags;

            return {
                ...state,
                product: action.data.data,
                create_update_spinner: false,
                success_message: action.data.message,
                error_message: "",
                validation_errors: {}
            };
        case ProductTypes.EDIT_PRODUCTS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case ProductTypes.DELETE_PRODUCTS:
            return {
                ...state,
                list_spinner: true
            };
        case ProductTypes.DELETE_PRODUCTS_SUCCESS:
            let products = state.products;
            products = state.products.filter(item => item._id !== action.id);
            return {
                ...state,
                list_spinner: false,
                products: products,
                success_message: action.message,
                error_message: ''
            };
        case ProductTypes.DELETE_PRODUCTS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case ProductTypes.SET_PRODUCT_DEFAULTS:
            return {
                ...state,
                success_message: "",
                error_message: "",
                validation_errors: {},
                list_spinner: false,
                create_update_spinner: false
            };
        case ProductTypes.RESET_FIELDS:
            return {
                ...state,
                product: {
                    id: "",
                    title: "",
                    slug: "",
                    image: "",
                    category_id: "",
                    galleries: [],
                    price: "",
                    discription: "",
                    offer: "",
                    offer_price: ""
                }
            };
        default:
            return state;
    }
};

function handleFieldChange(state, action) {
    return {
        ...state,
        product: { ...state.product, [action.field]: action.data },
        formError: { ...state.formError, [action.field]: Helper.Forms.productForm(action.field, action.data) }
    };
}

function handleCheckFormValidation(state, action) {
    return {
        ...state,
        formError: { ...state.formError, ...action.data }
    };
}


export default ProductReducer;