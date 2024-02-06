import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { db } from "./config/firestore";
import {
  handleDelete,
  handleEdit,
  handleCreate,
  handleQueryDelete,
} from "./utils";
import Color from "./color";
import "./style.css";

const Home = () => {
  const [colors, setColors] = useState([{ name: "Loading...", id: 1 }]);

  useEffect(() => {
    const collectionRef = collection(db, "colors");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubscribe;
  }, []);

  return (
    <div className="container">
      <button className="btnNew" onClick={handleCreate}>
        New
      </button>
      <button className="btnNew" onClick={handleQueryDelete}>
        Query Delete
      </button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <button className="btn2" onClick={() => handleEdit(color.id)}>
              edit
            </button>
            <button className="btn2" onClick={() => handleDelete(color.id)}>
              delete
            </button>
            <Color color={color.value} />
            {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
