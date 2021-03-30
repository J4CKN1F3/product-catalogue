import React, { useState } from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { search } from "../../../lib/redux/productsSlice";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setKeyword(e.target.value);
    dispatch(search(e.target.value));
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<IoSearch color="gray" />}
        />
        <Input
          type="text"
          bg="white"
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
        />
      </InputGroup>
    </>
  );
}

export default SearchBar;
