import * as constants from "../types";
import { ContactPayload } from "./index";

export interface AddContact {
  type: constants.ADD_CONTACT;
  contact: ContactPayload;
}

export interface DeleteContact {
  type: constants.DELETE_CONTACT;
  id: number;
}
