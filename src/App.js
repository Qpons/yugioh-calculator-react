import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper'
import GameStatus from './components/GameStatus';

function App() {
  return (
    <div className="App">
      <GameStatus/>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
