import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddContact from "./components/AddContact/";

import { MainWrapper } from "./styles";
import { InitialState } from "./store/interfaces";
import ContactList from "./components/ContactsList";
import Search from "./components/Search/";

const App: React.FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState("");

  const { contacts } = useSelector((state: InitialState) => state);

  const handleSearchChange = (e: React.SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearchValue(value);
  };

  let searchedContacts = contacts;

  if (searchValue) {
    const query = new RegExp(searchValue, "ig");
    searchedContacts = searchedContacts.filter(
      (c) => query.test(c.firstName) || query.test(c.lastName)
    );
  }

  return (
    <MainWrapper className='App'>
      <AddContact />
      {contacts.length > 0 && (
        <Search searchValue={searchValue} handleSearch={handleSearchChange} />
      )}
      <ContactList contacts={searchedContacts} />
    </MainWrapper>
  );
};

export default App;
