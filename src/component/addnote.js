import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    if (props.showAlert) {
      props.showAlert("Note added successfully", "success");
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="card-title mb-3">Add a Note</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter note title"
                value={note.title}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Enter note description"
                rows="3"
                value={note.description}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                placeholder="e.g. Personal, Work"
                value={note.tag}
                onChange={onChange}
              />
            </div>
            <button
              disabled={note.title.length < 5 || note.description.length < 5}
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;