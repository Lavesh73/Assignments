import React, { useState } from 'react';
import './App.css';

const initialState = [
  { id: 1, name: 'Kapde', isPacked: false },
];
function PackingList() {
  const [items, setItems] = useState(initialState);
  const [edit, setEdit] = useState(null);
  const [newItem, setNewItem] = useState('');
  const [text, setText] = useState('');
  const addItem = () => {
    if (!newItem.trim()) return;
    let newId;
    if (items.length == 0) {
      newId = 1;
    } else if (items.length > 0) {
      newId = items[items.length - 1].id + 1;
    }
    setItems([...items, {
      id: newId,
      isPacked: false,
      name: newItem.trim()
    }]);
    setNewItem('');
  };
  const togglePacked = (id) => {
    let newList = [...items];
    let index = newList.findIndex(v => v.id == id);
    newList[index].isPacked = !newList[index].isPacked;
    setItems(newList);
  };
  const deleteItem = (id) => {
    if (edit == id) return setEdit(null);
    setItems(items.filter(v => v.id != id));
  };
  const handleEdit = (id) => {
    let index = items.findIndex(v => v.id == id);
    setText(items[index].name);
    setEdit(id);
  };
  const handleSave = (id) => {
    let index = items.findIndex(v => v.id == id);
    setItems(items.map((v, i) => {
      return index == i ? { ...v, name: text } : v;
    }));
    setEdit(null);
  };

  return (
    <div className="container">
      <h2 className="title">Packing List</h2>

      <div className="inputRow">
        <input
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Add item to pack..."
          className="input"
        />
        <button onClick={addItem} className="button">Add</button>
      </div>

      <ul className="list">
        {items.map(({ id, name, isPacked }) => (
          <li key={id} className="listItem">
            {edit == id ? (
              <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="editInput"
              />
            ) : (
              <span
                onClick={() => togglePacked(id)}
                className="itemText"
                style={{
                  textDecoration: isPacked ? 'line-through' : 'none',
                  color: isPacked ? 'gray' : 'black',
                }}
              >
                {isPacked ? '✔ ' : '☐ '} {name}
              </span>
            )}
            <span>
              {edit == id ? (
                <button onClick={() => handleSave(id)} className="saveBtn">Save</button>
              ) : (
                <button onClick={() => handleEdit(id)} className="editBtn">Edit</button>
              )}
              <button onClick={() => deleteItem(id)} className="deleteBtn">✕</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PackingList;