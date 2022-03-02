import React, { Component } from 'react';
import Buttons from './Buttons.js';
export default class Counter extends Component {
  constructor(props) {
            super(props)
            this.state = {
                      counter:0,
            }
            this.increase=this.increase.bind(this)
            this.decrease=this.decrease.bind(this)
  }

 increase(){
          this.setState({
                    updateCounter:this.state.counter++,
          })
          }
 decrease(){
            if(this.state.counter>0){
                      this.setState({
                              updateCounter:this.state.counter--
                    })
            }
          }
  render() {
    return (
              <React.Fragment>
                                <div className="counter">counter App</div>
                                 <div>{this.state.counter}</div>
                                 <div className="buttons">
                                  <Buttons title='increase' clickHandler={this.increase}/>
                                  <Buttons title='decrease' clickHandler={this.decrease}/>
                                 </div>   

                                 
              </React.Fragment>

    )
  }
}

