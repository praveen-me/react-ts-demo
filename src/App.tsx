import React from "react";
import "./App.css";
import AddContact from "./components/AddContact/";
import { MainWrapper } from "./styles";

function App() {
  return (
    <MainWrapper className='App'>
      <AddContact />
    </MainWrapper>
  );
}

export default App;
