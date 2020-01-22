import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
