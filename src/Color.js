import React, { Component } from 'react';

export default class Color extends Component {
  render() {
    return (
      <React.Fragment>
                              <li>
                              <div className="colorBox"
                              style={{ backgroundColor:this.props.colorItems}}
                              ></div>
                              <div className="colorName"
                              //  style={{ color:this.props.colorItems}}
                              >{this.props.colorItems}</div>
                              </li>
      </React.Fragment>
    )
  }
}
