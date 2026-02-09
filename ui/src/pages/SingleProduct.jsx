import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../context/productContext.jsx'
import styled from "styled-components";
import PageNavigation from "../components/PageNavigation.jsx";
import {Container} from "react-bootstrap";
import {formatPrice} from "../util.jsx";
import {TbReplace, TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiCash} from "react-icons/gi";

const SingleProduct = () => {
  const {id} = useParams();
  const {getSingleProduct, singleProduct, isLoading} = useContext(AppContext);

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  const {id: prodId, name, brand, price, description, category, available, image} = singleProduct;

  return (
    <Wrapper>
      <PageNavigation title={name}/>
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <img src={image} alt={name} />
          </div>
          <div className="product-data">
            <p className="product-category">{category}</p>
            <h2>{name}</h2>
            <p className="product-data-price">
              MRP: <del>{formatPrice(price + 2500)}</del>
            </p>
            <p className="product-data-real-price product-data-price">
              Deal of the Day: {formatPrice(price)}
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon"/>
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon"/>
                <p>2 Year Warranty</p>
              </div>
              <div className="product-warranty-data">
                <GiCash className="warranty-icon"/>
                <p>Cash on Delivery</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>Available: <span>{available ? "In Stock" : "Out of Stock"}</span></p>
            </div>
            <p>Brand: {brand}</p>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .container {
        width: 100%;
        padding: 9rem 0;
        max-width: 120rem;
        margin: 0 auto;
    }

    .grid {
        gap: 3rem;
    }

    .product_images {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            max-width: 45rem;
            height: auto;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
    }

    .product-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 2rem;

        .product-category {
            background-color: rgba(98, 84, 243, 0.1);
            color: ${({theme}) => theme.colors.btn};
            padding: 0.6rem 1.5rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(98, 84, 243, 0.3);
            font-size: 1.2rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
            display: inline-block;
            box-shadow: 0 2px 4px rgba(98, 84, 243, 0.1);
        }

        .product-data-warranty {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            border-bottom: 1px solid #ccc;
            margin-bottom: 1rem;
            padding-bottom: 2rem;

            .product-warranty-data {
                text-align: center;

                .warranty-icon {
                    background-color: rgba(220, 220, 220, 0.5);
                    border-radius: 50%;
                    width: 4rem;
                    height: 4rem;
                    padding: 0.6rem;
                }

                p {
                    font-size: 1.4rem;
                    padding-top: 0.4rem;
                }
            }
        }

        .product-data-price {
            font-weight: bold;
        }

        .product-data-real-price {
            color: ${({theme}) => theme.colors.btn};
        }

        .product-data-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-size: 1.8rem;

            span {
                font-weight: bold;
            }
        }

        hr {
            max-width: 100%;
            width: 90%;
            /* height: 0.2rem; */
            border: 0.1rem solid #000;
            color: red;
        }
    }

    .page_loading {
        font-size: 3.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .container {
            padding: 5rem 2.4rem;
        }

        .grid {
            gap: 3rem;
        }

        .product_images img {
            max-width: 100%;
        }

        .product-data-warranty {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
    }
`;

export default SingleProduct
