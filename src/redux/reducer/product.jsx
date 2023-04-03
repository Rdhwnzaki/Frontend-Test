import {
  GET_DATA_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "../action/product";

const initialState = {
  dataProductResult: false,
  isLoading: false,
  error: false,

  deleteProductResult: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_PRODUCT:
      return {
        ...state,
        dataProductResult: action.payload.data,
        isLoading: action.payload.isLoading,
        error: action.payload.errorMessage,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        dataProductResult: action.payload.data,
        isLoading: action.payload.isLoading,
        error: action.payload.errorMessage,
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        dataProductResult: action.payload.data,
        isLoading: action.payload.isLoading,
        error: action.payload.errorMessage,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        dataProductResult: action.payload.data,
        isLoading: action.payload.isLoading,
        error: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default product;
