import React from 'react';
import './Note.css';

function Note({ id, text, deleteNote }) {
  return (
    <div className="note">
      <p>{text}</p>
      <button onClick={() => deleteNote(id)}>Smazat</button>
    </div>
  );
}

export default Note;
