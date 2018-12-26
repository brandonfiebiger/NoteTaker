import React from 'react';

export const NoteCard = props => (

  <li>
    <p>{props.Date}</p>
    <p>{props.Tag}</p>
    <p>{props.Content}</p>
  </li>
)