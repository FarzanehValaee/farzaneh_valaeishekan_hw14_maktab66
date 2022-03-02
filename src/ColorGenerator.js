import React, { Component } from 'react';
import randomColor from "randomcolor";
import Color from './Color.js';
export default class ColorGenerator extends Component {
  constructor(props) {
            super(props);
            this.state = {
                      new_color:'',
                      color:['#d47e7e','#285bce','#2a4032']
            }
            this.addColor=this.addColor.bind(this)
  }
  addColor() {
          this.state.new_color=randomColor();
          // let random_hex_color = (Math.random() * 0xfffff * 1000000).toString(16);
          // this.state.new_color='#' + random_hex_color.slice(0, 6);
          this.setState({color:[...this.state.color,this.state.new_color],new_color:''})

  }
  render() {
    return (
          <React.Fragment>
                    <div className="colorGenerator">
                    <button onClick={this.addColor}>Add Color</button>
                    {this.state.color.map(colors =><Color colorItems={colors}/>)}
                    </div>
          </React.Fragment>

    )
  }
}

