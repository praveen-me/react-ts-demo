import { AddContact } from "../interfaces/contacts.actions.interface";
import { Contact } from "../interfaces/index";
import * as constants from "../types";

export const addContact = (payload: Contact): AddContact => ({
  type: constants.ADD_CONTACT,
  contact: payload,
});
