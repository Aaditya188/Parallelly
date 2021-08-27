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

/*
export const saveNotes = () => async (dispatch, getState) => {
  const notes = getState().notes;
  await fetch("http://localhost:4000/notes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(notes)
  });
  alert("Success");
};
*/
