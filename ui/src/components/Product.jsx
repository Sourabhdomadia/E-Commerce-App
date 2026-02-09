import React from 'react'
import {NavLink} from "react-router-dom";
import {formatPrice} from "../util.jsx";

const Product = (currEle) => {
  const {id, name, price, category, image} = currEle;
  return (
    <NavLink to={`/product/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{formatPrice(price)}</p>
          </div>
        </div>

      </div>

    </NavLink>
  )
}
export default Product
