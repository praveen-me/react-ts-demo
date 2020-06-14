import React from "react";
import { ContactPayload } from "../../store/interfaces";
import {
  MainListWrapper,
  ListHeaderContainer,
  ListHeader,
  ListHeaderWrapper,
  ContactListHeader,
} from "./styles";
import Contact from "./Contact";

export interface ContactListProps {
  children?: React.ReactElement;
  contacts: Array<ContactPayload>;
}

const ContactList: React.FunctionComponent<ContactListProps> = (props) => {
  const { contacts } = props;

  return contacts.length > 0 ? (
    <>
      <ContactListHeader>Contact List</ContactListHeader>
      <MainListWrapper>
        <ListHeaderContainer>
          <ListHeaderWrapper>
            <ListHeader>First Name</ListHeader>
          </ListHeaderWrapper>
          <ListHeaderWrapper>
            <ListHeader>Last Name</ListHeader>
          </ListHeaderWrapper>
          <ListHeaderWrapper>
            <ListHeader>Date of Birth</ListHeader>
          </ListHeaderWrapper>
          <ListHeaderWrapper>
            <ListHeader>Phone Number</ListHeader>
          </ListHeaderWrapper>
          <ListHeaderWrapper>
            <ListHeader>Actions</ListHeader>
          </ListHeaderWrapper>
        </ListHeaderContainer>
        {contacts &&
          contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
      </MainListWrapper>
    </>
  ) : (
    <> </>
  );
};

export default ContactList;
