import React, { Component } from 'react';
export default class Buttons extends Component {
  render() {
    console.log(this.props.clickHandler)
    return (
      <>
              <button className={this.props.title} onClick={this.props.clickHandler}>
                {this.props.title}
              </button>
      </>
    )
  }
}
