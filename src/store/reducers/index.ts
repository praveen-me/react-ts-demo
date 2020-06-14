import { InitialState } from "../interfaces/index";

const initState: InitialState = {
  contacts: [],
};

const rootReducer = (state = initState, action: { type?: string }) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
