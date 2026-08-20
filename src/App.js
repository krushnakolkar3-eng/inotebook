import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Notestate from './context/notes/Notestate';

function App() {
  return (
    <>
    <Notestate>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Notestate>
    </>

  );
}

export default App;