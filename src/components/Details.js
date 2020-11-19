import React, { Component } from 'react'
import Navbar from './Navbar'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import TextBlockProduct from './TextBlockProduct'
import '../styles/main.css'

export default class Details extends Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>

      <ProductConsumer>
        {(context) => {
          const { img, inCart } = context.detailProduct;
          return (
            
            <div className="flex flex-col pt-20 justify-center items-center leading-tight">

              <div className="flex flex-row justify-center items-center">
                <img src={img} alt="product" className="w-1/3" />

                <div className="w-20"></div>

                <TextBlockProduct key={context.detailProduct.id} product={context.detailProduct}></TextBlockProduct>
              </div>
              <div className="h-8"></div>

              <div className="flex flex-col">
                <Link to="/merch">
                  <button className="font-bold text-center border-2 border-black px-4 py-1 cursor-default focus:outline-none focus:bg-black focus:text-white">
                    BACK TO PRODUCTS
                  </button>
                </Link>
                <div className="h-2"></div>

                <button className="font-bold text-center border-2 border-black px-4 py-1 cursor-default focus:outline-none focus:bg-black focus:text-white" disabled={inCart ? true : false} >
                  {inCart ? (<p disabled> IN CART</p>) : (<p className="hover:text-white">ADD TO CART</p>)}
                </button>
              </div>
            </div>
          )
        }}
      </ProductConsumer>

      </div>

    );
  }
}
