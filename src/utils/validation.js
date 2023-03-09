export const validationUtility = {
  text(s, l = 0) {
    if (s !== null && s !== '' && s !== undefined && s.trim() !== '' && s.length > l) {
      return true;
    }
    return false;
  },
  email(data) {
    var flag = false;
    if (data.length > 0) {
      if (
        data.match(
          /^[a-z0-9._%+-]{1,64}@(?:[a-z0-9-]{1,63}\.){1,4}[a-z]{2,10}$/
        )
      ) {
        flag = true;
      }
    }
    return flag;
  },
  mobile(data) {
    let flag = false;
    if (data.length > 0) {
      if (data.match(/^[+0-9\s()-]+$/) && data.length >= 8 && data.length <= 17) {
        flag = true;
      }
    }
    return flag;
  },

  nameFields(s, l = 0) {
    //Only Take charecter
    if (s !== null && s !== '' && s !== undefined && s.length > l && s.trim().match(/^[a-zA-Z]*$/)) { //Only phone ---> [0-9-+()@!#$%^&*~<>?]
      return true;
    }
    return false;
  },

  spaceCheck(s, l = 0) {
    if (s !== null && s !== '' && s !== undefined && s.length > l && s.trim().match(/^[a-zA-Z]*$/)) {
      return true;
    }
    return false;
  },
}


export const validationReducer = (state, action) => {
  switch (action.type) {
    case 'VALIDATECHECK': {
      const target = action.payload;
      return {
        ...state,
        [target.name]: target.value,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const validationAction = (name, value) => {
  return {
    type: 'VALIDATECHECK',
    payload: { name, value }
  }
}