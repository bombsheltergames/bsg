import { Component } from "react";
import { withRouter } from "react-router-dom";

class AutoScrollTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(AutoScrollTop);
