import React, { useState } from "react";
import Card from "./components/card/Card";

import { StyledOrder } from "./Order.style";
import mockupData from "./components/data/mockupdata.json";
import Slider from "react-slick";

const Order = ({ children }) => {
  // 카테고리 필터링 하기
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [filteredProducts, setFilteredProducts] = useState(mockupData.products);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    let filtered;
    switch (category) {
      case "전체":
        filtered = mockupData.products;
        break;
      case "에스프레소":
        filtered = mockupData.products.filter((pd) => pd.id >= 1 && pd.id <= 9);
        break;
      case "논커피":
        filtered = mockupData.products.filter(
          (pd) => pd.id >= 10 && pd.id <= 16
        );
        break;
      case "스무디":
        filtered = mockupData.products.filter(
          (pd) => pd.id >= 17 && pd.id <= 22
        );
        break;
      case "티":
        filtered = mockupData.products.filter(
          (pd) => pd.id >= 23 && pd.id <= 30
        );
        break;
      case "에이드":
        filtered = mockupData.products.filter(
          (pd) => pd.id >= 31 && pd.id <= 34
        );
        break;
      case "즐겨찾기":
        filtered = [];
        break;

      default:
        filtered = mockupData.products;
    }

    setFilteredProducts(filtered);
  };

  // 카테고리 리스트 배열
  const categories = [
    "전체",
    "에스프레소",
    "논커피",
    "스무디",
    "티",
    "에이드",
    "즐겨찾기",
  ];

  // 슬라이드 설정
  const settings = {
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledOrder>
      <div className="button">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`${index === 0 ? "first-button " : ""}${
                index === categories.length - 1 ? "last-button " : ""
              }${category === selectedCategory ? "selected-button" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </Slider>
      </div>
      <div className="cards-container">
        {filteredProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </StyledOrder>
  );
};
export default Order;
