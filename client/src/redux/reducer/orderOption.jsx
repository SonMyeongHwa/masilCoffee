import { OPTION_TYPE } from "../action/_types";

const initialState = {
  options: [],
};

const option = (state = initialState, action) => {
  switch (action.type) {
    case OPTION_TYPE.GET_ALL_OPTIONS:
      return {
        ...state,
        options: action.payload,
      };
    case OPTION_TYPE.GET_OPTION:
      const foundOption = state.options.find((option) => option.id === action.payload);
      return foundOption ? foundOption : null;
    case OPTION_TYPE.ADD_OPTION:
      return {
        ...state,
        options: [...state.options, action.payload],
      };
    case OPTION_TYPE.UPDATE_OPTION:
      const updatedOption = action.payload;
      const updatedOptions = state.options._id === updatedOption._id ? updatedOption : state.options;

      return {
        ...state,
        options: updatedOptions,
      };
    case OPTION_TYPE.DELETE_OPTION:
      const deletedOptionId = action.payload;
      const filteredOptions = state.options.filter((option) => option._id !== deletedOptionId);

      return {
        ...state,
        options: filteredOptions,
      };
    default:
      return state;
  }
};

export default option;
