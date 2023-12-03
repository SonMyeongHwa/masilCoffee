import styled from "styled-components";

export const StyledOrder = styled.div`
  max-width: 1100px;
  margin: 100px auto;
  box-sizing: border-box;

  /* 슬라이더 slick */
  .slick-slider {
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    .slick-list {
      overflow: initial;
    }
    .slick-track {
      max-width: 1100px;
      display: flex;
      align-items: center;
    }
    .slick-slide > div {
      display: flex;

      button {
        padding: 20px 30px;

        box-sizing: border-box;
        border: 1px solid #878585;
        cursor: pointer;
        background-color: white;
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
    justify-content: space-between;
    min-height: 400px;
    overflow-y: auto;
  }
  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .card {
    margin-bottom: 20px;
  }

  /* 모바일 환경을 위한 미디어 쿼리 */
  @media (max-width: 768px) {
    .card {
      width: calc(50% - 10px);
    }
  }
  /* 탭을 위한 미디어 쿼리 */
  @media (max-width: 480px) {
    .card {
      width: 100%;
    }
  }
  /* 데스크톱 환경을 위한 미디어 쿼리 */
  @media (min-width: 1920px) {
    .card {
      width: calc(33.33% - 10px); //
    }
  }
`;
