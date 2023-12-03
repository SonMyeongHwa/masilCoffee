import styled from "styled-components";

export const SlideAnimation = styled.div`
  @keyframes slideOpen {
    from {
      height: 0;
    }
    to {
      height: 90px; /* 원하는 최대 높이로 조절 */
    }
  }

  @keyframes slideClose {
    from {
      height: 90px;
    }
    to {
      height: 0;
    }
  }

  .slide-panel {
    overflow: hidden;
    height: 0; /* 초기 높이 설정 */
  }

  .slide-panel.slide-open {
    animation: slideOpen 1s ease forwards;
  }

  .slide-panel.slide-close {
    animation: slideClose 1s ease forwards;
  }
  > div > div {
    margin: 10px;
  }
  > div > div {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
`;

export const Round = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 25px;
    height: 25px;
    border: 1px solid #878585;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > span {
    padding: 0 30px;
    font-weight: bold;
  }
`;

export const SquareButtonBox = styled.div`
  margin-top: 10px;
`;
