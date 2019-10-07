import React from "react";

/*
Challenge: 

Given a stateless functional component :
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "logged in" if the user is logged in, or "Logged out" if they're not.    
*/

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let textButton = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let textDisplay = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
      <div>
        <button onClick={this.handleClick}>{textButton}</button>
        <h1>{textDisplay}</h1>
      </div>
    )
  }
}

export default App;
