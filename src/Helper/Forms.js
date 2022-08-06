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
        else if (!Regex.PASSWORD_REGEX.test(value)) {
          if (value.length > 60) return "Password must not exceed 40 characters";
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
        else if (!Regex.PASSWORD_REGEX.test(value)) {
          if (value.length > 60) return "Password must not exceed 40 characters";
          return "Password must have at least 8 characters";
        }
        else return "";

      default:
        return "";
    }
  },

  categoryForm: (name, value) => {
    switch (name) {
      case "title":
        if (!value) return "Title is Required";
        else return "";
      default:
        return "";
    }
  },

  productForm: (name, value) => {
    switch (name) {
      case "title":
        if (!value) return "Title is Required";
        else return "";
      default:
        return "";
    }
  },

  userForm: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "The email field is required";
        else if (!Regex.EMAIL_REGEXP.test(value))
          return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "The password field is required";
        else if (!Regex.PASSWORD_REGEX.test(value)) {
          if (value.length > 60) return "Password must not exceed 40 characters";
          return "Password must have at least 8 characters";
        }
        else return "";
      case "phone":
        if (!value) return "The phone field is required";
        else if (!Regex.MOBILE_REGEX.test(value))
          return "Phone number must be 10 digits";
        else return "";
      case "name":
        if (!value) return "The name field is required";
        else if (!Regex.FULL_NAME_REGEX.test(value))
          return "Name should be text";
        else return "";
      case "role":
        if (!value) return "The role field is required";
        else return "";
      case "status":
        if (!value) return "The status field is required";
        else return "";
      default:
        return "";
    }
  },
  leaveForm: (name, value) => {
    switch (name) {
      case "title":
        if (!value) return "The title field is required";
      case "start_date":
        if (!value) return "The start_date field is required";
        else return "";
      case "end_date":
        if (!value) return "The end_date field is required";
        else return "";
      case "leave_type":
        if (!value) return "The leave_type field is required";
        else return "";
      default:
        return "";
    }
  },
  notificationForm: (name, value) => {
    switch (name) {
      case "title":
        if (!value) return "The title field is required";
      default:
        return "";
    }
  },

};
export default Forms;
