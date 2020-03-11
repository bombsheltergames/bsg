// Framework Imports
import React, { Component } from "react";
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
    return (
      <>
        {this.props.play && (
          <div
            className={`TypedContent ${
              this.state.removeCursor ? "TypedContent--removeCursor" : ""
            }`}
          >
            {this.props.play && (
              <Typing keyDelay={50} onDone={this.handleOnDone}>
                {this.props.children}
              </Typing>
            )}
          </div>
        )}
      </>
    );
  }
}
TypedContent.defaultProps = {
  onDone: () => {},
};
export default TypedContent;
