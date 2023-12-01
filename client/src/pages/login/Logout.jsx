import React from "react";

import Title from "../../components/ui/title/Title.jsx";
import Container from "../../components/ui/container/Container.jsx";
import Card from "../../components/ui/card/Card.jsx";
import Button from "../../components/ui/button/SquareButton.jsx";
import Contents from "../../components/ui/contents/Contents.jsx";

import { ROUTES } from "../../router/Routes.jsx";
import { axiosPostLogout } from "../../api/login/login.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionLogout } from "../../redux/action/login/loginAction.jsx";
import { removeUser } from "../../redux/action/user/userAction.jsx";
import {  useSelector } from "react-redux/es/hooks/useSelector.js";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.email)
  

  const axiosLogout = async (userEmail) => {
    try {
    const logout = await axiosPostLogout(userEmail);
    console.log("logout", logout)
    console.log("logout user", user)
    
    return logout
    } catch (err) {
      console.error("로그아웃 폼 axios 에러:", err)
    }   
  }

  const handleLogout = () => {
    axiosLogout(user);

    localStorage.removeItem("token");
    dispatch(actionLogout());
    dispatch(removeUser())

    window.addEventListener('popstate', () => {
      window.history.pushState(null, null, ROUTES.MAIN.path);
    });
  
    window.location.replace(ROUTES.MAIN.path);
  };

  return (
    <div>
      <Container>
        <Title>정말 로그아웃 하시겠습니까?</Title>
        <Card>
          <Contents>
            <Button type="red" onClick={handleLogout} text="로그아웃" />
          </Contents>
        </Card>
      </Container>
    </div>
  );
}

export default Logout;
