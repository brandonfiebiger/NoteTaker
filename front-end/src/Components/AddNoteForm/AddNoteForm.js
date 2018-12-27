import React, { Component } from 'react';
import './AddNoteForm.css';


export class AddNoteForm extends Component {
  constructor(props) {
    super();
    this.state = {
      content: '',
      tag: 'Work',
      error: false,
      success: false,
      toggled: false
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
    if (!content) {
      this.setState({
        error: true
      });
    } else {
      this.props.addNote(content, tag);
      this.setState({success: true});
      document.querySelector('.AddNoteForm').reset();
      this.setState({
        content: ''
      })
    }
    setTimeout(() => {
      this.setState({success: false});
    }, 4000);
  }

  toggleForm = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  }


  render() {
    return (
      <section className={this.state.toggled ? "addNoteFormSection toggled" : "addNoteFormSection"}>
        <a href="#" className="tab" onClick={ this.toggleForm }>
          <span className="plus-sign">{this.state.toggled ? '-' : '+'}</span>
        </a>
        <form onSubmit={ this.handleSubmit } className="AddNoteForm">
          <h2>Take Some Notes!</h2>
          <textarea maxLength="250" name="content" onChange={ this.handleChange } placeholder="Write note here...."/>
          <section>
            <span>Tag:</span>
            <select name="tag" onChange={ this.handleChange }>
              <option>Work</option>
              <option>Hobby</option>
              <option>Personal</option>
            </select>
          </section>
          <button>Add Note</button>
          {this.state.error ? <p>Please fill out all required fields</p>: ''}
          {this.state.success ? <p>Note taken!</p> : ''}
        </form>
      </section>
    )
  }
}