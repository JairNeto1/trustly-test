import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Main, Title, ProductImage } from './styles';

import Header from '../../patterns/Header/index';
import ProgressBar from '../../components/ProgressBar/index';
import OrderSummary from '../../patterns/OrderSummary/index';

export default function Checkout({ products }) {
  const [id, setId] = useState("");
  const [product, setProduct] = useState({});

  
  useEffect(() => {
    setId(window.location.pathname.slice(-11));

    products.map(item => {
      if(item.id === id){
        setProduct(item)
      }
      return true;
    });
  }, [id, products])


  return (
    <>
      <Header title="Checkout" lastPage="/" />
      <ProgressBar page="checkout" />
      <Title>Checkout</Title>

      <Main>
        <ProductImage>
          <img src={product.maxresURL} alt={product.description} />
        </ProductImage>

        <OrderSummary page="checkout" product={product} />
      </Main>
    </>
  )
}

Checkout.propTypes = {
  products: PropTypes.array.isRequired,
}