import {
  AddContact,
  DeleteContact,
  EditContact,
  EditContactPayload,
} from "../interfaces/contacts.actions.interface";
import { ContactPayload } from "../interfaces/index";
import * as constants from "../types";

export const addContact = (payload: ContactPayload): AddContact => ({
  type: constants.ADD_CONTACT,
  contact: payload,
});

export const deleteContact = (id: number): DeleteContact => ({
  type: constants.DELETE_CONTACT,
  id: id,
});

export const editContact = (
  id: number,
  userData: EditContactPayload
): EditContact => ({
  type: constants.EDIT_CONTACT,
  id,
  userData,
});
