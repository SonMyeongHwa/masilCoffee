import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionGetAllProducts } from "../../redux/action/productAction";
import { getAllProductsMain } from "../../api/product";
import { getAllOptions } from "../../api/orderOption";
import { setOrderDetail } from "../../redux/action/orderDetailAction";
import { bringUser } from "../../redux/action/user/userAction";

import Card from "./components/card/Card";
import { StyledOrder } from "./Order.style";
import Slider from "react-slick";

const Order = () => {
  const dispatch = useDispatch();
  const userRecipe = useSelector((state) => state.user.recipe);
  const user = useSelector((state) => state.user);
  console.log("오더 페이지의 유저", user);
  const orderDetailOptions = useSelector((state) => state.orderDetail);
  const productsFromState = useSelector((state) => state.product.products);

  const [userCustomRecipe, setUserCustomRecipe] = useState([]);

  useEffect(() => {
    const fn = async () => {
      try {
        const products = await getAllProductsMain(); //비동기
        dispatch(actionGetAllProducts(products)); // data뺴니까 됨
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  useEffect(() => {
    if (user.name === "") {
      user.recipe = [];
    }
    if (user.recipe[0] !== undefined && user.recipe[0] !== null && productsFromState.length > 0) {
      console.log("유즈이펙트안에 오더 페이지의 유저", user);
      const getProducts = user.recipe.map((data) => {
        console.log(data, "데이터 유저 레시피의");
        console.log(productsFromState, "프로덱트프롬스테이트");
        const getProductName = productsFromState.filter((product) => product.name === data.name);
        console.log(getProductName, "깊은복사해야되는 데이터");
        const changeCustomRecipe = [...getProductName];
        changeCustomRecipe[0].recipe = data.options;
        console.log("겟 프로덕트네임", getProductName);
        return changeCustomRecipe[0];
      });
      console.log("유저의 겟프로덕트스", getProducts);
      setUserCustomRecipe(getProducts);
    }
  }, [dispatch, user, productsFromState]);
  console.log("유저커스펌레시피", userCustomRecipe);
  // orderDetail api가 Order 페이지 렌더링 시 한 번만 호출하는 최적화 용도
  // api 나오면 수정 필요
  const fetchOrderDetail = async () => {
    try {
      const data = await getAllOptions();
      console.log(data);

      dispatch(setOrderDetail(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrderDetail();
  }, []);

  // 카테고리 필터링 하기
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [filteredProducts, setFilteredProducts] = useState(productsFromState);

  useEffect(() => {
    setFilteredProducts(productsFromState);
  }, [productsFromState]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    let filtered;
    switch (category) {
      case "전체":
        filtered = productsFromState;
        break;
      case "에스프레소":
        filtered = productsFromState.filter((pd) => pd.category === "에스프레소");
        break;
      case "논커피":
        filtered = productsFromState.filter((pd) => pd.category === "논커피");
        break;
      case "스무디":
        filtered = productsFromState.filter((pd) => pd.category === "스무디");
        break;
      case "티":
        filtered = productsFromState.filter((pd) => pd.category === "티");
        break;
      case "에이드":
        filtered = productsFromState.filter((pd) => pd.category === "에이드");
        break;
      case "꿀조합":
        filtered = userCustomRecipe; // 왜 _id?
        break;
      default:
        filtered = productsFromState;
    }
    console.log("오더 페이지의 유저레시피", userRecipe);
    console.log("오더 페이지의 유저커스텀레시피", userCustomRecipe);

    // // 카테고리에 메뉴가 없는 경우 처리
    if (filtered.length === 0) {
      console.log(`${category} 카테고리에는 메뉴가 없습니다.`);
    }

    // console.log("필터드", filtered); // 필터드와 유저레시피의 데이터의 형태 다름 다음에는 api는 완성하고 하자!
    // console.log("유저레시피", userRecipe);
    setFilteredProducts(filtered);
  };

  // 카테고  리 리스트 배열
  console.log("유저레시피", userRecipe);

  // 카테고  리 리스트 배열
  const categories = ["전체", "에스프레소", "논커피", "스무디", "티", "에이드", "꿀조합"];

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
              className={`${index === 0 ? "first-button " : ""}${index === categories.length - 1 ? "last-button " : ""}${
                category === selectedCategory ? "selected-button" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </Slider>
      </div>
      <div className="cards-container">
        {Array.isArray(filteredProducts) && filteredProducts.map((product) => <Card key={product._id} data={product} />)}
      </div>
    </StyledOrder>
  );
};
export default Order;
