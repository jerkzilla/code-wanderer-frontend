import React, { Component } from "react";
import { connect } from "react-redux";

class Wander extends Component {
  render() {
    return (
      <div>
        {window.open(`${this.props.wanders.link}`)}
        {window.location.assign(
          "https://johnjamesmarshalljr.github.io/code-wanderer-frontend/"
        )}
      </div>
    );
  }
}

const mSTP = (globalState) => {
  return { wanders: globalState.wanders };
};

export default connect(mSTP)(Wander);
