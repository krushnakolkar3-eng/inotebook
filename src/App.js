import './App.css';
import NoteState from './context/notes/Notestate';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';
import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} showAlert={showAlert} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" render={(props) => <Login {...props} showAlert={showAlert} />} />
            <Route exact path="/signup" render={(props) => <Signup {...props} showAlert={showAlert} />} />
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;