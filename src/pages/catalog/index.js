import PropTypes from 'prop-types';

import { Products } from './styles';

import Header from '../../patterns/Header';
import SearchBar from '../../components/SearchBar/index';
import Card from '../../patterns/Card/index';

export default function Catalog( { products } ) {
  return (
    <>
      <Header title="Sneakers" />
      <SearchBar />
      <Products>
        {products.map(product => {
          return (
            <li key={product.id}><Card product={product} /></li>
          )
        })}
      </Products>
    </>
  )
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired,
}