import { ActionTypes } from "../contants/action-types";
import Axios from "axios";
export const setUser = () => {
  return async (dispatch) => {
    const response = await Axios.get("https://apimaking.herokuapp.com/users");
    dispatch({
      type: ActionTypes.SET_USERS,
      payload: response.data[0]
    });
  };
};

export const postUser = (user) => {
  return async () => {
    Axios.post(
      "https://apimaking.herokuapp.com/users/61274ddf4b35c800044e0b89s",
      user
    );
  };
};
