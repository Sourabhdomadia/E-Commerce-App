import {createContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer.jsx";

const AppContext = createContext();
const API_AllProducts = "http://localhost:8080/products"
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  featureProducts: [],
  singleProduct: {},
};

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "API_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "API_DATA_FETCH", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log("error while fetching products data");
      console.log(error);
    }
  };

  const getSingleProduct = async (id) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });
    try {
      const url = `http://localhost:8080/product/${id}`;
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "SINGLE_PRODUCT_FETCH", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_PRODUCT_ERROR" });
      console.log("error while fetching single product data");
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(API_AllProducts);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
