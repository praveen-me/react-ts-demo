import * as ContactsInterfaces from "./contacts.actions.interface";

export interface ContactPayload {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: number;
}

export interface InitialState {
  contacts: Array<ContactPayload>;
}

export type MainActionType =
  | ContactsInterfaces.AddContact
  | ContactsInterfaces.DeleteContact
  | ContactsInterfaces.EditContact;
