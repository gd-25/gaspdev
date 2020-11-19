import '../styles/main.css';
import Product from './Product';
import { ProductConsumer } from '../context';

function ProductList() {

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-11/12 flex flex-wrap justify-center items-center py-6">
        <ProductConsumer>
          {value => {
            return value.products.map(product => {
              return <Product key={product.id} product={product} />
            })
          }}
        </ProductConsumer>
      </div>
    </div>

  );
}

export default ProductList;
