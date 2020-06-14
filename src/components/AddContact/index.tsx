import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  MainContainer,
  MainForm,
  AddContactInput,
  AddNewContactBtn,
  AddContactHeader,
} from "./styles";
import { addContact } from "../../store/actions/contacts.actions";

interface AddContactState {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: number;
}

const AddContact: React.FunctionComponent = () => {
  const initContactValues = (): AddContactState => ({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: 0,
  });

  const [contact, setContact] = useState<AddContactState>(initContactValues());

  const dispatch = useDispatch();

  const {
    firstName = "",
    lastName = "",
    dateOfBirth = "",
    phoneNumber = "",
  } = contact;

  const handleChange = (e: React.SyntheticEvent): void => {
    const { value, name } = e.target as HTMLInputElement;

    setContact((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    dispatch(
      addContact({
        id: Date.now(),
        ...contact,
      })
    );

    setContact(initContactValues());
  };

  return (
    <MainContainer>
      <AddContactHeader>Add New Contact</AddContactHeader>
      <MainForm onSubmit={handleSubmit}>
        <AddContactInput
          type='text'
          name='firstName'
          value={firstName}
          placeholder='Enter Name'
          onChange={handleChange}
        />
        <AddContactInput
          type='text'
          name='lastName'
          value={lastName}
          placeholder='Enter Last Name'
          onChange={handleChange}
        />
        <AddContactInput
          type='date'
          name='dateOfBirth'
          value={dateOfBirth}
          placeholder='Enter Date Of Birth'
          onChange={handleChange}
        />
        <AddContactInput
          type='number'
          name='phoneNumber'
          value={phoneNumber}
          // max={10}
          placeholder='Enter Phone Number'
          onChange={handleChange}
        />
        <AddNewContactBtn type='submit'>Add Contact</AddNewContactBtn>
      </MainForm>
    </MainContainer>
  );
};

export default AddContact;
