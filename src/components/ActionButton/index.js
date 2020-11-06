import PropTypes from "prop-types";
import { Button } from "./styles";

export default function ActionButton({ text, fn }) {
  return (
    <Button onClick={fn} type="button">
      {text}
    </Button>
  );
}

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired,
};
