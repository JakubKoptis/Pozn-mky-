import React, { useState } from 'react';
import './NoteForm.css';

function NoteForm({ addNote }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addNote(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input type="text" value={text} onChange={handleChange} placeholder="Enter note..." />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
