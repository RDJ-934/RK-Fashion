import React, {useContext} from 'react';

import ProductProvider, { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {

  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-[20px] mx-w-sm mx-auto md:mx-w-none md:mx-0'>
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id}/>

          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home; 