import React from "react";
import * as MiddleMenu from "./style/MiddleOne.style";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const MiddleOne = ({ imgArr }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <FaArrowLeftLong />,
    nextArrow: <FaArrowRightLong />,
  };

  return (
    <MiddleMenu.Container>
      <MiddleMenu.Title>MENU</MiddleMenu.Title>
      <MiddleMenu.Content>
        <MiddleMenu.StyledSlider {...settings}>
          {imgArr.map(({ img, name }, i) => (
            <MiddleMenu.MenuBox key={i + name}>
              <MiddleMenu.Img src={img} alt={name} />
              <MiddleMenu.P>{name}</MiddleMenu.P>
            </MiddleMenu.MenuBox>
          ))}
        </MiddleMenu.StyledSlider>
      </MiddleMenu.Content>
    </MiddleMenu.Container>
  );
};

MiddleOne.defaultProps = {
  imgArr: [
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
    {
      img: "/assets/images/test_coffee.jpg",
      name: "핫아메리카노",
    },
  ],
};

export default MiddleOne;
