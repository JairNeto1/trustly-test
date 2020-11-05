import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CardContainer } from './styles';
import ActionButton from '../../components/ActionButton';


export default function Card({ product }) {
  const history = useHistory();
  const addToCart = () => {
    history.push(`/checkout/${product.id}`);
  }

  return (
    <>
      <CardContainer>
        <img src={product.thumbnailURL} alt={product.description} />

        <p>{product.description}</p>

        <section>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <label htmlFor="quantity">Quantity</label>
          <select name="quantity" id="quantity">
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>
        </section>

        <span>$ {product.price}</span>

        <ActionButton text="Add to cart" fn={addToCart} />
      </CardContainer>
    </>
  )
}

Card.propType = {
  product: PropTypes.object.isRequired,
}