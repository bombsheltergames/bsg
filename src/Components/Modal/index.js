// Framework Imports
import React from "react";
import PropTypes from "prop-types";
// Style Imports
import "./modal.css";
// Component Imports
import Portal from "./Portal";

const Modal = props => {
  const { isOpen, type, handleClose, children } = props;
  return (
    <Portal isOpen={isOpen}>
      <div className={`Modal Modal--${type}`} onClick={handleClose}>
        <button className="Modal-close" onClick={handleClose}>
          Close
        </button>
        <div className="Modal-inner">{children}</div>
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  type: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
  type: "image",
  handleClose: () => {},
};

export default Modal;
