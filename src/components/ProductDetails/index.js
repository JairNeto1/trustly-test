import PropTypes from "prop-types";

import { Section } from "./styles";

export default function ProductDetails({ product }) {
  return (
    <Section>
      <h2>{product.description}</h2>
      <span>x 1, {product.color}, Size 41 </span>
      <span>Item #{product.id}</span>
    </Section>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};
