import React, { useState } from 'react';

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
      <input type="text" value={text} onChange={handleChange} placeholder="Zadejte vaši poznámku..." />
      <button type="submit">Přidat Poznámku</button>
    </form>
  );
}

export default NoteForm;
