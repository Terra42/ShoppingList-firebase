import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../db.js';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    return db
      .collection('list')
      .orderBy('date')
      .onSnapshot((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, []);

  const addItem = (event) => {
    event.preventDefault();
    db.collection('list').add({
      name,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      bought: false,
    });
    setName('');
  };

  return (
    <div className="shoppingList">
      <h1>Můj nákupní seznam</h1>
      <ul>
        {items.map((item) => (
          <>
            <li key={item.name}>
              <Link to={`/detail/${item.id}`}>{item.name}</Link>
              <input
                type="checkbox"
                checked={item.bought}
                onChange={(event) => {
                  db.collection('list').doc(item.id).update({
                    bought: event.target.checked,
                  });
                }}
              />
              <button
                onClick={() => db.collection('list').doc(item.id).delete()}
              >
                smazat
              </button>
            </li>
          </>
        ))}
      </ul>
      <form onSubmit={addItem}>
        <label>
          Název:{' '}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button>Přidat</button>
      </form>
    </div>
  );
};

export default ShoppingList;
