import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ContactContainer,
  ContactFieldWrapper,
  ContactFieldValue,
  ContactActionBtn,
  EditField,
} from "./styles";
import { ContactPayload } from "../../store/interfaces";
import {
  deleteContact,
  editContact,
} from "../../store/actions/contacts.actions";

interface ContactProps {
  children?: React.ReactElement;
  contact: ContactPayload;
}

interface EditContactState {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: number;
}

const Contact: React.FunctionComponent<ContactProps> = (props) => {
  const { contact } = props;
  const { firstName, lastName, phoneNumber, dateOfBirth, id } = contact;

  const [editMode, setEditMode] = useState(false);
  const [contactDetails, setContactDetails] = useState<EditContactState>({
    firstName,
    lastName,
    dateOfBirth,
    phoneNumber,
  });
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e: React.SyntheticEvent): void => {
    const { value, name } = e.target as HTMLInputElement;

    setContactDetails((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    dispatch(editContact(id, contactDetails));
    toggleEditMode();
  };

  return (
    <ContactContainer>
      <ContactFieldWrapper>
        {editMode ? (
          <EditField
            onChange={handleChange}
            type='text'
            name='firstName'
            value={contactDetails.firstName}
          />
        ) : (
          <ContactFieldValue>{firstName}</ContactFieldValue>
        )}
      </ContactFieldWrapper>
      <ContactFieldWrapper>
        {editMode ? (
          <EditField
            onChange={handleChange}
            type='text'
            name='lastName'
            value={contactDetails.lastName}
          />
        ) : (
          <ContactFieldValue>{lastName}</ContactFieldValue>
        )}
      </ContactFieldWrapper>
      <ContactFieldWrapper>
        {editMode ? (
          <EditField
            onChange={handleChange}
            type='date'
            name='dateOfBirth'
            value={contactDetails.dateOfBirth}
          />
        ) : (
          <ContactFieldValue>{dateOfBirth}</ContactFieldValue>
        )}
      </ContactFieldWrapper>
      <ContactFieldWrapper>
        {editMode ? (
          <EditField
            onChange={handleChange}
            type='number'
            name='phoneNumber'
            value={contactDetails.phoneNumber}
          />
        ) : (
          <ContactFieldValue>{phoneNumber}</ContactFieldValue>
        )}
      </ContactFieldWrapper>
      <ContactFieldWrapper>
        {editMode ? (
          <ContactActionBtn onClick={handleEdit}>Save</ContactActionBtn>
        ) : (
          <ContactActionBtn onClick={toggleEditMode}>Edit</ContactActionBtn>
        )}
        <ContactActionBtn danger onClick={handleDelete}>
          Delete
        </ContactActionBtn>
      </ContactFieldWrapper>
    </ContactContainer>
  );
};

export default Contact;
