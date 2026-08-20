import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, getNotes, updateNote } = context;
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    const [search, setSearch] = useState("");
    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNoteHandler = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag,
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        updateNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Note updated successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const filteredNotes = notes.filter((n) => {
        const q = search.toLowerCase();
        return (
            n.title.toLowerCase().includes(q) ||
            n.description.toLowerCase().includes(q) ||
            (n.tag && n.tag.toLowerCase().includes(q))
        );
    });

    return (
        <>
            <style>{`
                .nb-search-wrap {
                    position: relative;
                    max-width: 420px;
                    margin: 24px 0;
                }
                .nb-search-wrap input {
                    width: 100%;
                    border: 2px solid #E5E2D8;
                    border-radius: 8px;
                    padding: 10px 14px 10px 40px;
                    font-size: 15px;
                    font-family: 'Inter', sans-serif;
                    color: #1B1F3B;
                    outline: none;
                    transition: border-color 0.2s ease;
                    background: #FDFCF8;
                }
                .nb-search-wrap input:focus {
                    border-color: #1B1F3B;
                }
                .nb-search-icon {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #9CA3AF;
                    pointer-events: none;
                }
                .nb-search-clear {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: #9CA3AF;
                    font-size: 18px;
                    cursor: pointer;
                    line-height: 1;
                    padding: 4px;
                }
                .nb-search-clear:hover {
                    color: #C0392B;
                }
                .nb-search-count {
                    font-size: 13px;
                    color: #9CA3AF;
                    margin-top: 6px;
                }
            `}</style>

            {/* Hidden button that triggers the modal */}
            <button
                type="button"
                ref={ref}
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
            >
                Launch modal
            </button>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nb-search-wrap">
                <svg className="nb-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                    type="text"
                    placeholder="Search notes by title, description, or tag..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                    <button className="nb-search-clear" onClick={() => setSearch("")} type="button" aria-label="Clear search">
                        ×
                    </button>
                )}
                {search && (
                    <div className="nb-search-count">
                        {filteredNotes.length} of {notes.length} notes match
                    </div>
                )}
            </div>

            <div className="row my-3">
                {filteredNotes.length === 0 && (search ? "No matching notes found" : "No notes to display")}
                {filteredNotes.map((note) => (
                    <Noteitem key={note._id} updateNote={updateNoteHandler} note={note} showAlert={props.showAlert} />
                ))}
            </div>
        </>
    );
};

export default Notes;