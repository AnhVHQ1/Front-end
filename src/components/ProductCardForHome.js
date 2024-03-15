import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import {FaRegEye} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';

const ProductCardForHome = () => {
  return (
    <div
        className="col-3"
      >
        <Link to="/product/:id" className="product-card position-relative mb-0">
          <div className="wishlist-icon position-absolute">
            <Link>
              <AiOutlineHeart size={"1.5em"} className="text-body" />
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/product-compare-1.jpg" alt="product image" />
            <img src="/images/product-compare-1(2).jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Butter brand</h6>
            <h5 className="product-title">Salted butter 250g</h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className= "d-none">
              Indulge in the rich, velvety goodness of Creamy Delight Butter, a
              premium butter experience that elevates every culinary creation.
              Crafted with precision and care, this butter is the epitome of
              dairy perfection, making it a must-have in every kitchen.
            </p>
            <p className="price">$2.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <Link>
                <MdOutlineAddShoppingCart
                  size={"1.5em"}
                  className="text-body"
                />
              </Link>
              <Link>
                <FaRegEye size={"1.5em"} className="text-body" />
              </Link>
            </div>
          </div>
        </Link>
    </div>
   
  )
}

export default ProductCardForHome