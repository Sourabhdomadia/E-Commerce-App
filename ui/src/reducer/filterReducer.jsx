const filterReducer = (state, action) => {
  switch (action.type) {

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: action.payload,
        isLoading: false,
      };

    case "SET_SORTING_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          text: "",
          category: "All",
          brand: "All",
        },
        sorting_value: "default",
      };

    default:
      return state;
  }
};

export default filterReducer;