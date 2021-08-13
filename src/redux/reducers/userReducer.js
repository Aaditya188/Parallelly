import { ActionTypes } from "../contants/action-types";
const initialState = {
  user: []
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, user: payload };
    default:
      return state;
  }
};
