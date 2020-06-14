import * as ContactsInterfaces from "./contacts.actions.interface";

export interface Contact {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: number;
}

export interface InitialState {
  contacts: Array<Contact>;
}

export type MainActionType = ContactsInterfaces.AddContact;
