import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

   render() {
    return (
      <form>
        <input type="text" placeholder="First Name" />
      </form>
    )
  }
}

export default App;
