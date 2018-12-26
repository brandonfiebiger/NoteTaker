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


  addNote = (Content, Tag) => {
    let now = new Date();
    now = date.format(now, 'YYYY-MM-DD');
    fetch('https://jcg0fh7yrf.execute-api.us-east-2.amazonaws.com/notes', {
      method: 'POST',
      body: JSON.stringify({
        Content,
        Tag,
        "Date": now
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
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
