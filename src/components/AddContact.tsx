import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div``;

const AddContact = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: 0,
  });

  const {
    firstName = "",
    lastName = "",
    dateOfBirth = "",
    phoneNumber = 0,
  } = contact;

  return (
    <div>
      <form>
        <input
          type='text'
          name='firstName'
          value={firstName}
          placeholder='Enter Name'
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          placeholder='Enter Last Name'
        />
        <input
          type='text'
          name='dateOfBirth'
          value={dateOfBirth}
          placeholder='Enter Date Of Birth'
        />
        <input
          type='text'
          name='phoneNumber'
          value={phoneNumber}
          placeholder='Enter Phone Number'
        />
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
