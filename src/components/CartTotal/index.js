import PropTypes from "prop-types";

import { Section } from "./styles";

export default function CartTotal({ product }) {
  return (
    <Section>
      <div>
        <h6>Total cost</h6>
        <p>Delivery included</p>
      </div>

      <span>$ {product.price}</span>
    </Section>
  );
}

CartTotal.propTypes = {
  product: PropTypes.object.isRequired,
};
