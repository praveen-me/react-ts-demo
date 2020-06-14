import styled from "styled-components";

export const AddContactHeader = styled.h3`
  text-align: center;
`;

export const MainContainer = styled.div`
  margin: 2rem auto;
  max-width: 350px;
  width: 100%;
`;

export const MainForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
`;

export const AddContactInput = styled.input`
  padding: 0.8rem 1rem;
  border: none;
  background-color: #ddd;
  border-radius: 5px;
`;

export const AddNewContactBtn = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #3c3c3c;
  color: #fff;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    color: #3c3c3c;
    background-color: #ddd;
    border: 2px solid #3c3c3c;
  }
`;
