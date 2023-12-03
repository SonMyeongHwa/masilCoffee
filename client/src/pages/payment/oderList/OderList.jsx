// import { postRecipe } from "../../../redux/action/user/userAction";
import SquareButton from "../../../components/ui/button/SquareButton";
import { useSelector, useDispatch } from "react-redux";
import { axiosPatchUserRecipe } from "../../../api/user/user";
import { postRecipe } from "../../../redux/action/user/userAction";

import {
  StyledOrderList,
  StyledOrderListMenu,
  StyledOrderListMenuBox,
  StyledAmountPayment,
  StyledOrderListMenuText,
  StyledOrderListMednuRequest,
} from "./OderList.style";

function OderList() {
  const payment = useSelector((state) => state.payment);
  const paymentList = useSelector((state) => state.payment.payments);
  const user = useSelector((state) => state.user);
  console.log("페이먼트리스트", paymentList);

  // console.log("오더 네임", payment);

  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (window.confirm("나만의 꿀조합 넣기!")) {
      const selectedRecipeIndex = payment.orders[index];
      const orderDetailList = paymentList[paymentList.length - 1].orderDetail;
      console.log("오더 디테일 리스트", orderDetailList);
      const selectedRecipe = orderDetailList.filter((data, i) => i === index);
      const postUserRecipeData = selectedRecipe.map((data) => {
        return {
          name: data.name,
          options: data.options,
        };
      });
      console.log("엑시오스에 들어갈 유저레시피 정보", postUserRecipeData);
      console.log("유저의 기존 레시피 정보", user.recipe);
      const joinRecipe = user.recipe[0] !== undefined && user.recipe[0] !== null ? [...user.recipe, ...postUserRecipeData] : postUserRecipeData;
      console.log("서버에 들어갈 유저레시피 합쳐진 정보", joinRecipe);
      const fn = async () => {
        try {
          const addUserRecipe = await axiosPatchUserRecipe(joinRecipe);
          dispatch(postRecipe(addUserRecipe.customRecipe));
        } catch (err) {
          console.log("axiosPatchUser-err", err);
        }
      };
      fn();
      console.log("셀렉티드 레시피", selectedRecipe);

      // console.log("인덱스", index);
      // console.log('페이먼트 오더스', payment.orders)
      // console.log('페이먼트 오더스 인덱스', payment.orders[index])
      // 문제점 1. 꿀조합이 내가 지금까지 시켰던 모든 주문들이 보여지는 용도면 딱히 이쪽은 필요 없음
      // 문제점 2. 모든 주문들이 다 보여지면 꿀조합의 의미가 퇴색 됨 (내가 원하는 조합만 저장할 수 있어야 됨)
      // console.log("페이먼트.오더스[0].오더디테일", payment.orders[0]);
    }
  };
  // console.log("나만의 꿀조합 넣기", handleClick());
  return (
    <>
      <StyledOrderList>
        <h2>주문내역</h2>

        <i></i>

        <StyledOrderListMenu>
          {payment.orders.length > 0 &&
            payment.orders.map((order, index) => (
              <>
                <StyledOrderListMenuBox>
                  <div>
                    <b>{order.name}</b>
                    <StyledOrderListMenuText>
                      {order.shot
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span key={item.name}>{`샷 : ${item.name} ${item.quantity}`}</span>
                        ))}
                      {/* 여기 syrups => syrup 변경 */}
                      {order.syrup
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span key={item.name}>{`시럽 : ${item.name} ${item.quantity}`}</span>
                        ))}
                      {order.whipping
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`휘핑 : ${item.name}`}</span>
                        ))}
                      {/* 여기 ice => iceAmount 변경 */}
                      {order.iceAmount
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`얼음 : ${item.name}`}</span>
                        ))}
                      {order.drizzle
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`드리즐 : ${item.name}`}</span>
                        ))}
                      {order.milk
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`우유 : ${item.name}`}</span>
                        ))}
                    </StyledOrderListMenuText>
                  </div>
                  <div>{order.quantity}개</div>
                  <div>{order.totalPrice}원</div>
                  <SquareButton onClick={() => handleClick(index)} text={"나만의 꿀조합"} type={"red"} />
                </StyledOrderListMenuBox>

                <StyledOrderListMenuBox>
                  <StyledOrderListMednuRequest>주문 요청사항 : {payment.orderRequest}</StyledOrderListMednuRequest>
                </StyledOrderListMenuBox>

                <StyledOrderListMenuBox>
                  <StyledOrderListMednuRequest>수령방법 : {payment.deliveryMethod}</StyledOrderListMednuRequest>
                </StyledOrderListMenuBox>
                <i></i>
              </>
            ))}
        </StyledOrderListMenu>
      </StyledOrderList>
      <StyledAmountPayment>
        <div>
          <h2>총 결제 금액</h2>
          <h2>{payment.orders.length > 0 ? payment.orders.reduce((acc, order) => acc + order.totalPrice, 0).toLocaleString() : 0}원</h2>
        </div>
        <i></i>
      </StyledAmountPayment>
    </>
  );
}

export default OderList;
