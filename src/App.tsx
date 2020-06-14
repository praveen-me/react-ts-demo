import React from "react";
import { useSelector } from "react-redux";
import AddContact from "./components/AddContact/";
import { MainWrapper } from "./styles";
import { InitialState } from "./store/interfaces";
import ContactList from "./components/ContactsList";

const App: React.FunctionComponent = () => {
  const { contacts } = useSelector((state: InitialState) => state);

  return (
    <MainWrapper className='App'>
      <AddContact />
      <ContactList contacts={contacts} />
    </MainWrapper>
  );
};

export default App;
