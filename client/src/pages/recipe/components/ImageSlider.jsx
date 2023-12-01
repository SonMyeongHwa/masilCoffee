import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //navigate 막기
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <ImageWrap onClick={stopPropagation}>
      <StyledSlider {...settings}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt="" onClick={stopPropagation} />
        ))}
      </StyledSlider>
    </ImageWrap>
  );
}

export default ImageSlider;

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 5px;
  }

  .slick-next {
    right: 15px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    /* opacity: 0.5; */
    color: #d9d9d9;
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
`;

const ImageWrap = styled.div`
  width: 70%;
  margin: 0 auto;
  cursor: auto;

  @media all and (max-width: 767px) {
    width: 90%;
  }
`;

const Image = styled.img`
  height: auto; /* 이미지의 높이를 자동으로 조정하여 가로세로 비율을 유지함 */
  aspect-ratio: 1 / 1; /* 이미지의 종횡비를 1:1로 설정하여 정사각형으로 만듦 */
`;