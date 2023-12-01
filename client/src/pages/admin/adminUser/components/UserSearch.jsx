import React, { useState } from "react";
import * as Search from "./style/UserSearch.style";

const UserSearch = ({ handleSubmit }) => {
  const [searchUserData, setSearchUserData] = useState({
    name: "",
    nickname: "",
    phone: "",
  });
  const [searchOptions, setSearchOptions] = useState({
    name: false,
    nickname: false,
    phone: false,
  });

  const handleCheckboxChange = (key) => {
    setSearchOptions((prevOptions) => ({
      ...prevOptions,
      [key]: !prevOptions[key],
    }));
  };

  const handleChange = (key, e) => {
    const searchList = { ...searchUserData, [key]: e.target.value };
    console.log("searchList", searchList);
    setSearchUserData(searchList);
  };

  return (
    <Search.Container>
      <Search.Title>회원 검색</Search.Title>
      <Search.Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(searchUserData);
        }}
      >
        <Search.P>
          <Search.Label>이름 :</Search.Label>
          <Search.Checkbox type="checkbox" checked={searchOptions.name} onChange={() => handleCheckboxChange("name")} />
          <Search.Input
            type="text"
            name="name"
            placeholder="홍길동"
            disabled={!searchOptions.name}
            onChange={(e) => handleChange("name", e)}
            required={!searchOptions.name}
          />
        </Search.P>
        <Search.P>
          <Search.Label>닉네임 :</Search.Label>
          <Search.Checkbox type="checkbox" checked={searchOptions.nickname} onChange={() => handleCheckboxChange("nickname")} />
          <Search.Input
            type="text"
            name="nickname"
            placeholder="홍길동"
            disabled={!searchOptions.nickname}
            onChange={(e) => handleChange("nickname", e)}
            required={!searchOptions.nickname}
          />
        </Search.P>
        <Search.P>
          <Search.Label>전화번호 :</Search.Label>
          <Search.Checkbox type="checkbox" checked={searchOptions.phone} onChange={() => handleCheckboxChange("phone")} />
          <Search.Input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="010-0000-0000"
            disabled={!searchOptions.phone}
            onChange={(e) => handleChange("phone", e)}
            required={!searchOptions.phone}
          />
        </Search.P>

        <Search.Submit type="submit">검색하기</Search.Submit>
      </Search.Form>
    </Search.Container>
  );
};

export default UserSearch;
