import React, { Component } from 'react';
import { AddNoteForm } from '../Components/AddNoteForm/AddNoteForm';
import date from 'date-and-time';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    fetch('https://jcg0fh7yrf.execute-api.us-east-2.amazonaws.com/notes')
      .then(response => response.json())
      .then(notes => {
        this.setState({
          notes,
        })
      })
      .catch(error => console.log(error));
  }


  addNote = (content, tag) => {
    let now = new Date();
    now = date.format(now, 'YYYY-MM-DD');
    console.log(now, content, tag);
  }

  render() {
    return (
      <div className="App">
        <AddNoteForm addNote={this.addNote}/>
      </div>
    );
  }
}

export default App;
