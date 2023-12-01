import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NotFoundForm from "./NotFoundForm";

import Container from "../../components/ui/container/Container";
import Card from "../../components/ui/card/Card";
import { MsgCard } from "./NotFound.style";

const error_msg = {
  404: {
    msg: "Not Found",
    description1: "요청하신 페이지를 찾을 수 없습니다.",
    description2: "페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.",
    description3: "입력하신 주소가 정확한지 다시 한번 확인 해주세요.",
  },
  400: {
    msg: "WebPage Error",
    description1: "웹 페이지에 문제가 있습니다.",
    description2: "불편을 드려 죄송합니다.",
    description3: "빠른 시일에 고치도록 하겠습니다.",
  },
  500: {
    msg: "WebServer Error",
    description1: "웹 서버에 문제가 있습니다.",
    description2: "불편을 드려 죄송합니다.",
    description3: "빠른 시일에 고치도록 하겠습니다.",
  },
};

const NotFound = (props) => {
  const [errorMsg, setErrorMsg] = useState(0);
  const errorcode = props.code;
  const nav = useNavigate();

  const settingError = (errorcode) => {
    switch (errorcode) {
      case 404:
        setErrorMsg(error_msg[404]);
        break;
      case 400:
        setErrorMsg(error_msg[400]);
        break;
      case 500:
        setErrorMsg(error_msg[500]);
        break;

      default:
        setErrorMsg(error_msg[404]);
    }
  };

  useEffect(() => {
    settingError(errorcode);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        nav("/", { replace: true });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [nav]);

  return (
    <div>
      <Container>
        <Card>
          <MsgCard>
            <NotFoundForm errorDescription={errorMsg} />
          </MsgCard>
        </Card>
      </Container>
    </div>
  );
};

export default NotFound;
