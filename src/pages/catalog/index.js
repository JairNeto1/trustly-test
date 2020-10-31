import PropTypes from 'prop-types';

import { Products } from './styles';

import Card from '../../patterns/Card/index';

export default function Catalog( { data } ) {
  return (
    <Products>
      {data.map(product => {
        return (
          <li key={product.id}><Card product={product} /></li>
        )
      })}
    </Products>
  )
}

Catalog.prototype = {
  data: PropTypes.array.isRequired,
}