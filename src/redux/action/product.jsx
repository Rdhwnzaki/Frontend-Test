import axios from "axios";

export const GET_DATA_PRODUCT = "GET_DATA_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const getProduct = (sortBy, sort, inputData) => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_PRODUCT,
      payload: {
        isLoading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL_BASE}/products/get-product?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`,
    })
      .then((response) => {
        dispatch({
          type: GET_DATA_PRODUCT,
          payload: {
            isLoading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DATA_PRODUCT,
          payload: {
            isLoading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        isLoading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL_BASE}/products/post-product`,
      data: data,
    })
      .then((res) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            isLoading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            isLoading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const updateProduct = (data, id_product) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT,
      payload: {
        isLoading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_URL_BASE}/products/put-product/${id_product}`,
      data: data,
    })
      .then((res) => {
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            isLoading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            isLoading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deleteProduct = (id_product) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        isLoading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_URL_BASE}/products/delete-product/${id_product}`,
    })
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            isLoading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            isLoading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
