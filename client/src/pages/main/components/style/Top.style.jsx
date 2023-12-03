import styled from "styled-components";

export const TopImage = styled.div`
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/images/breakfast.jpg");
  background-size: cover; /* 이미지를 div에 맞게 조절 */
  background-position: center; /* 이미지를 가운데 정렬 */
  background-repeat: no-repeat; /* 배경 이미지를 반복하지 않도록 설정 */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrap = styled.div`
  text-align: center;
  color: white;
`;

export const TopTitle = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media all and (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

export const MiddleTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0 60px;

  @media all and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const NumberWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const BigFont = styled.span`
  font-size: 2.2rem;
  font-weight: 600;

  @media all and (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const RoundBox = styled.div`
  background-color: #231e1c;
  padding: 6px 0;
  width: 220px;
  height: 25px;
  line-height: 25px;
  border-radius: 30px;
  margin: 15px 0;
  font-size: 15px;

  @media all and (min-width: 767px) {
    &:not(:first-child) {
      margin: 10px 0.7rem 0;
    }
  }
`;
