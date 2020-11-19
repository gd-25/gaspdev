import React, { Component } from 'react'
import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'
import '../styles/main.css';
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { title, img, type, price, inCart } = this.props.product;
    return (
      <div className="m-4">
        <div onClick={() => console.log('you clicked on the image container')}>
          <Link to="/details">
            <img src={img} alt="artwork" className="object-contain h-64 cursor-default" />
          </Link>

          <h1 className="cursor-default">{type} - {title}</h1>
          <h2 className="cursor-default">{price} euros</h2>

          <button className="font-bold text-center border-2 border-black px-4 py-1 cursor-default focus:outline-none focus:bg-black focus:text-white" disabled={inCart ? true : false} onClick={() => console.log("Added to the cart")}>
            {inCart ? (<p disabled> IN CART</p>) : (<p className="hover:text-white">ADD TO CART</p>)}
          </button>
        </div>

      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}