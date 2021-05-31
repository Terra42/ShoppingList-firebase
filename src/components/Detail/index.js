import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../db.js';

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    return db
      .collection('list')
      .doc(id)
      .onSnapshot((doc) => {
        setItem(doc.data());
      });
  }, [id]);

  return (
    <div className="detail">
      <h1>{item === null ? 'Načítám' : item.name}</h1>
      <div>
        Datum vytvoření:{' '}
        {item === null ? 'Načítám data' : item.date.toDate().toLocaleString()}
      </div>
      <div>
        Koupeno: {item === null ? 'Načítám data' : item.bought ? 'Ano' : 'Ne'}
      </div>
      <br />
      <Link to="/">Přejít na výpis</Link>
    </div>
  );
};

export default Detail;
