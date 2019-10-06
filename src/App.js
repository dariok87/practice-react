import React from "react";
import Conditional from "./Conditional"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available..."
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
      </div>
    )
  }
}

export default App;
