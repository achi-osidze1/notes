import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteModal from './NoteModal';

function Note() {
  const [inputText, setInputText] = useState('');  
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedNote, setSelectedNote] = useState('');

  const InputChange = (e) => {
    setInputText(e.target.value);
  };

  const AddNote = () => {
    setNotes([...notes, inputText]);
    setInputText('');
  };

  const DeleteNote = (index) => {
    const updatedNoteList = [...notes];
    updatedNoteList.splice(index,1);
    setNotes(updatedNoteList);
  };

  const handleClose = () => setShow(false);

  const handleShow = (notes) => {
    setSelectedNote(notes);
    setShow(true);
  };

  return (
    <div>
      <input type='text' value={inputText} onChange={InputChange}/>
      <button onClick={AddNote}>Add Note</button>
      <NoteList notes={notes} DeleteNote={DeleteNote} handleShow={handleShow} />
      <NoteModal show={show} handleClose={handleClose} selectedNote={selectedNote}/>
    </div>
  );
}

export default Note;

