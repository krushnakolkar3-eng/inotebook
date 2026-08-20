import NoteContext from "./noteContext";
import { useState } from "react";

const host = "http://localhost:5000";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  // Fetch all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        },
    });
    const json = await response.json();
    if (Array.isArray(json)) {
        setNotes(json);
    } else {
        console.error("Error fetching notes:", json);
        setNotes([]); // fallback so notes.map never crashes
    }
};

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Update a note
  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await response.json();

    const newNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    );
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;