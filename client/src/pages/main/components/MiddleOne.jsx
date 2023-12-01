import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as MiddleMenu from "./style/MiddleOne.style";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { actionGetAllProducts } from "../../../redux/action/productAction";
import { getAllProductsMain } from "../../../api/product";

const MiddleOne = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product.products);
  const oddIndexNumbers = allProduct.slice(0, 32).filter((number, index) => index % 2 !== 0);
  const menuImgArr = oddIndexNumbers.map((product) => {
    return {
      img: product.image_url,
      name: product.name,
    };
  });

  useEffect(() => {
    const fn = async () => {
      try {
        const products = await getAllProductsMain();
        dispatch(actionGetAllProducts(products));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <FaArrowLeftLong />,
    nextArrow: <FaArrowRightLong />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MiddleMenu.Container>
      <MiddleMenu.Title>BEST</MiddleMenu.Title>
      <MiddleMenu.Content>
        <MiddleMenu.StyledSlider {...settings}>
          {menuImgArr.map(({ img, name }, i) => (
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

export default MiddleOne;
