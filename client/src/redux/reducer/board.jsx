import { BOARD_TYPE } from "../action/_types";

// filters: 선택한 카테고리, boards: 전체 게시글, searchBoards: 검색 된 게시글, board: 게시글 1개
const initialState = {
  filters: "",
  boards: [],
  searchBoards: [],
  board: [],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    //모든 게시글 가져오기(초기)
    case BOARD_TYPE.GET_ALL_BOARDS:
      return {
        ...state,
        boards: action.payload,
        searchBoards: action.payload,
      };

    //모든 게시글 가져오기(페이지네이션)
    case BOARD_TYPE.GET_ALL_MORE_BOARDS:
      return {
        ...state,
        boards: [...state.boards, ...action.payload],
        searchBoards: [...state.boards, ...action.payload],
      };

    //게시글 검색
    case BOARD_TYPE.GET_SEARCH_BOARDS:
      const { boards } = state;
      const query = action.payload;

      if (query) {
        //검색 값 O
        const searchBoard = boards.filter((e) => e.post.search(query) !== -1);
        return {
          ...state,
          searchBoards: searchBoard,
        };
      } else {
        //검색 값 X
        return {
          ...state,
          searchBoards: state.boards,
        };
      }

    // //게시물 검색
    // case BOARD_TYPE.GET_SEARCH_BOARDS:
    //   const { boards, filters } = state;
    //   const query = action.payload;

    //   if (!query && filters !== "") {
    //     //검색쿼리X, 카테고리O
    //     const filteredCate = boards.filter((e) => e.category === filters);
    //     return {
    //       ...state,
    //       searchBoards: filteredCate,
    //     };
    //   } else if (!query && filters === "") {
    //     //검색쿼리X, 카테고리X
    //     return {
    //       ...state,
    //       searchBoards: boards,
    //     };
    //   } else if (query && filters === "") {
    //     //검색쿼리O, 카테고리X
    //     const searchBoard = boards.filter((e) => e.post.search(query) !== -1);
    //     return {
    //       ...state,
    //       searchBoards: searchBoard,
    //     };
    //   }
    //   const filteredData = filterFn(filters, query, boards); //검색쿼리O, 카테고리O

    //   return {
    //     ...state,
    //     searchBoards: filteredData,
    //   };

    //해당 게시물 가져오기
    case BOARD_TYPE.GET_BOARD:
      return {
        ...state,
        board: [action.payload],
      };

    //게시글 작성하기
    case BOARD_TYPE.ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };

    //게시글 수정하기
    case BOARD_TYPE.UPDATE_BOARD:
      const updateBoard = action.payload;
      const updatedBoards = state.boards.map((board) => board._id === updateBoard._id ? updateBoard : board);

      return {
        ...state,
        board: [updateBoard],
        boards: [updatedBoards],
      };

    //게시글 삭제하기
    case BOARD_TYPE.REMOVE_BOARD:
      const deletedBoardId = action.payload;
      const filteredBoards = state.boards.filter((board) => board._id !== deletedBoardId);

      return {
        ...state,
        boards: [filteredBoards],
      };

      case BOARD_TYPE.GET_MY_BOARDS:
        

    default:
      return state;
  }
};

export default board;
