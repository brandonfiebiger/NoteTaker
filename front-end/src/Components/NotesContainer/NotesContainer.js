import React from 'react';
import { NoteCard } from '../NoteCard/NoteCard';


export const NotesContainer = props => {

  const displayNotes = props.notes.map(note => <NoteCard {...note} key={ note.id }/>)

  return (
    <main>
      <ul>
        { displayNotes }
      </ul>
    </main>
  )
}