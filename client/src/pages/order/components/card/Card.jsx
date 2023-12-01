import React, { useState } from "react";

import Button from "../../../../components/ui/button/Button";
import Modal from "../../components/modal/Modal";
import { StyledCard, StyledText, StyledImage, StyledButtonText } from "./Card.style";
import ModalContents from "../modalcontents/ModalContents";

const Card = ({ data }) => {
  // 카드 클릭 시 추천 꿀 조합 텍스트와 주문하기 버튼 나옴
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => {
    setClickMenu(!clickMenu);
  };
  // 모달 상태 변경
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="card">
      <StyledCard onClick={handleClickMenu} $clickMenu={clickMenu}>
        {/* 클릭 시 이미지와 텍스트 표시 */}
        {clickMenu && (
          <>
            <StyledButtonText>
              <div>
                <b>추천 꿀 조합</b>
                <p>{data.recipe}</p>
              </div>

              <Button type="white" text={"주문하기"} onClick={openModal} />
            </StyledButtonText>
          </>
        )}
        {/* 이미지 가져오기 */}

        <StyledImage src={data.image_url} alt={data.name} $clickMenu={clickMenu}></StyledImage>
      </StyledCard>
      <StyledText>
        {isModalOpen && (
          <Modal openModal={openModal} closeModal={closeModal}>
            <ModalContents data={data} />
          </Modal>
        )}

        <b>{data.name}</b>
        <p>{data.info}</p>
        <p>칼로리 : {data.kcal}</p>
      </StyledText>
    </div>
  );
};

export default Card;
