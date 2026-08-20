import './App.css';
import NoteState from './context/notes/Notestate';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;