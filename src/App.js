import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

   render() {
    return (
      <form>
        <input 
          type="text" 
          value={this.state.firstName} 
          name="firstName" 
          placeholder="First Name" 
          onChange={this.handleChange} 
        />
        <br />
        <input 
          type="text" 
          value={this.state.lastName} 
          name="lastName" 
          placeholder="Last Name" 
          onChange={this.handleChange}
        />
        <br />
        <textarea 
        value={"some default value"}
        onChange={this.handleChange}
        />
        <br />
        <input 
          type="checkbox" 
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />
        <br />
        <input 
          type="radio" 
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        /> Male
        <br />
        <input 
          type="radio" 
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        /> Female

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
      </form>
    )
  }
}

export default App;
