import React, { useState } from 'react';

function Note({ index, note, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(note);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(index, editValue);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div className='nots-compnents'>
          <input
          className='inputField2'
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button  className='note-1' onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div className='nots-compnents'>
          <span>{note}</span>
          <div className='note-butn'>
            <button className='note-1' onClick={() => onDelete(index)}>Delete</button>
            <button className='note-1' onClick={handleEditClick}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
