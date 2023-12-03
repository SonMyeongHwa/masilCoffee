import React, { useState } from "react";
import * as Search from "./style/UserSearch.style";

const UserSearch = () => {
  const [isNameChecked, setIsNameChecked] = useState(false);
  const [isPhoneChecked, setIsPhoneChecked] = useState(false);

  const handleNameCheckboxChange = (e) => {
    setIsNameChecked(e.target.checked);
  };

  const handlePhoneCheckboxChange = (e) => {
    setIsPhoneChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼 데이터 처리 로직 추가
  };

  return (
    <Search.Container>
      <Search.Title>회원 검색</Search.Title>
      <Search.Form onSubmit={handleSubmit}>
        <Search.P>
          <Search.Label>이름 :</Search.Label>
          <Search.Checkbox type="checkbox" checked={isNameChecked} onChange={handleNameCheckboxChange} />
          <Search.Input type="text" name="name" placeholder="홍길동" disabled={!isNameChecked} required={!isNameChecked} />
        </Search.P>
        <Search.P>
          <Search.Label>전화번호 :</Search.Label>
          <Search.Checkbox
            type="checkbox"
            // name="phone"
            // id="enablePhoneInput"
            checked={isPhoneChecked}
            onChange={handlePhoneCheckboxChange}
          />
          <Search.Input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="010-0000-0000"
            disabled={!isPhoneChecked}
            required={isPhoneChecked}
          />
        </Search.P>

        <Search.Submit type="submit" onClick={handleSubmit}>
          검색하기
        </Search.Submit>
      </Search.Form>
    </Search.Container>
  );
};

export default UserSearch;
