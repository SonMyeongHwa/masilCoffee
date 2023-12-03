import * as Orders from "./style/OrderDetail.style";

const OrderDone = ({ date, time, orderer, request, menuCount, totalPrice, takeout, items, cancellation = false }) => {
  return (
    <Orders.Container>
      {cancellation && <Orders.DisabledOverlay />}
      <Orders.TopBox>
        <Orders.Date>{date}</Orders.Date>
        <Orders.Time>{time}</Orders.Time>
        <Orders.Orderer>주문자 : {orderer}</Orders.Orderer>
        <Orders.Request>요청사항 : {request}</Orders.Request>
      </Orders.TopBox>
      <Orders.Wrapper>
        <Orders.LeftBox>
          <Orders.TotalPrice>
            [메뉴 {menuCount}개] {totalPrice}원
          </Orders.TotalPrice>
          <Orders.Takeout>포장 옵션 : {takeout}</Orders.Takeout>
        </Orders.LeftBox>
        <Orders.CenterBox>
          {items.map((item, i) => {
            return (
              <Orders.ItemBox>
                <Orders.Item>
                  {item.name} {item.count}개
                </Orders.Item>
                <Orders.ItemOption>{item.option}</Orders.ItemOption>
              </Orders.ItemBox>
            );
          })}
        </Orders.CenterBox>
        <Orders.RightBox>
          {!cancellation ? (
            <Orders.Done>주문완료</Orders.Done>
          ) : (
            <Orders.Cancel>
              주문이 취소되었습니다
              <div>취소 사유: {cancellation}</div>
            </Orders.Cancel>
          )}
        </Orders.RightBox>
      </Orders.Wrapper>
    </Orders.Container>
  );
};

OrderDone.defaultProps = {
  date: "2023.11.12",
  time: "13:22",
  orderer: "홍길동",
  request: "물티슈도 챙겨주세요",
  menuCount: 1,
  totalPrice: "10,800",
  takeout: "전체포장",
  items: [
    {
      name: "아이스 아메리카노",
      count: 1,
      option: "샷1, 얼음많이, 휘핑 많이",
    },
    {
      name: "아이스 돌체 라떼",
      count: 1,
      option: "샷 1, 얼음많이, 휘핑 많이, 돌체 시럽 1, 드리즐: 초코",
    },
  ],
  cancellation: "가게 사정",
};

export default OrderDone;
