import { useEffect, useState } from 'react';

import { Main, Title, ProductImage } from './styles';

import Header from '../../patterns/Header/index';
import OrderSummary from '../../patterns/OrderSummary';
import ProgressBar from '../../components/ProgressBar/index';

export default function Confirmation() {
  const [product, setProduct] = useState({})
  
  useEffect(() => {
    const store = localStorage.getItem("product");
    setProduct(JSON.parse(store));
  }, [])

  return (
    <>
      <Header title="Review and Confirmation" lastPage={`/checkout/${product.id}`} />
      <ProgressBar page="Confirmation" />
      <Title>Review and Confirmation</Title>

      <Main>
        <ProductImage>
          <img src={product.maxresURL} alt={product.description} />
        </ProductImage>

        <OrderSummary product={product} />
      </Main>
    </>
  )
}