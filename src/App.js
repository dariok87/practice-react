import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button className="button" onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default App;
