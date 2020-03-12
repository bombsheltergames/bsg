// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Style Imports
import "./button.css";

const Button = props => {
  const { href, onClick, size, type, children, ...rest } = props;
  const ButtonEl = href ? "a" : "button";
  return (
    <ButtonEl
      onClick={onClick}
      href={href}
      className={`Button Button-size--${size} Button-color--${type}`}
      {...rest}
    >
      {children}
    </ButtonEl>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  href: null,
  onClick: () => {},
  size: "medium",
  type: "primary",
  children: undefined,
};

export default Button;
