import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from './components/sidebar/Sidebar';
import Spell from './components/spell/Spell';
import School from './components/school/School';
import SpellSearch from './components/spellSearch/SpellSearch';

function App() {
  return (
    <div className="App">
        <Router>
          <Sidebar />
          <div class="main-content">
            <Routes>
              <Route path="/" element={<div>Home</div>}/>
              <Route path="/school/:school_name" element={<School />}/>
              <Route path="/spell/search" element={<SpellSearch />}/>
              <Route path="/spell/:spell_name" element={<Spell />}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
