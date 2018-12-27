import React from 'react';
import './NoteCard.css'

export const NoteCard = props => (

  <li className="NoteCard">
    <p className="content">{ props.content }</p>
    <span className="note-and-tag">
      <p className="note-property">Date: <span>{ props.date }</span></p>
      <p className="note-property">Tags: <span>{ props.tag }</span></p>
    </span>
  </li>
)