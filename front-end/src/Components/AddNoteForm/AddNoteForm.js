import React, { Component } from 'react';


export class AddNoteForm extends Component {
  constructor(props) {
    super();
    this.state = {
      content: '',
      tag: 'Work',
      error: false,
      success: false
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      error: false
    });
  }

  handleSubmit = (e) => {
    const { content, tag } = this.state;
    e.preventDefault();
    if (!this.state.content.length) {
      this.setState({
        error: true
      });
    } else {
      this.props.addNote(content, tag);
      this.setState({success: true});
      document.querySelector('.AddNoteForm').reset();
    }
    setTimeout(() => {
      this.setState({success: false});
    }, 4000);
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit } className="AddNoteForm">
        <input type="text" maxLength="250" name="content" onChange={ this.handleChange }/>
        <select name="tag" onChange={ this.handleChange }>
          <option>Work</option>
          <option>Hobby</option>
          <option>Personal</option>
        </select>
        <button>Add Note</button>
        {this.state.error ? <p>Please fill out all required fields</p>: ''}
        {this.state.success ? <p>Note taken!</p> : ''}
      </form>
    )
  }
}