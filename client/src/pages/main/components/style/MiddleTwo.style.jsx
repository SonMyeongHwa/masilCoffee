import styled from "styled-components";

export const MiddleImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ImageWrap = styled.div`
  flex: 1;
`;

export const MiddleImage = styled.div`
  height: ${(props) => props.height || "60vh"};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.imagePath || "assets/images/coffee.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 30px 20px;
  box-sizing: border-box;

  @media all and (max-width: 767px) {
    height: 30vh;
  }
`;

export const ContentWrap = styled.div`
  color: white;
`;

export const BigFont = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 10px;

  @media all and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;