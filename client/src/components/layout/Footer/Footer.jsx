import React from "react";
import { FooterText, Footers, TextBox } from "./Footer.style";

function Footer(props) {
  return (
    <div>
      <Footers location={props.location}>
        <TextBox location={props.location}>
          <FooterText location={props.location}>상호: 마실커피</FooterText>
          <FooterText location={props.location}>
            서울사무소 : 서울 성동구 아차산로17길 48 성수낙낙 2층 엘리스랩
            성수점
          </FooterText>
          <FooterText location={props.location}>
            TEL : 00 - 0000 - 0000
          </FooterText>
          <FooterText location={props.location}>
            사업자등록번호 : 000 - 00 - 0000 | 통신판매업신고증 : 제 0000 - 서울
            - 0000 | 대표 엘리
          </FooterText>
        </TextBox>
      </Footers>
    </div>
  );
}

export default Footer;
