import { InitialState, MainActionType } from "../interfaces/index";
import * as constants from "../types";

const initState: InitialState = {
  contacts: [],
};

const rootReducer = (state = initState, action: MainActionType) => {
  switch (action.type) {
    case constants.ADD_CONTACT: {
      const { contact } = action;

      return {
        ...state,
        contacts: [...state.contacts, contact],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
