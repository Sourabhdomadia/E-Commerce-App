import React, {useContext} from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import {FilterContext} from "../context/filterContext.jsx";

const ProductList = () => {
  const { grid_view, filter_products = [], isLoading = false } = useContext(FilterContext) || {};

  if (isLoading) {
    return <div className="container"><h3>Loading...</h3></div>;
  }

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
