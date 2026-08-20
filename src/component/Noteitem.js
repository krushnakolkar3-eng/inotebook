import React, { useContext } from 'react';
import NoteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, showAlert, updateNote } = props;

    if (!note) { 
        return null;
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
        if (confirmDelete) {
            deleteNote(note._id);
            if (showAlert) {
                showAlert("Note deleted successfully", "success");
            }
        }
    };

    return ( 
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i
                            className="fas fa-trash-alt mx-2"
                            style={{ cursor: "pointer" }}
                            onClick={handleDelete}
                        ></i>
                        <i
                            className="fas fa-edit mx-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => updateNote(note)}
                        ></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Noteitem;