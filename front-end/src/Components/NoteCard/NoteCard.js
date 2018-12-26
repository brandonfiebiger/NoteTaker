import React from 'react';

export const NoteCard = props => (

  <li>
    <p>{ props.date }</p>
    <p>{ props.tag }</p>
    <p>{ props.content }</p>
  </li>
)