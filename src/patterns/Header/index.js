import PropTypes from "prop-types";

import { Topbar } from "./styles";
import { ArrowLeft } from "react-feather";

import avatar from "../../assets/profile.png";

export default function Header({ title, lastPage }) {
  return (
    <Topbar>
      {title !== "Sneakers" ? (
        <a href={lastPage}>
          <ArrowLeft />
          Back
        </a>
      ) : null}
      <span>{title}</span>
      <img src={avatar} alt="User avatar" />
    </Topbar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  lastPage: PropTypes.string,
};
