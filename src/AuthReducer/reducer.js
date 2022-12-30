import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionType";

let initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        token: payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
