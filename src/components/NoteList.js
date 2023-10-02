import React from 'react';

function NoteList(props) {
  return (
    <div>
      {props.notes.map((note, index) => (
        <ul key={index}>
          <li onClick={() => props.handleShow(note)} style={{ cursor: 'pointer' }}>{note}</li>
          <button onClick={() => props.DeleteNote(index)}>Delete Note</button>
        </ul>
      ))}
    </div>
  );
}

export default NoteList;
