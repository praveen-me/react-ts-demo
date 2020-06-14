import * as constants from "../types";
import { Contact } from "./index";

export interface AddContact {
  type: constants.ADD_CONTACT;
  contact: Contact;
}
