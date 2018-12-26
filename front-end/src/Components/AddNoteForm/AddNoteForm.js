import React, { Component } from 'react';


export class AddNoteForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      tag: 'Work'
    }
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <form>
        <input type="text" maxLength="250" name="content" onChange={this.handleInput}/>
        <select name="tag" onChange={this.handleInput}>
          <option>Work</option>
          <option>Hobby</option>
          <option>Personal</option>
        </select>
        <button>Add Note</button>
      </form>
    )
  }
}