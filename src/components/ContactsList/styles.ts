import styled from "styled-components";

export const ContactListHeader = styled.h3`
  text-align: center;
`;

export const MainListWrapper = styled.div`
  margin: 2rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const ListHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const ListHeaderWrapper = styled.div`
  padding: 8px;
  background-color: #e1dede;
  text-align: center;
`;

export const ListHeader = styled.p`
  margin: 0;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  &:nth-child(odd) {
    background-color: #e1dede;
  }
`;

export const ContactFieldWrapper = styled.div`
  padding: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactFieldValue = styled.p`
  margin: 0;
`;

export const ContactActionBtn = styled.button<{ danger?: boolean }>`
  background: ${(props) => (props.danger ? "#bc0202" : "#089af5")};
  border: none;
  border-radius: 3px;
  padding: 8px;
  transition: all ease 0.3s;
  margin: 0 0.5rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.danger ? "#d67474" : "#5bb7f1")};
  }
`;

export const EditField = styled.input`
  padding: 8px;
  border: 2px solid;
`;
