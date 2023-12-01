import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Modal from "./style/UserModal.style";
import { TiDelete } from "react-icons/ti";
import { updateUser } from "../../../../redux/action/user/usersAction";
import { axiosPatchAdmin } from "../../../../api/user/user";

const UserModal = ({ closeModal, modifyUser }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    nickname: "",
    createdAt: "",
  });

  useEffect(() => {
    if (modifyUser) {
      setUserInfo({ ...modifyUser });
    } else {
      setUserInfo({
        name: "",
        email: "",
        phone: "",
        nickname: "",
        createdAt: "",
      });
    }
  }, [modifyUser]);

  const handleChange = (key, e) => {
    const updatedUserInfo = { ...userInfo, [key]: e.target.value };
    setUserInfo(updatedUserInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userInfo", userInfo);
    const updatedData = {
      token: token,
      userId: userInfo._id,
      newName: userInfo.name,
      newNickname: userInfo.nickname,
      newPhone: userInfo.phone,
    };
    console.log("tokendd", updatedData);
    const fn = async () => {
      if (modifyUser) {
        try {
          const updatedUser = await axiosPatchAdmin(
            updatedData.token,
            updatedData.userId,
            updatedData.newName,
            updatedData.newNickname,
            updatedData.newPhone
          );
          console.log("updatedProduct", updatedUser);
          dispatch(updateUser(updatedUser));
        } catch (error) {
          console.error("Failed to update product", error);
        }
      }
    };
    fn();

    closeModal();
  };

  return (
    <Modal.ModalBackground>
      <Modal.ModalBox>
        <Modal.Title>
          <p>회원 정보 수정</p>
          <TiDelete className="cancelIcon" onClick={closeModal} />
        </Modal.Title>
        <Modal.Form onSubmit={handleSubmit}>
          <Modal.P>
            <Modal.Label>이름 :</Modal.Label>
            <Modal.Input type="text" name="name" defaultValue={userInfo.name} onChange={(e) => handleChange("name", e)} required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>전화번호 :</Modal.Label>
            <Modal.Input
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              defaultValue={userInfo.phone}
              onChange={(e) => handleChange("phone", e)}
              required
            />
          </Modal.P>
          <Modal.P>
            <Modal.Label>닉네임 :</Modal.Label>
            <Modal.Input type="text" name="nickname" defaultValue={userInfo.nickname} onChange={(e) => handleChange("nickname", e)} required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>이메일 :</Modal.Label>
            <Modal.Input type="email" name="email" defaultValue={userInfo.email} onChange={(e) => handleChange("email", e)} disabled required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>가입일 :</Modal.Label>
            <Modal.Input type="text" name="createdAt" defaultValue={userInfo.createdAt} disabled required />
          </Modal.P>
          <Modal.Submit type="submit" onClick={handleSubmit}>
            제출하기
          </Modal.Submit>
        </Modal.Form>
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

export default UserModal;
