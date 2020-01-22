import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};

Button.defaultProps = {
  type: "button"
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

export default Button;
