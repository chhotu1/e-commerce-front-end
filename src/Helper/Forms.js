import Regex from "./Regex";
const Forms = {
  validateForm: (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  },

  registerForm: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is Required";
        else if (!Regex.EMAIL_REGEXP.test(value))
          return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value)){
          if(value.length > 60)return "Password must not exceed 40 characters";
          return "Password must have at least 8 characters";
        }
       
        else return "";
      case "phone":
        if (!value) return "Phone is Required";
        else if (!Regex.MOBILE_REGEX.test(value))
          return "Phone number must be 10 digits";
        else return "";
      case "name":
        if (!value) return "Name is Required";
        else if (!Regex.FULL_NAME_REGEX.test(value))
          return "Name should be text";
        else return "";
      default:
        return "";
    }
  },

  loginForm: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is Required";
        else if (!Regex.EMAIL_REGEXP.test(value))
          return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value)){
          if(value.length > 60)return "Password must not exceed 40 characters";
          return "Password must have at least 8 characters";
        }
        else return "";

      default:
        return "";
    }
  },




};
export default Forms;