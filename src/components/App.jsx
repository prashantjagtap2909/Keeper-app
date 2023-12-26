import React, { useState, useEffect } from "react";
import Create from "./Create";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const oldNotes = window.localStorage.getItem("notes");
  const [notes, setNotes] = useState(
    JSON.parse(oldNotes) || [
      { title: "This is a title", content: "This is a sample note." }
    ]
  );

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header />
      <Create
        onCreate={(noteTitle, noteContent) => {
          const newNote = {
            title: noteTitle,
            content: noteContent
          };
          setNotes(oldNotes => {
            return [...oldNotes, newNote];
          });
        }}
      />
      {notes.map((note, index) => {
        return (
          <Note
            onDelete={id => {
              const newNotes = notes.filter((value, index) => index !== id);
              console.log(newNotes);

              setNotes(() => newNotes);
            }}
            key={index}
            id={index}
            data={note}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
