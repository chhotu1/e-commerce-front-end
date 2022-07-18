import * as ProductTypes from '../actionTypes/ProductTypes';
import Helper from '../../Helper';
/**
 * list Products action
 * @param page
 */
function listProducts() {

    return function (dispatch, getState) {

        // start sending request (first dispatch)
        dispatch({
            type: ProductTypes.LIST_PRODUCTS
        });

        Helper.ProductServices.list().then(response => {

            dispatch({
                type: ProductTypes.LIST_PRODUCTS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {

            dispatch({
                type: ProductTypes.LIST_PRODUCTS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * handle field change
 *
 * fires on any field change of the Product object
 */
function handleProductChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: ProductTypes.HANDLE_FIELD_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * add Product action
 *
 *
 * @returns {Function}
 */
function addProduct(payload, cb) {
    
    return function (dispatch, getState) {

        dispatch({
            type: ProductTypes.CREATE_PRODUCTS
        });

        Helper.ProductServices.add(payload).then(response => {

            dispatch({
                type: ProductTypes.CREATE_PRODUCTS_SUCCESS,
                data: response.data
            });

            cb(response);
        }).catch(error => {

            dispatch({
                type: ProductTypes.CREATE_PRODUCTS_FAILURE,
                error: error.response.data
            })
        })
    }
}

/**
 * show Product action
 *
 * @param id
 * @returns {Function}
 */
function showProduct(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: ProductTypes.SHOW_PRODUCT
        });


        Helper.ProductServices.showOne(id).then(response => {
            dispatch({
                type: ProductTypes.SHOW_PRODUCT_SUCCESS,
                data: response.data.data
            });

        }).catch(error => {
            dispatch({
                type: ProductTypes.SHOW_PRODUCT_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * edit Product action
 */
function editProduct(id, payload, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: ProductTypes.EDIT_PRODUCTS
        });


        Helper.ProductServices.edit(payload, id).then(response => {
            dispatch({
                type: ProductTypes.EDIT_PRODUCTS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: ProductTypes.EDIT_PRODUCTS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * delete Product action
 */
function deleteProduct(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: ProductTypes.DELETE_PRODUCTS
        });


        Helper.ProductServices.remove(id).then(response => {
            dispatch({
                type: ProductTypes.DELETE_PRODUCTS_SUCCESS,
                message: response.data.message,
                id: id
            });
        }).catch(error => {
            dispatch({
                type: ProductTypes.DELETE_PRODUCTS_FAILURE,
                error: error.response.data
            })
        });
    }
}

function setProductDefaults() {

    return function (dispatch, getState) {

        dispatch({
            type: ProductTypes.SET_PRODUCT_DEFAULTS
        });
    }
}

function resetFields() {

    return function (dispatch, getState) {

        dispatch({
            type: ProductTypes.RESET_FIELDS
        });
    }
}

function checkProductValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: ProductTypes.VALIDATE_PRODUCT_FORM,
            data: value
        });
    };
}

export {
    checkProductValidation,
    listProducts,
    addProduct,
    handleProductChange,
    setProductDefaults,
    resetFields,
    showProduct,
    editProduct,
    deleteProduct
}