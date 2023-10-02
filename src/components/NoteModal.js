import React from 'react';
import jsPDF from 'jspdf';
import { Modal, Button } from 'react-bootstrap';

function NoteModal({ show, handleClose, selectedNote }) {
  const GeneratePDF = () => {
    const doc = new jsPDF();
    doc.text(selectedNote, 10, 10);
    doc.save('note.pdf');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Notes</Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-between'>
        {selectedNote} 
        <button onClick={()=> GeneratePDF()}>Download PDF</button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NoteModal;
