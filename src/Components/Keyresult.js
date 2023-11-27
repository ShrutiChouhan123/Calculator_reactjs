import React, { Component } from 'react';

class Keyresult extends Component {
  render() {
    let { result } = this.props;

    return (
      <div className="result">
        <p>{ result }</p>
      </div>
    )
  }
}

export default Keyresult;