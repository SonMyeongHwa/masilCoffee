import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Container = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 0 auto 140px auto;
`;

export const StyledSlider = styled(Slider)`
  .slick-arrow {
    font-size: 25px;
    color: #565656;
    height: 25px;
    top: 40%;
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -50px;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    color: gray;

    li button:before {
      color: gray;
    }

    li.slick-active button:before {
      color: gray;
    }
  }

  @media all and (max-width: 1350px) {
    .slick-prev {
      left: -30px;
    }
    .slick-next {
      right: -30px;
    }
  }

  @media all and (max-width: 1023px) {
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 1180px;

  @media all and (min-width: 1024px) and (max-width: 1350px) {
    width: 920px;
  }

  @media all and (max-width: 1023px) {
    width: 80%;
  }
`;

export const MenuBox = styled.div`
  width: 225px !important;
  display: inline-block !important;
  margin: 0 35px;
  white-space: normal;

  @media all and (min-width: 1024px) and (max-width: 1350px) {
    width: 210px !important;
    margin: 0 10px;
  }

  @media all and (max-width: 1023px) {
    float: left;
    clear: both;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
  border-radius: 120px;
  aspect-ratio: 1 / 1;
`;

export const P = styled.p`
  width: 200px;
  margin: 36px auto 30px;
  font-size: 18px;
  text-align: center;
`;
