import PropTypes from "prop-types";
import { Container, ActiveBullet, InactiveBullet } from "./styles";

export default function ProgressBar({ page }) {
  return (
    <Container>
      <ActiveBullet>
        <div></div>
        Cart
      </ActiveBullet>
      <ActiveBullet>
        <div></div>
        Payment options
      </ActiveBullet>
      {page === "checkout" ? (
        <InactiveBullet>
          <div></div>
          Receipt
        </InactiveBullet>
      ) : (
        <ActiveBullet>
          <div></div>
          Receipt
        </ActiveBullet>
      )}
    </Container>
  );
}

ProgressBar.propTypes = {
  page: PropTypes.string.isRequired,
};
