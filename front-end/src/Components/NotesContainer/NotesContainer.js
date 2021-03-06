import React from 'react';
import { NoteCard } from '../NoteCard/NoteCard';
import { Filter } from '../Filter/Filter';
import './NotesContainer.css';


export const NotesContainer = props => {

  const displayNotes = props.notes.map(note => <NoteCard {...note} key={ note.id }/>)

  return (
    <main className="NotesContainer">
      <Filter filterNotes={ props.filterNotes } showAllNotes={ props.showAllNotes }/>
      {!props.notes.length ? <p>No notes to show</p> : ''}
      <ul className="notes-list">
        { displayNotes }
      </ul>
    </main>
  )
}