import './App.scss';

import Spell from './components/spell/spell';

function App() {
  return (
    <div className="App">
      <div>Sidebar</div>
      <Spell spell_name="fireball"></Spell>
    </div>
  );
}

export default App;
