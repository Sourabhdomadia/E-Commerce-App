import {createContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/filterReducer.jsx";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  grid_view: true,
  sorting_value: "default",
  isLoading: false,
  filters: {
    text: "",
    category: "All",
    brand: "All"
  }
};

const FilterProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch products with sorting and search
  const fetchProducts = async (sortBy = "id", sortOrder = "ASC", searchText = "", category = "All", company = "All") => {
    dispatch({ type: "SET_LOADING" });
    try {
      let url = `http://localhost:8080/products?sortBy=${sortBy}&sortOrder=${sortOrder}`;

      // Add search parameter if searchText is provided
      if (searchText && searchText.trim() !== "") {
        url += `&search=${encodeURIComponent(searchText)}`;
      }

      // Add category filter if not "All"
      if (category && category !== "All") {
        url += `&category=${encodeURIComponent(category)}`;
      }

      // Add brand filter if not "All"
      if (company && company !== "All") {
        url += `&brand=${encodeURIComponent(company)}`;
      }

      const response = await axios.get(url);
      dispatch({ type: "SET_FILTER_PRODUCTS", payload: response.data });
    } catch (error) {
      console.log("Error fetching products:", error);
      dispatch({ type: "SET_FILTER_PRODUCTS", payload: [] });
    }
  };

  // Initial fetch on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Trigger search when text filter changes
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchProducts(
        state.sorting_value === "lowest" || state.sorting_value === "highest" ? "price" :
        state.sorting_value === "a-z" || state.sorting_value === "z-a" ? "name" : "id",
        state.sorting_value === "highest" || state.sorting_value === "z-a" ? "DESC" : "ASC",
        state.filters.text,
        state.filters.category,
        state.filters.brand
      );
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [state.filters.text, state.filters.category, state.filters.brand]);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const setSortOrder = (event) => {
    const value = event.target.value;
    dispatch({ type: "SET_SORTING_VALUE", payload: value });

    // Call backend with appropriate sort parameters and current filters
    switch (value) {
      case "lowest":
        fetchProducts("price", "ASC", state.filters.text, state.filters.category, state.filters.company);
        break;
      case "highest":
        fetchProducts("price", "DESC", state.filters.text, state.filters.category, state.filters.company);
        break;
      case "a-z":
        fetchProducts("name", "ASC", state.filters.text, state.filters.category, state.filters.company);
        break;
      case "z-a":
        fetchProducts("name", "DESC", state.filters.text, state.filters.category, state.filters.company);
        break;
      default:
        fetchProducts("id", "ASC", state.filters.text, state.filters.category, state.filters.company);
        break;
    }
  };

  const searchProducts = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  }

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    // Fetch all products without any filters
    fetchProducts("id", "ASC", "", "All", "All");
  }

  return (
    <FilterContext.Provider value={{...state, setGridView, setListView, setSortOrder, searchProducts, clearFilters}}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };