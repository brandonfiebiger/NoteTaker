import React, { Component } from 'react';
import { AddNoteForm } from '../Components/AddNoteForm/AddNoteForm';
import dateFormat from 'date-and-time';
import './App.css';
import { NotesContainer } from '../Components/NotesContainer/NotesContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allNotes: [],
      filteredNotes: [],
      filtered: false
    }
  }

  componentDidMount() {
    fetch('https://jcg0fh7yrf.execute-api.us-east-2.amazonaws.com/notes')
      .then(response => response.json())
      .then(allNotes => {
        this.setState({
          allNotes,
        })
      })
      .catch(error => console.log(error));
  }


  addNote = (content, tag) => {
    let date = new Date();
    date = dateFormat.format(date, 'YYYY-MM-DD');
    fetch('https://jcg0fh7yrf.execute-api.us-east-2.amazonaws.com/notes', {
      method: 'POST',
      body: JSON.stringify({
        content,
        tag,
        date
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    this.setState({
      allNotes: [{content, tag, date}, ...this.state.allNotes]
    });
  }

  filterNotes = (properties) => {
    let filteredNotes = this.state.allNotes;

    properties.forEach(property => {
      console.log(property);
      if (property.value.length) {
        filteredNotes = filteredNotes.filter(note => note[property.propertyName] === property.value);
      }
    })
    this.setState({
      filteredNotes: filteredNotes,
      filtered: true
    });
  }

  showAllNotes = () => {
    this.setState({filtered: false});
  }

  render() {
    const { allNotes, filteredNotes, filtered } = this.state;
    return (
      <div className="App">
        <AddNoteForm addNote={ this.addNote }/>
        <NotesContainer notes={ filteredNotes.length || filtered ? filteredNotes : allNotes } filterNotes={this.filterNotes} showAllNotes={this.showAllNotes}/>
      </div>
    );
  }
}

export default App;
