import React, { Component } from 'react';


export class AddNoteForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      tag: ''
    }
  }


  render() {
    return (
      <form>
        <input type="text" />
        <select>
          <option>Work</option>
          <option>Hobby</option>
          <option>Personal</option>
        </select>
        <button>Add Note</button>
      </form>
    )
  }
}