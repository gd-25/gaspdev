import React, {Component} from "react";
import { artworkData, productData, detailProduct } from './data';

const ArtworkContext = React.createContext();
const ProductContext = React.createContext();
// Provider: provides the info for all the app
// Consumer

class ArtworkProvider extends Component {
  state = {
      artworks:artworkData,
  }
  
  render() {
    return (
      // value can be an object
      <ArtworkContext.Provider value={this.state}>
          {this.props.children}
      </ArtworkContext.Provider>
    );
  }
  }

class ProductProvider extends Component {
state = {
    products:[],
    detailProduct: detailProduct,
}
componentDidMount() {
  this.setProducts();
}
setProducts = () => {
  let tempProducts = [];
  productData.forEach(item => {
    const singleItem =  {...item};
    tempProducts = [...tempProducts,singleItem];
  })
  this.setState(() => {
    return {products:tempProducts}
  })
}
handleDetail = () => {
  console.log('Hello from detail'); 
}
addToCart = () => {
    console.log('Hello from add to cart'); 
}
render() {
  return (
    // value can be an object
    <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
    }}>
        {this.props.children}
    </ProductContext.Provider>
  );
}
}

const ArtworkConsumer = ArtworkContext.Consumer;
const ProductConsumer = ProductContext.Consumer;
const artworkDataLength = artworkData.length;


export { ArtworkConsumer, ArtworkProvider, ProductConsumer, ProductProvider, artworkDataLength };
