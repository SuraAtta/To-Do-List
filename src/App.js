import React, { useState } from 'react';
import Note from './components/Note';
import '../src/App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleEditNote = (index, updatedNote) => {
    const newNotes = [...notes];
    newNotes[index] = updatedNote;
    setNotes(newNotes);
  };

  return (
    <div className='app'>
      <div className='app-container'>
           <h1 className='header'>My Tasks</h1>
      <input
      className='inputField'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your note"
      />
      <button className='add' onClick={handleAddNote}>Add Note</button>
      </div>
   
      <div className='nots'>
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            note={note}
            onDelete={handleDeleteNote}
            onEdit={handleEditNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
