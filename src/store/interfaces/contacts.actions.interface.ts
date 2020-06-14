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

export interface EditContactPayload {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: number;
}

export interface EditContact {
  type: constants.EDIT_CONTACT;
  id: number;
  userData: EditContactPayload;
}
