import React, { Component } from 'react';
import { AddNoteForm } from '../Components/AddNoteForm/AddNoteForm';
import dateFormat from 'date-and-time';
import { NotesContainer } from '../Components/NotesContainer/NotesContainer';
import './App.css';

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
    fetch(`${process.env.REACT_APP_API_URL}`)
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
    fetch(`${process.env.REACT_APP_API_URL}`, {
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
      if (property.value) {
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
        <header>
          <h1>Note<span className="header-span">Taker</span></h1>
        </header>
        <AddNoteForm addNote={ this.addNote }/>
        <NotesContainer notes={ filtered ? filteredNotes : allNotes } filterNotes={this.filterNotes} showAllNotes={this.showAllNotes}/>
      </div>
    );
  }
}

export default App;
