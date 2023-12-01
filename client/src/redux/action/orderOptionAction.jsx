import { OPTION_TYPE } from "./_types";

export const actionGetAllOptions = (options) => {
  return {
    type: OPTION_TYPE.GET_ALL_OPTIONS,
    payload: options,
  };
};

export const actionGetOption = (optionId) => {
  return {
    type: OPTION_TYPE.GET_OPTION,
    payload: optionId,
  };
};

export const actionCreateOption = (newOption) => {
  return {
    type: OPTION_TYPE.ADD_OPTION,
    payload: newOption,
  };
};

export const actionUpdateOption = (option) => {
  return {
    type: OPTION_TYPE.UPDATE_OPTION,
    payload: option,
  };
};

export const actionDeleteOption = (optionId) => {
  return {
    type: OPTION_TYPE.DELETE_OPTION,
    payload: optionId,
  };
};
