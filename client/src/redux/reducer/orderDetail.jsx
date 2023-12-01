import { ORDER_DETAIL_TYPE } from "../action/_types";
// import { calculatePrice } from "../../util/calculatePrice/calculatePrice";

// const initialState = {
//   id: "",
//   itemPrice: 0,
//   menu: 1,
//   shot: 0,
//   syrups: {
//     vanilla: 0,
//     hazelnut: 0,
//     caramel: 0,
//   },
//   ice: "없음",
//   whipping: "없음",
//   drizzle: "없음",
//   milk: "없음",
//   totalPrice: 0,
// };

// const initialState = {
//   id: "",
//   // itemPrice: 0,
//   totalPrice: 0,
//   menu: 1,
//   shot: [{
//     name: "에스프레소",
//     quantity: 2,
//   }, {
//     name: "다른거",
//     quantity: 1,
//   }],
//   syrups: [{
//     name: "바닐라",
//     quantity: 2,
//   }, {
//     name: "카라멜",
//     quantity: 1,
//   }, {
//     name: "헤이즐넛",
//     quantity: 0,
//   }],
//   ice: [{
//     name: "없음",
//     quantity: 1
//   },{
//     name: "적게",
//     quantity: 0
//   },{
//     name: "많이",
//     quantity: 0
//   },{
//     name: "더 많이",
//     quantity: 0
//   }],
//   whipping: [],
//   drizzle: [],
//   milk: [],
// };

const initialState = {
  // 주문에 대한 정보
  orderDetail: {},
  // 선택된 옵션의 정보
  selectedOptions: {},
};

const orderDetail = (state = initialState, action) => {
  // let newState = JSON.parse(JSON.stringify(state));

  // switch (action.type) {
  //   case ORDER_DETAIL_TYPE.ADD_MENU_ORDER_DETAIL:
  //     newState.itemPrice = action.payload.itemPrice;
  //     newState.menu = action.payload.menu;
  //     break;

  //   case ORDER_DETAIL_TYPE.ADD_SHOT_ORDER_DETAIL:
  //     newState.shot = action.payload;
  //     break;

  //   case ORDER_DETAIL_TYPE.ADD_SYRUPS_ORDER_DETAIL:
  //     newState.syrups = action.payload;
  //     break;

  //   case ORDER_DETAIL_TYPE.ADD_ICE_ORDER_DETAIL:
  //     newState.ice = action.payload;
  //     break;

  //   case ORDER_DETAIL_TYPE.ADD_WHIPPING_ORDER_DETAIL:
  //     newState.whipping = action.payload;
  //     break;

  //   case ORDER_DETAIL_TYPE.ADD_DRIZZLE_ORDER_DETAIL:
  //     newState.drizzle = action.payload;
  //     break;

  //   case ORDER_DETAIL_TYPE.ADD_MILK_ORDER_DETAIL:
  //     newState.milk = action.payload;
  //     break;

  //   case ORDER_DETAIL_TYPE.RESET_ORDER_DETAIL:
  //     return initialState;

  //   default:
  //     return state;
  // }

  // newState.totalPrice = calculatePrice(newState);

  // return newState;

  switch (action.type) {
    // 주문 상세 정보
    case ORDER_DETAIL_TYPE.SET_ORDER_DETAIL:
      console.log("액션페이로드", action.payload);
      return {
        ...state,
        orderDetail: { ...action.payload },
      };
    // 모든 옵션을 초기 상태로 설정
    // 없음 1 그외 0
    case ORDER_DETAIL_TYPE.SET_INITIAL_OPTION: // 리셋 겸용
      const initialOptions = {};
      for (const optionName in state.orderDetail) {
        initialOptions[optionName] = [];
        for (const { name } of state.orderDetail[optionName]) {
          initialOptions[optionName] = [
            ...initialOptions[optionName],
            { name, quantity: name === "없음" ? 1 : 0 },
          ];
        }
      }
      return {
        ...state,
        selectedOptions: initialOptions,
      };

    // 특정 옵션의 선택 항목을 변경
    // 선택 항목 수량 1 그 외 0
    case ORDER_DETAIL_TYPE.MODIFY_OPTION:
      const modifiedItems = state.selectedOptions[
        action.payload.optionName
      ].map((item) => {
        if (action.payload.itemName === item.name) {
          return { ...item, quantity: 1 };
        }
        return { ...item, quantity: 0 };
      });
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [action.payload.optionName]: [...modifiedItems],
        },
      };

    // 특정 옵션 수량 증가
    case ORDER_DETAIL_TYPE.INCREASE_OPTION: {
      // const increasedPrice = state.orderDetail[action.payload.optionName].find(item => item.name === action.payload.itemName).price;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [action.payload.optionName]: state.selectedOptions[
            action.payload.optionName
          ].map((item) =>
            action.payload.itemName === item.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        },
      };
    }
    // 특정 옵션 수량 감소 0미만일 경우 감소X
    case ORDER_DETAIL_TYPE.DECREASE_OPTION: {
      // const decreasedPrice = state.orderDetail[action.payload.optionName].find(item => item.name === action.payload.itemName).price;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [action.payload.optionName]: state.selectedOptions[
            action.payload.optionName
          ].map((item) =>
            action.payload.itemName === item.name && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        },
      };
    }
    default:
      return state;
  }
};
export default orderDetail;
