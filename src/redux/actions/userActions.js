import { ActionTypes } from "../contants/action-types";
export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: user
  };
};
