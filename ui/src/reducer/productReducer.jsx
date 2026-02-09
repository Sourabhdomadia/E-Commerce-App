const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      }


    case "API_DATA_FETCH":
      const featureProducts = action.payload.filter((currEle) => {
        return currEle.id < 4;
      })

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureProducts,
      }


    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    case "SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isLoading: true,
      }

    case "SINGLE_PRODUCT_FETCH":
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      }

    case "SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    default:
      return state;
  }
}

export default ProductReducer;