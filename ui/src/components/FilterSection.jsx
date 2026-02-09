import React, {useContext} from 'react'
import styled from "styled-components";
import {FilterContext} from "../context/filterContext.jsx";
import {AppContext} from "../context/productContext.jsx";

const getUniqueData = (data, property) => {
  let newVal = data.map((currEle) => {
    return currEle[property];
  })
  newVal = ["All",...new Set(newVal)];
  return newVal.slice(0, 6);
}

const FilterSection = () => {

  const {filters: {text = "", category = "All", brand = "All"} = {}, searchProducts, clearFilters} = useContext(FilterContext) || {};
  const {products = [], isLoading = false} = useContext(AppContext) || {};
  const uniqueCategories = getUniqueData(products, "category");
  const uniqueBrands = getUniqueData(products, "brand");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={searchProducts} placeholder="Search" />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        {isLoading ? (
          <p>Loading categories...</p>
        ) : uniqueCategories.length === 0 ? (
          <p>No categories available</p>
        ) : (
          <div>
            {uniqueCategories.map((currEle, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={currEle}
                  className={category === currEle ? "active" : ""}
                  onClick={searchProducts}
                >
                  {currEle}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="filter-company">
        <h3>Brand</h3>
        {isLoading ? (
          <p>Loading brands...</p>
        ) : uniqueBrands.length === 0 ? (
          <p>No brands available</p>
        ) : (
          <form action="#">
            <select
              name="brand"
              id="brand"
              className="filter-company--select"
              value={brand}
              onChange={searchProducts}
            >
              {uniqueBrands.map((currBrand, index) => {
                return (
                  <option key={index} value={currBrand}>
                    {currBrand}
                  </option>
                );
              })}
            </select>
          </form>
        )}
      </div>

      <div className="filter-clear">
        <button className="btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: 1.8rem;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        font-size: 1.6rem;
        padding: 0.5rem;
        color: ${({ theme }) => theme.colors.text || '#333'};

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
  }

  .filter-clear .btn {
    background-color: ${({ theme }) => theme.colors.btn};
    color: #fff;
    border: none;
    padding: 0.7rem 1.2rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
    width: auto;
    min-width: 120px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.3s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);

    &:hover {
      background-color: ${({ theme }) => theme.colors.helper};
      color: ${({ theme }) => theme.colors.text};
      transform: scale(1.04);
    }
  }
`;

export default FilterSection
