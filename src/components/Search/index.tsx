import React from "react";
import { SearchContainer, SearchInput } from "./styles";

interface SearchProps {
  searchValue: string;
  handleSearch: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

const Search: React.FunctionComponent<SearchProps> = (props) => {
  const { handleSearch, searchValue } = props;

  return (
    <SearchContainer>
      <SearchInput
        placeholder='Type to search'
        type='text'
        onChange={handleSearch}
        value={searchValue}
      />
    </SearchContainer>
  );
};

export default Search;
