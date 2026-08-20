import React from "react";
import Notes from "./Notes";
import AddNote from "./addnote";
import NoteContext from "../context/notes/noteContext";

const Home = (props) => {
  return (
    <>
      <div>Home</div>
      <AddNote showAlert={props.showAlert} />
      <Notes showAlert={props.showAlert} />
    </>
  );
};

export default Home;