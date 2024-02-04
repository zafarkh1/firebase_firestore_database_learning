import React, { useEffect, useState } from "react";
import { onSnapshot, collection, addDoc } from "firebase/firestore";

import { firestore_database } from "./config/firestore";
import Colors from "./colors";
import "./firestore.css";

const Firestore_colors = () => {
  const [colors, setColors] = useState([{ name: "Loading...", id: 1 }]);

  useEffect(
    () =>
      onSnapshot(collection(firestore_database, "Colors"), (snapshot) =>
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const handleNew = async () => {
    //        ! setDoc() functionality (if you want use this, please import functions)

    // const docRef = doc(firestore_database, "Colors", "1");
    // const payload = { name: "black", value: "#000" };
    // await setDoc(docRef, payload);

    const name = prompt("Enter a color name");
    const value = prompt("Enter a color value");

    // const payload = { name: "Black", value: "#000" }; //without using prompt
    const payload = { name, value };
    const collectionRef = collection(firestore_database, "Colors");
    await addDoc(collectionRef, payload);
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleNew}>
        New
      </button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <a href="#s">edit</a>
            <Colors color={color.value} />
            {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Firestore_colors;
