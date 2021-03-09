import React from 'react';
import "./App.scss";
import List from "./List";
import icon from "./icon.jpg"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = (e) => {
    if (e.type === "click") {
      this.setState({
        count: this.state.count + 1
      })    
    }
  }
  decrement = (e) => {
    if (e.type === "click") {
      this.setState({
        count: this.state.count - 1
      })    
    }
  }

  render() {
      return(
        <React.Fragment>
          <div>
            <div>
              <div>
                {this.state.count}
              </div>
              <div onClick={this.increment} style={{width: "100px"}}>
                +
              </div>
              <div onClick={this.decrement}>
                -
              </div>
              <div>
                <img src = {icon}/>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
}
export default App;
