export const unameRedcer = (state, action) => {
  if (action.type === "uNameOnEmptySubmit") {
    return {
      ...state,
      isValidOnBlur: false,
    };
  }
  if (action.type === "uNameOnStroke") {
    if (action.val.length < 5) {
      return {
        ...state,
        uname: action.val,
        isValid: false,
        isValidOnBlur: true,
      };
    } else {
      return {
        ...state,
        uname: action.val,
        isValid: true,
        isValidOnBlur: true,
      };
    }
  } else if (action.type === "uNameOnBlur") {
    if (state.uname === "") {
      return {
        ...state,
        isValid: true,
        isValidOnBlur: false,
      };
    } else if (state.uname.length < 5) {
      return {
        ...state,
        uname: action.val,
        isValid: false,
        isValidOnBlur: true,
      };
    } else {
      return {
        ...state,
        isValid: true,
        isValidOnBlur: true,
      };
    }
  }
};
export const addressRedcer = (state, action) => {
  if (action.type === "addressOnEmptySubmit") {
    return {
      ...state,
      isValidOnBlur: false,
    };
  }

  if (action.type === "streetAddressOnStroke") {
    if (state.streetAddress.length < 10) {
      return {
        ...state,
        streetAddress: action.val,
        isValid: false,
        isValidOnBlur: true,
      };
    } else {
      return {
        ...state,
        streetAddress: action.val,
        isValid: true,
        isValidOnBlur: true,
      };
    }
  } else if (action.type === "streetAddressOnBlur") {
    if (state.streetAddress === "") {
      return {
        ...state,
        isValid: true,
        isValidOnBlur: false,
      };
    } else if (state.streetAddress.length < 10) {
      return {
        ...state,
        streetAddress: action.val,
        isValid: false,
        isValidOnBlur: true,
      };
    } else {
      return {
        ...state,
        isValid: true,
        isValidOnBlur: true,
      };
    }
  }
};
export const postalRedcer = (state, action) => {};
export const emailRedcer = (state, action) => {};
