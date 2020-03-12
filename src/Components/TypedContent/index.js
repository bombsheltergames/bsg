// Framework Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Typing } from "react-typing";
// Style Imports
import "./typedContent.css";

class TypedContent extends Component {
  state = {
    removeCursor: false,
  };

  handleOnDone = () => {
    if (this.props.removeCursor) {
      this.setState({ removeCursor: true });
    }
    this.props.onDone();
  };

  render() {
    const { play, children } = this.props;
    const cssClasses = clsx([
      "TypedContent",
      this.state.removeCursor && "TypedContent--removeCursor",
    ]);
    return (
      <>
        {play && (
          <div className={cssClasses}>
            {play && (
              <Typing keyDelay={50} onDone={this.handleOnDone}>
                {children}
              </Typing>
            )}
          </div>
        )}
      </>
    );
  }
}

TypedContent.propTypes = {
  play: PropTypes.bool,
  removeCursor: PropTypes.bool,
  onDone: PropTypes.func,
  children: PropTypes.node,
};

TypedContent.defaultProps = {
  play: false,
  removeCursor: false,
  onDone: () => {},
  children: undefined,
};

export default TypedContent;
