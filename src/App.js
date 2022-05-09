import './App.scss';

import Spell from './components/spell/Spell';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>}/>
          <Route path="/spell/:spell_name" element={<Spell />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
