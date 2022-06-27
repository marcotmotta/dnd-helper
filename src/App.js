import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from './components/sidebar/Sidebar';
import Spell from './components/spell/Spell';
import School from './components/school/School';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div class="app-content">
        <Router>
          <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/school/:school_name" element={<School />}/>
            <Route path="/spell/:spell_name" element={<Spell />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
