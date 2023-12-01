import styled from "styled-components";

export const StyledOrder = styled.div`
  max-width: 1106px;
  width: 100%;
  margin: 100px auto;
  font-family: "Noto Sans", sans-serif; // Noto Sans 폰트 적용
  /* box-sizing: border-box; */

  /* 슬라이더 slick */
  .slick-slider {
    max-width: 1106px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    .slick-list {
      overflow: initial;
    }
    .slick-track {
      width: 1106px;
      display: flex;
      align-items: center;
    }
    .slick-slide > div {
      width: 100%;
      display: flex;

      button {
        padding: 20px 30px;
        border: 1px solid #d9d9d9;
        border-right: none;
        cursor: pointer;
        background-color: white;
        font-size: 14px;
      }
      // 첫 번째 버튼 스타일
      .first-button {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
      }

      // 마지막 버튼 스타일
      .last-button {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border-right: 1px solid #d9d9d9;
      }
      .selected-button {
        background-color: #650818;
        color: #f5f5f5;
      }
    }
  }

  .button {
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-bottom: 50px;
  }

  .cards-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    min-height: 400px;
    overflow-y: auto;

    .card {
      width: calc(33.3% - 10px);
      margin-bottom: 20px;
    }
    /* 모바일 환경을 위한 미디어 쿼리 */
    @media (max-width: 998px) {
      .card {
        width: calc(50% - 10px);
      }
    }
    /* 탭을 위한 미디어 쿼리 */
    @media (max-width: 640px) {
      .card {
        width: 100%;
      }
    }
  }
  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
`;
