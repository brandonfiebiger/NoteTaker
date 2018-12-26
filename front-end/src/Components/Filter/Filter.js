import React, { Component } from 'react';


export class Filter extends Component {
  constructor(props) {
    super();

    this.state = {
      Date: "",
      Tag: ""
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      error: false
    });
  }


  render() {
    return (
      <form>
        <input type="date" name="Date" onChange={ this.handleChange } />
        <select name="Tag" onChange={ this.handleChange }>
          <option>Work</option>
          <option>Hobby</option>
          <option>Personal</option>
        </select>
        <button>Filter Notes</button>
      </form>
    )
  }
}