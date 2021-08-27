import { ActionTypes } from "../contants/action-types";
import Axios from "axios";
import accountID from "index.js";
import bundleID from "index.js";
export const setUser = () => {
  return async (dispatch) => {
    const createAccount = await Axios.post(
      "https://fusion.preprod.zeta.in/api/v1/ifi/140793/applications/newIndividual"
    );
    const acc_data = await Axios.get(
      "https://fusion.preprod.zeta.in/api/v1/ifi/140793/applications/{accountID}"
    );
    const bundle_issuing = await Axios.get(
      "https://fusion.preprod.zeta.in/api/v1/bundles/{bundleID}/issueBundle"
    );
    const acc_balance = await Axios.get(
      "https://fusion.preprod.zeta.in/api/v1/ifi/140793/accounts/{accountID}/balance"
    );
    const wallet_transactions = await Axios.get(
      "https://fusion.preprod.zeta.in/api/v1/ifi/140793/accounts/{accountID}/transactions"
    );
    const updateStatus = await Axios.get(
      "https://fusion.preprod.zeta.in/api/v1/ifi/140793/accounts/{accountID}/updateStatus"
    );
    dispatch({
      type: ActionTypes.SET_USERS,
      payload: response.data[0]
    });
  };
};

export const postUser = (user) => {
  return async () => {
    Axios.post("https://apimaking.herokuapp.com/users/", user);
  };
};
