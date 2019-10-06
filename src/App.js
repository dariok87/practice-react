import React from "react";
import Conditional from "./Conditional"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      unreadMessages: [
        "bla"
      ]
    }
  }

  render() {
    return (
      <div>
          {
            this.state.unreadMessages.length > 0 ? 
            <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
            null
          }
      </div>
    )
  }
}

export default App;
